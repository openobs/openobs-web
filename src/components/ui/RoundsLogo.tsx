export function RoundsLogo({ className = '', size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeLinecap="round"
    >
      <path
        d="M18 7.75A28 28 0 1 1 7.75 46"
        stroke="currentColor"
        strokeWidth="7.8"
      />
      <path
        d="M45 32A13 13 0 1 1 32 19"
        stroke="currentColor"
        strokeWidth="7.8"
      />
      <circle cx="32" cy="32" r="5" fill="var(--color-accent)" />
    </svg>
  )
}
