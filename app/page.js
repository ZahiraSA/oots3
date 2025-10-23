import { Footer, Section1, Section2, Section3, SocialIcon } from '@/components/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      {/* Dekorasi atas kiri */}
      <Image src="/images/decor-pg.svg" alt="Description" width={400} height={400} className="absolute" />
      {/* Bagian konten pertama */}
      <Section1 />

      {/* Dekorasi 1 */}
      <Image
        src="/images/download-removebg-preview.png"
        alt="Description"
        width={400}
        height={400}
        className="absolute right-0 bottom-1/2 rotate-0"
      />

      {/* Dekorasi mahkota */}
      <Image
        src="/images/mahkota.png"
        alt="Description"
        width={300}
        height={300}
        className="absolute bottom-1/2 left-16 translate-y-6"
      />

      {/* Dekorasi 2 */}
      <Image
        src="/images/zahira.png"
        alt="Description"
        width={400}
        height={400}
        className="absolute bottom-1/2 left-0 translate-y-10"
      />

      {/* Dekorasi 3 */}
      <Image
        src="/images/decor-pg.svg"
        alt="Description"
        width={400}
        height={400}
        className="absolute bottom-1/2 left-0 translate-y-full"
      />

      {/* Bagian konten kedua */}
      <Section2 />

      {/* Dekorasi 4 */}
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
