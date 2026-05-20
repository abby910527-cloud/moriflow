import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { orders, stats } from '@/lib/data';

export default function DashboardPage() {
  return <AppShell><div className="space-y-6"><div><p className="text-sm font-bold text-mocha">Dashboard</p><h2 className="text-3xl font-black text-cocoa">今日營運總覽</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map(s=><Card key={s.label}><p className="text-sm text-cocoa/60">{s.label}</p><h3 className="mt-2 text-2xl font-black text-cocoa">{s.value}</h3><p className="mt-3 text-sm font-bold text-mocha">{s.note}</p></Card>)}</div><Card><h3 className="mb-4 text-xl font-black text-cocoa">近期訂單</h3><div className="space-y-3">{orders.map(o=><div key={o.id} className="grid gap-2 rounded-2xl bg-cream p-4 text-sm font-semibold text-cocoa md:grid-cols-5"><span>{o.id}</span><span>{o.name}</span><span>{o.total}</span><span>{o.status}</span><span>{o.date}</span></div>)}</div></Card></div></AppShell>
}
