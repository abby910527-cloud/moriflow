import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { ActionButton } from '@/components/ActionButton';

export default function NewExpensePage(){return <AppShell><div className="space-y-6"><Link href="/finance" className="font-bold text-mocha">← 返回財務管理</Link><div><p className="text-sm font-bold text-mocha">New Expense</p><h2 className="text-3xl font-black text-cocoa">新增支出</h2></div><Card><div className="grid gap-4 md:grid-cols-2"><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="支出名稱"/><select className="rounded-2xl border border-warmgray bg-cream px-4 py-3"><option>Abby</option><option>小幫手 A</option><option>小幫手 B</option></select><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="金額"/><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" type="date"/><ActionButton message="支出已儲存（示範版）" redirectTo="/finance" className="rounded-2xl bg-mocha px-5 py-3 font-bold text-white md:col-span-2">儲存支出</ActionButton></div></Card></div></AppShell>}
