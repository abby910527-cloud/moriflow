import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center bg-cream p-5"><div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-soft"><Logo/><h1 className="mt-8 text-3xl font-black text-cocoa">登入 MoriFlow</h1><p className="mt-2 text-cocoa/60">之後可串接 Supabase Auth、Google 與 LINE 登入。</p><div className="mt-8 space-y-4"><input className="w-full rounded-2xl border border-warmgray bg-cream px-4 py-4 outline-none" placeholder="Email"/><input className="w-full rounded-2xl border border-warmgray bg-cream px-4 py-4 outline-none" placeholder="密碼" type="password"/><Link href="/dashboard" className="block rounded-2xl bg-mocha px-5 py-4 text-center font-bold text-white">登入</Link><button className="w-full rounded-2xl border border-warmgray px-5 py-4 font-bold text-cocoa">使用 Google 登入</button></div></div></main>
}
