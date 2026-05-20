import Link from 'next/link';
import { BarChart3, Home, Package, Settings, ShoppingBag, Wallet } from 'lucide-react';
import { Logo } from './Logo';

const items = [
  { href: '/dashboard', label: '總覽', icon: Home },
  { href: '/orders', label: '訂單', icon: Package },
  { href: '/products', label: '商品', icon: ShoppingBag },
  { href: '/finance', label: '財務', icon: Wallet },
  { href: '/settings', label: '設定', icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-warmgray/80 bg-white/70 p-6 backdrop-blur-xl lg:block">
        <Logo />
        <nav className="mt-10 space-y-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-cocoa transition hover:bg-cream">
              <item.icon size={18} /> {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-cream p-5 shadow-card">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-cocoa"><BarChart3 size={16}/>Growth Plan</div>
          <p className="text-xs leading-6 text-cocoa/70">目前為 SaaS Starter 架構，可繼續串接 Supabase 登入與資料庫。</p>
        </div>
      </aside>
      <main className="pb-24 lg:ml-72 lg:pb-0">
        <header className="sticky top-0 z-30 border-b border-warmgray/70 bg-cream/85 px-5 py-4 backdrop-blur-xl lg:px-8">
          <div className="flex items-center justify-between">
            <div className="lg:hidden"><Logo /></div>
            <div className="hidden lg:block">
              <p className="text-sm text-cocoa/60">歡迎回來，Abby</p>
              <h1 className="text-2xl font-bold text-cocoa">MoriFlow 後台</h1>
            </div>
            <Link href="/login" className="rounded-2xl bg-mocha px-4 py-2 text-sm font-bold text-white shadow-card">登入</Link>
          </div>
        </header>
        <div className="p-5 lg:p-8">{children}</div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-warmgray bg-white/90 px-2 py-2 backdrop-blur-xl lg:hidden">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-semibold text-cocoa">
            <item.icon size={18} /> {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
