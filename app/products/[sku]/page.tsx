import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { products } from '@/lib/data';
import { ActionButton } from '@/components/ActionButton';

export default function ProductDetailPage({ params }: { params: { sku: string } }) {
  const product = products.find(p => p.sku === params.sku);
  if (!product) return notFound();
  return <AppShell><div className="space-y-6"><Link href="/products" className="font-bold text-mocha">← 返回商品列表</Link><div><p className="text-sm font-bold text-mocha">Product Detail</p><h2 className="text-3xl font-black text-cocoa">{product.name}</h2></div><div className="grid gap-4 lg:grid-cols-3"><Card className="lg:col-span-1"><div className="h-52 rounded-3xl bg-cream"/></Card><Card className="lg:col-span-2"><div className="grid gap-4 md:grid-cols-2"><p>SKU：{product.sku}</p><p>分類：{product.category}</p><p>售價：{product.price}</p><p>成本：{product.cost}</p><p>庫存：{product.stock}</p><p>狀態：{product.status}</p></div><div className="mt-6 flex gap-3"><ActionButton message="已開啟編輯商品（示範版）" className="rounded-2xl bg-mocha px-5 py-3 font-bold text-white">編輯商品</ActionButton><ActionButton message="已新增規格欄位（示範版）" className="rounded-2xl bg-cream px-5 py-3 font-bold text-cocoa">新增規格</ActionButton></div></Card></div></div></AppShell>
}
