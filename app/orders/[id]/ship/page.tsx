import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';

export default function ShipPage({ params }: { params: { id: string } }) {
  return <AppShell><div className="space-y-6"><Link href={`/orders/${params.id}`} className="font-bold text-mocha">← 返回訂單</Link><div><p className="text-sm font-bold text-mocha">Shipment</p><h2 className="text-3xl font-black text-cocoa">建立出貨｜{params.id}</h2></div><Card><div className="grid gap-4 md:grid-cols-2"><select className="rounded-2xl border border-warmgray bg-cream px-4 py-3"><option>7-11 店到店</option><option>全家店到店</option><option>宅配</option></select><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="物流單號"/><textarea className="rounded-2xl border border-warmgray bg-cream px-4 py-3 md:col-span-2" placeholder="出貨備註" rows={5}/><button className="rounded-2xl bg-mocha px-5 py-3 font-bold text-white md:col-span-2">儲存出貨資料</button></div></Card></div></AppShell>
}
