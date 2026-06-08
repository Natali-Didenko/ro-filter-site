import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RO filter | Фільтри для води",
  description:
    "Продаж фільтрів для води, заміна картриджів та професійне встановлення систем очищення.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
