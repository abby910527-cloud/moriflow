import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { orders, stats } from '@/lib/data';

export default function DashboardPage() {
  return <AppShell><div className="space-y-6"><div><p className="text-sm font-bold text-mocha">Dashboard</p><h2 className="text-3xl font-black text-cocoa">今日營運總覽</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map(s=><Link key={s.label} href={s.href} className="block transition hover:-translate-y-1"><Card><p className="text-sm text-cocoa/60">{s.label}</p><h3 className="mt-2 text-2xl font-black text-cocoa">{s.value}</h3><p className="mt-3 flex items-center justify-between text-sm font-bold text-mocha">{s.note}<ArrowRight size={16}/></p></Card></Link>)}</div><Card><div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-black text-cocoa">近期訂單</h3><Link href="/orders" className="text-sm font-bold text-mocha">查看全部</Link></div><div className="space-y-3">{orders.map(o=><Link href={`/orders/${o.id}`} key={o.id} className="grid gap-2 rounded-2xl bg-cream p-4 text-sm font-semibold text-cocoa transition hover:bg-oat/30 md:grid-cols-5"><span>{o.id}</span><span>{o.name}</span><span>{o.total}</span><span>{o.status}</span><span>{o.date}</span></Link>)}</div></Card></div></AppShell>
}
