export function formatDate(value: string | null | undefined): string {
  if (!value) return 'Never'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Never'
  return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatRelative(value: string | null | undefined): string {
  if (!value) return 'Not started yet'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Not started yet'
  const minutes = Math.round((Date.now() - date.getTime()) / 60000)
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} min ago`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours} hr ago`
  const days = Math.round(hours / 24)
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`
  return formatDate(value)
}

export function formatHours(hours: number): string {
  if (hours <= 0) return '0 h'
  if (hours < 1) return `${Math.round(hours * 60)} min`
  return `${hours.toFixed(1)} h`
}

export function initials(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('') || '?'
  )
}

export function greeting(date = new Date()): string {
  const hour = date.getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export const roleLabels: Record<string, string> = {
  student: 'Student',
  instructor: 'Instructor',
  admin: 'Admin',
  org_admin: 'Organization admin',
}
