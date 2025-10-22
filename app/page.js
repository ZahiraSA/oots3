import { Footer, Section1, Section2, Section3, SocialIcon } from '@/components/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      {/* Dekorasi atas kiri */}
      <Image src="/images/decor-pg.svg" alt="Description" width={400} height={400} className="absolute" />

      {/* Bagian konten pertama */}
      <Section1 />

      {/* Dekorasi kanan tengah (ungu/pink) */}
      <Image
        src="/images/decor-pg.svg"
        alt="Description"
        width={400}
        height={400}
        className="absolute right-0 bottom-1/2 rotate-90"
      />

      {/* Dekorasi kiri tengah (kuning) */}
      <Image
        src="/images/WhatsApp Image 2025-10-22 at 20.24.40_a1f2b84d-Photoroom.png"
        alt="Description"
        width={400}
        height={400}
        className="absolute bottom-1/2 left-0 translate-y-full"
      />

      {/* Bagian konten kedua */}
      <Section2 />

      {/* Dekorasi kanan bawah (biru/purple) */}
      <Image
        src="/images/decor-bp.svg"
        alt="Description"
        width={400}
        height={400}
        className="absolute right-0 bottom-0 -translate-y-1/2"
      />

      {/* Bagian konten ketiga */}
      <Section3 />

      {/* Footer halaman */}
      <Footer />
    </main>
  )
}
