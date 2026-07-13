import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "吉皓哲｜AI Infrastructure Engineer",
  description: "吉皓哲的个人主页：AI Infrastructure、分布式训练与高性能数据系统。",
  openGraph: { title: "吉皓哲｜AI Infrastructure Engineer", description: "AI Infrastructure · 分布式训练 · 高性能数据系统", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
