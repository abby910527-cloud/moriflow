import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { products } from '@/lib/data';

export default function ProductsPage(){return <AppShell><div className="space-y-6"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-bold text-mocha">Products</p><h2 className="text-3xl font-black text-cocoa">商品管理</h2></div><Link href="/products/new" className="rounded-2xl bg-mocha px-5 py-3 text-center font-bold text-white">新增商品</Link></div><div className="grid gap-4 md:grid-cols-3">{products.map(p=><Link href={`/products/${p.sku}`} key={p.sku} className="block transition hover:-translate-y-1"><Card><div className="mb-4 h-32 rounded-3xl bg-cream"/><p className="text-sm font-bold text-mocha">{p.sku}</p><h3 className="mt-2 text-xl font-black text-cocoa">{p.name}</h3><div className="mt-4 flex justify-between text-sm font-bold text-cocoa"><span>庫存 {p.stock}</span><span>{p.price}</span></div><p className="mt-4 text-sm font-bold text-mocha">點擊查看商品詳細 →</p></Card></Link>)}</div></div></AppShell>}
