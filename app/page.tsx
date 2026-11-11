
import Navbar from "./components/Navbar";

const whatsappLink =
  "https://wa.me/254799638790?text=Hello%20Adams!%20I%20am%20interested%20in%20getting%20a%20website%20developed.";

const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=adamskipsang6%40gmail.com&su=Website%20Development%20Inquiry";

const services = [
  {
    number: "01",
    title: "Restaurant Websites",
    description:
      "Elegant restaurant websites featuring menus, galleries, reservations and contact information.",
  },
  {
    number: "02",
    title: "Business Websites",
    description:
      "Professional websites that help businesses establish credibility and reach more customers.",
  },
  {
    number: "03",
    title: "Responsive Web Design",
    description:
      "Modern website experiences designed to look and work beautifully on phones, tablets and computers.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080811] text-white">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative flex min-h-[680px] items-center overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-700/20 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28">
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Web Developer · Kenya
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Building digital
            <br />
            experiences that
            <br />
            <span className="text-purple-500">move businesses.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I'm Adams Kipsang. I create modern, responsive websites
            that help businesses build their online presence and
            connect with more customers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500">
              Explore My Work →
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-purple-500 hover:bg-white/5">
              Get in Touch
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold">01</p>
              <p className="mt-2 text-sm text-gray-500">Featured project</p>
            </div>
            <div>
              <p className="text-3xl font-bold">03</p>
              <p className="mt-2 text-sm text-gray-500">Core services</p>
            </div>
            <div>
              <p className="text-3xl font-bold">∞</p>
              <p className="mt-2 text-sm text-gray-500">Ideas to build</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-[#0d0d18] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              About Me
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Turning ideas into
              <span className="text-purple-500"> digital reality.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-gray-400">
              I'm a web developer based in Kenya with an interest
              in building useful, visually appealing digital
              experiences for businesses and individuals.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-400">
              My focus is on clean design, responsive layouts,
              usability and creating websites that make a strong
              first impression.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            What I Do
          </p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Services I offer.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.number} className="rounded-2xl border border-white/10 bg-[#10101c] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/60">
                <p className="text-sm font-semibold text-purple-400">{service.number}</p>
                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                <p className="mt-5 leading-7 text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-white/10 bg-[#0d0d18] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Selected Work
          </p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Featured project.
          </h2>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#11111e]">
            <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-purple-950 via-[#171329] to-black p-10">
              <div className="text-center">
                <p className="text-sm tracking-[0.4em] text-purple-300">
                  FINE DINING EXPERIENCE
                </p>
                <h3 className="mt-5 text-5xl font-bold tracking-widest sm:text-7xl">
                  KIPSANG
                </h3>
                <p className="mt-4 text-sm tracking-widest text-gray-400">
                  YOUR TABLE. YOUR EXPERIENCE.
                </p>
              </div>
            </div>

            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                  Restaurant Website · 2026
                </p>
                <h3 className="mt-4 text-3xl font-bold">KIPSANG Restaurant</h3>
                <p className="mt-5 leading-7 text-gray-400">
                  A premium fine-dining website demonstration featuring
                  an interactive menu, gallery, reservation interface
                  and WhatsApp integration.
                </p>
                <p className="mt-5 text-xs leading-6 text-gray-500">
                  Fictional restaurant concept created to demonstrate
                  website design and development capabilities.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <a
                  href="https://kipsang-restuarant-demo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-600 px-7 py-4 text-center font-semibold transition hover:bg-purple-500"
                >
                  View Live Website ↗
                </a>
                <a href="#contact" className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold transition hover:border-purple-500">
                  Discuss a Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Let's Work Together
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            Have a project in mind?
            <span className="text-purple-500"> Let's build it.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-gray-400">
            Whether you need a restaurant website, a business
            website or a fresh digital presence, let's bring
            your idea to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#20bd5a]"
            >
              WhatsApp Me ↗
            </a>

            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-8 py-4 font-semibold transition hover:bg-purple-600"
            >
              Email Me ↗
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-gray-400">
            <p>WhatsApp: +254 799 638 790</p>
            <p>Email: adamskipsang6@gmail.com</p>
            <p>Based in Kenya · Available for projects worldwide</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Adams Kipsang. All rights reserved.</p>
          <a href="#home" className="transition hover:text-purple-400">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Adams Kipsang on WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#20bd5a]"
      >
        ◉ WhatsApp
      </a>
    </main>
  );
}
