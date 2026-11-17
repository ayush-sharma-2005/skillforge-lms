import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { ForgotPasswordPage } from '@/features/auth/ForgotPasswordPage'
import { LoginPage } from '@/features/auth/LoginPage'
import { RegisterPage } from '@/features/auth/RegisterPage'
import { ResetPasswordPage } from '@/features/auth/ResetPasswordPage'
import { NotFoundPage } from '@/features/home/NotFoundPage'
import { RoleHome } from '@/features/home/RoleHome'
import { ProtectedRoute, SessionGate } from '@/routes/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/login"
        element={
          <SessionGate>
            <LoginPage />
          </SessionGate>
        }
      />
      <Route
        path="/register"
        element={
          <SessionGate>
            <RegisterPage />
          </SessionGate>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Signed in */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<RoleHome />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
