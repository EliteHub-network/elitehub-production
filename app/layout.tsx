export const metadata = {
  title: 'EliteHub - Swiss Precision Business Automation',
  description: 'Swiss-precision automation systems that liberate 20+ hours weekly while scaling your revenue exponentially.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}