import './globals.css'
import Navbar from "./components/Navbar"

export const metadata = {
  title: 'WikiRockets',
  description: 'Creating the WikiRockets page with Nextjs and tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
