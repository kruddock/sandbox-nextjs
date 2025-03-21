type RootLayoutProps = {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
