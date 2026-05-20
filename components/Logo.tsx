import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mocha text-lg font-bold text-white shadow-card">M</div>
      <div>
        <div className="text-lg font-bold tracking-tight text-cocoa">MoriFlow</div>
        <div className="text-xs tracking-[0.2em] text-mocha">SELLER OS</div>
      </div>
    </Link>
  );
}
