import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MoriFlow｜質感電商管理系統',
  description: '專為團購、韓系品牌與選物店打造的質感 SaaS 管理系統。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
