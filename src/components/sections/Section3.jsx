import { SocialIcon } from '../ui'

export default function Section3() {
  return (
    <section id="stacks" className="mb-32 flex w-full justify-center">
      {/* Card utama dengan efek glassmorphism (transparan, blur, dan bayangan halus) */}
      <div className="flex flex-col gap-5 rounded-xl border border-white/20 bg-white/20 p-10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:shadow-xl">
        <p className="text-center text-2xl font-press text-[#FFEB00]">Stack</p>

        {/* Deskripsi singkat tentang isi bagian Stack */}
        <p className="max-w-md text-center text-sm text-white/90">
         The technologies I used to build this project range from front-end frameworks to developer tools. You can explore each of these to understand the modern workflow in web development.
        </p>

        {/* Daftar Frameworks dan Libraries */}
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-press text-[#FFEB00]/90">Frameworks & Libraries</p>
          {/* Baris ikon-ikon framework yang digunakan */}
          <div className="flex justify-center gap-3">
            {/* Komponen SocialIcon menampilkan logo + tooltip saat di-hover */}
            <SocialIcon src="/images/react.svg" alt="React" tooltip="React" />
            <SocialIcon src="/images/nextjs.svg" alt="Next.js" tooltip="Next.js" />
            <SocialIcon src="/images/tailwindcss.svg" alt="Tailwind CSS" tooltip="Tailwind CSS" />
          </div>
        </div>

        {/* Daftar Tools yang digunakan */}
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-press text-[#FFEB00]/90">Tools</p>
          {/* Baris ikon-ikon tools */}
          <div className="flex justify-center gap-3">
            <SocialIcon src="/images/vscode.svg" alt="VSCode" tooltip="VSCode" />
            <SocialIcon src="/images/github.svg" alt="GitHub" tooltip="GitHub" />
          </div>
        </div>
      </div>
    </section>
  )
}
