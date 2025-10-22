import Image from 'next/image'

export default function Navbar() {
  return (
    // <nav className="font-poppins sticky flex justify-between px-5 py-7">
    <nav className="font-poppins sticky top-0 z-50 flex justify-between bg-white/10 px-5 py-3 backdrop-blur">
      <div className="w-1/6">
        <p className="cursor-default text-2xl font-press">Aisyirin</p>
      </div>

      <div className="flex w-4/6 justify-center gap-5 text-sm font-press">
        {['Home', 'About', 'Stacks'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative flex cursor-pointer items-center after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-[#FFEB00] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex w-1/6 justify-end gap-2">
        <div className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-120 hover:bg-gray-400/50">
        <a href="https://www.instagram.com/zsaaisyhf/" target='_blank'>
          <Image src="/images/icons8-instagram.svg" width={30} height={30} alt="instagram logo" />
        </a>
        </div>

        <div className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-120 hover:bg-gray-400/50">
        <a href="https://www.linkedin.com/in/zahira-shofa-aisyirin-7746b134b/" target='_blank'>
          <Image src="/images/icons8-linkedin.svg" width={30} height={30} alt="linkedln logo" />
          </a>
        </div>
      </div>
    </nav>
  )
}
