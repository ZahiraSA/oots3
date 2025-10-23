export default function Section2() {
  return (
    <section id="about" className="min-h-[70vh]">
      {/* text about */}
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-center text-xl font-press">About me</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-15 border-b-2 border-[#577BC1]" />
          <div className="h-3 w-3 rotate-45 bg-white" />
          <div className="h-1 w-15 border-b-2 border-[#577BC1]" />
        </div>
      </div>

      {/* biografi singkat */}
      <div className="flex justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center text-center">
          <p className="text-xl font-press text-[#00b4d8]">I'm a Developer(≧∇≦)ﾉ</p>
          <p className="mb-3 text-1xl font-press capitalize">i can build amazing web applications.</p>
          <p className="italic">
           Hey there! I’m Zahira — a cheerful and curious developer who loves bringing creative ideas to life through code! 🌙✨ I enjoy building modern, responsive, and fun web applications that make people’s digital experiences smoother and more exciting. Every project is a new adventure for me to learn, experiment, and grow. I’m always open to collaborate, share ideas, and create something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  )
}
