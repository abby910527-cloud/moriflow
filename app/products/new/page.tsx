import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';

export default function NewProductPage(){return <AppShell><div className="space-y-6"><Link href="/products" className="font-bold text-mocha">← 返回商品列表</Link><div><p className="text-sm font-bold text-mocha">New Product</p><h2 className="text-3xl font-black text-cocoa">新增商品</h2></div><Card><div className="grid gap-4 md:grid-cols-2"><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="商品名稱"/><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="商品分類"/><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="售價"/><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="庫存"/><button className="rounded-2xl bg-mocha px-5 py-3 font-bold text-white md:col-span-2">建立商品</button></div></Card></div></AppShell>}
