import '../styles/globals.css'

export const metadata = {
  title: 'bechgrid',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-gray-900 bg-slate-100 h-screen mx-auto'>
        {children}
      </body>
    </html>
  )
}
