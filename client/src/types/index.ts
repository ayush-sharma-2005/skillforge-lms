// Shapes mirror the server responses (server/src/modules/*).

export type UserRole = 'student' | 'instructor' | 'admin' | 'org_admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  isEmailVerified?: boolean
  createdAt?: string
}

export interface AuthResponse {
  user: User
}

/** GET /api/students/dashboard and /api/students/my-courses */
export interface CourseProgress {
  completedLessons: number
  totalLessons: number
  percentage: number
  lastAccessedAt: string | null
}

export interface EnrolledCourse {
  courseId: string
  title: string
  shortDescription?: string
  description: string
  thumbnail?: string
  price: number
  category: string
  level: string
  enrolledAt: string | null
  progress: CourseProgress
}

export interface DashboardSummary {
  totalEnrolledCourses: number
  completedCourses: number
  inProgressCourses: number
  overallProgress: number
}

export interface StudentDashboard {
  summary: DashboardSummary
  courses: EnrolledCourse[]
  recentLearning: EnrolledCourse[]
}

/** GET /api/learning-time/student/summary */
export interface TimeSummary {
  totalAllTimeSeconds: number
  totalAllTimeHours: number
  past7DaysHours: number
  past30DaysHours: number
  dailyAverageMinutes: number
}

export interface DailyTime {
  date: string
  seconds: number
  minutes: number
  hours: number
}

export interface CourseTime {
  courseId: string
  title?: string
  thumbnail?: string
  totalSeconds: number
  totalHours: number
  activeDaysCount: number
  percentageShare: number
}

export interface StudentTimeAnalytics {
  summary: TimeSummary
  dailyBreakdown: DailyTime[]
  courseBreakdown: CourseTime[]
}
