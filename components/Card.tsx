export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[28px] bg-white p-6 shadow-card ${className}`}>{children}</div>;
}
