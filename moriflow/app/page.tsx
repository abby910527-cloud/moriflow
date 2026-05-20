import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Smartphone, WalletCards } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Card } from '@/components/Card';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-cocoa/70 md:flex">
          <a href="#features">功能</a><a href="#pricing">價格</a><a href="#mobile">手機版</a>
        </nav>
        <Link href="/login" className="rounded-2xl bg-cocoa px-5 py-3 text-sm font-bold text-white">開始使用</Link>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-mocha shadow-card"><Sparkles size={16}/> 奶油系電商 SaaS</div>
          <h1 className="text-5xl font-black leading-tight tracking-tight text-cocoa lg:text-7xl">讓團購與品牌管理變得更簡單。</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa/70">MoriFlow 專為團購主、韓系品牌、童裝店與選物店打造，整合訂單、商品、出貨與財務管理。</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-mocha px-6 py-4 font-bold text-white shadow-soft">查看後台 <ArrowRight size={18}/></Link>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-cocoa shadow-card">查看方案</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-rose blur-3xl" />
          <Card className="relative space-y-5">
            <div className="flex items-center justify-between"><div><p className="text-sm text-cocoa/60">今日營收</p><h3 className="text-4xl font-black text-cocoa">NT$ 28,460</h3></div><div className="rounded-2xl bg-sage/20 px-3 py-2 text-sm font-bold text-cocoa">+18%</div></div>
            <div className="grid grid-cols-2 gap-4">
              {['待出貨 16', '今日訂單 42', '低庫存 3', '已付款 31'].map((x) => <div key={x} className="rounded-3xl bg-cream p-5 font-bold text-cocoa">{x}</div>)}
            </div>
            <div className="rounded-3xl bg-cocoa p-5 text-white"><p className="text-sm opacity-70">熱銷商品</p><p className="text-xl font-bold">奶油針織外套</p></div>
          </Card>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-black text-cocoa lg:text-5xl">為小品牌設計的完整工作流</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[['訂單管理','從收單、付款到出貨狀態一次掌握。'],['商品與庫存','分類、規格、SKU、庫存警示都能管理。'],['財務分析','收入、支出、利潤與付款人統計。']].map(([t,d]) => <Card key={t}><CheckCircle2 className="mb-4 text-mocha"/><h3 className="text-xl font-bold text-cocoa">{t}</h3><p className="mt-3 leading-7 text-cocoa/70">{d}</p></Card>)}
        </div>
      </section>

      <section id="mobile" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Card className="grid items-center gap-8 lg:grid-cols-2">
          <div><Smartphone className="mb-5 text-mocha"/><h2 className="text-3xl font-black text-cocoa">手機優先，團購主更好操作</h2><p className="mt-4 leading-8 text-cocoa/70">手機版採卡片式設計，不用在小螢幕硬看表格，適合外出收單、查詢訂單與快速出貨。</p></div>
          <div className="mx-auto w-full max-w-xs rounded-[36px] bg-cocoa p-4 shadow-soft"><div className="rounded-[28px] bg-cream p-4"><div className="mb-4 h-8 rounded-full bg-white"/><div className="space-y-3">{['林小姐｜NT$1,280','王小姐｜NT$2,450','陳小姐｜NT$890'].map(x=><div key={x} className="rounded-2xl bg-white p-4 font-bold text-cocoa shadow-card">{x}</div>)}</div></div></div>
        </Card>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-black text-cocoa lg:text-5xl">方案價格</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Starter｜NT$399/月','Growth｜NT$999/月','Pro｜NT$2999/月'].map((p,i)=><Card key={p} className={i===1?'ring-2 ring-mocha':''}><WalletCards className="mb-4 text-mocha"/><h3 className="text-2xl font-black text-cocoa">{p}</h3><p className="mt-4 text-cocoa/70">適合從個人賣家到品牌商家逐步升級。</p></Card>)}
        </div>
      </section>
    </main>
  );
}
