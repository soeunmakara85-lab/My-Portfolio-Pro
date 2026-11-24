
function Hero() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "Facebook", href: "https://facebook.com/" },
    { name: "Telegram", href: "https://telegram.org/" },
  ];

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24 text-white lg:px-16"
    >
      {/* Background Glow */}
      <div className="glow glow-one absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="glow glow-two absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#164e63_1px,transparent_1px)]  opacity-10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <span className="text-xl text-cyan-400">
              {"</>"}
            </span>

            <span className="text-sm text-gray-300">
              Full Stack Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hello, I'm
            <br />

            <span className="text-blue-600 ">
              Soeurn Makara
            </span>

            <span className="wave-hand ml-3 inline-block text-4xl">
              
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, responsive, and user-friendly web
            applications using both front-end and back-end
            technologies. I'm passionate about turning creative
            ideas into real-world digital experiences with{" "}
            <span className="font-semibold text-cyan-400">
               front-end
            </span>
            {" "}and{" "}
            <span className="font-semibold text-cyan-400">
             back-end
            </span>
            
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="button-primary group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950"
            >
              View My Projects

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

            <a
              href="#about"
              className="button-secondary rounded-full border border-white/30 px-7 py-3 font-semibold text-white"
            >
              About Me
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-social mt-10 flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="social-link rounded-full border border-white/10 px-4 py-3 text-sm text-gray-400"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>

        {/* Right Content */}
        <div className="hero-visual relative mx-auto flex  w-full max-w-md items-center justify-center ">

          {/* Outer Circle */}
          <div className="hero-circle absolute h-72 w-72 rounded-full border border-cyan-400/30 sm:h-96 sm:w-96" />

          {/* Inner Glow */}
          <div className="hero-glow absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl sm:h-80 sm:w-80" />

          {/* Profile Image */}
          <div className="hero-image relative z-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 from-slate-800 to-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.15)] sm:h-96 sm:w-96">

            <img
              src="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Floating Card 1 */}
          <div className="floating-card floating-one absolute right-0 top-10 z-20 rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-5 py-4 shadow-lg backdrop-blur-md">
            <p className="text-sm font-semibold text-cyan-400">
               Hello Everyone
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card floating-two absolute bottom-16 left-0 z-20 rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-5 py-4 shadow-lg backdrop-blur-md">
            <p className="text-sm font-semibold text-cyan-400">
                {"</>"} Full Stack Developer
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
