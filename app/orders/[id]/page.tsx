import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { orders } from '@/lib/data';
import { ActionButton } from '@/components/ActionButton';

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders.find(o => o.id === params.id);
  if (!order) return notFound();
  return <AppShell><div className="space-y-6"><Link href="/orders" className="font-bold text-mocha">← 返回訂單列表</Link><div><p className="text-sm font-bold text-mocha">Order Detail</p><h2 className="text-3xl font-black text-cocoa">{order.id}</h2></div><div className="grid gap-4 lg:grid-cols-3"><Card><h3 className="text-xl font-black text-cocoa">客戶資料</h3><div className="mt-4 space-y-2 text-cocoa/80"><p>姓名：{order.name}</p><p>電話：{order.phone}</p><p>地址：{order.address}</p></div></Card><Card><h3 className="text-xl font-black text-cocoa">金額與狀態</h3><div className="mt-4 space-y-2 text-cocoa/80"><p>金額：{order.total}</p><p>狀態：{order.status}</p><p>日期：{order.date}</p></div></Card><Card><h3 className="text-xl font-black text-cocoa">快速操作</h3><div className="mt-4 grid gap-3"><Link href={`/orders/${order.id}/ship`} className="rounded-2xl bg-mocha px-4 py-3 text-center font-bold text-white">建立出貨</Link><ActionButton print className="rounded-2xl bg-cream px-4 py-3 font-bold text-cocoa">列印出貨單</ActionButton></div></Card></div><Card><h3 className="text-xl font-black text-cocoa">商品明細</h3><div className="mt-4 space-y-3">{order.items.map(item => <div key={item} className="rounded-2xl bg-cream p-4 font-bold text-cocoa">{item}</div>)}</div></Card><Card><h3 className="text-xl font-black text-cocoa">備註</h3><p className="mt-3 text-cocoa/80">{order.note}</p></Card></div></AppShell>
}
