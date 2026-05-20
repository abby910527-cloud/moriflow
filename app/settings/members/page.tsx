import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Card';
import { ActionButton } from '@/components/ActionButton';

export default function MembersPage(){return <AppShell><div className="space-y-6"><Link href="/settings" className="font-bold text-mocha">← 返回設定</Link><div><p className="text-sm font-bold text-mocha">Members</p><h2 className="text-3xl font-black text-cocoa">子帳號管理</h2></div><Card><div className="mb-4 grid gap-3 md:grid-cols-3"><input className="rounded-2xl border border-warmgray bg-cream px-4 py-3" placeholder="Email"/><select className="rounded-2xl border border-warmgray bg-cream px-4 py-3"><option>Admin</option><option>Staff</option><option>Warehouse</option><option>Finance</option></select><ActionButton message="成員已新增（示範版）" className="rounded-2xl bg-mocha px-5 py-3 font-bold text-white">新增成員</ActionButton></div>{['Abby｜Owner','小幫手 A｜Warehouse','小幫手 B｜Finance'].map(x=><div key={x} className="mb-3 rounded-2xl bg-cream p-4 font-bold text-cocoa">{x}</div>)}</Card></div></AppShell>}
