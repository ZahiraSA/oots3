import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

// Inisialisasi font Poppins
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Metadata global
export const metadata = {
  title: 'My Portfolio — Zahira Shofa A',
  description: 'Website portofolio pribadi yang menampilkan proyek, skill, dan informasi tentang saya.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased text-white relative overflow-x-hidden`}>
        
        {/* Background Pattern */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            backgroundColor: '#101014',
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
              radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
            `,
            backgroundSize:
              '80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%',
            backgroundPosition: '0 0, 0 0, 0 0, 40px 40px, center',
          }}
        />

        {/* Navbar selalu di atas */}
        <Navbar />

        {/* Konten utama */}
        <main className="fontpop">{children}</main>

      </body>
    </html>
  )
}
