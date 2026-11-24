
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", link: "https://github.com/" },
    { name: "Facebook", link: "https://facebook.com/" },
    { name: "LinkedIn", link: "https://linkedin.com/" },
    { name: "Instagram", link: "https://instagram.com/" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 pt-16 text-white lg:px-16">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Footer Main Content */}
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="inline-block">
              <h2 className="text-3xl font-bold tracking-wider">
                My<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Portfolio.</span>
              </h2>
            </a>

            <p className="mt-5 max-w-xs leading-7 text-gray-400">
              Building modern, creative, and responsive
              websites with passion and clean code.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm text-gray-400">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex w-fit items-center gap-2 text-gray-400 transition duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    <span className="text-cyan-400 opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-bold">
              Follow Me
            </h3>

            <ul className="space-y-4">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-3 text-gray-400 transition duration-300 hover:translate-x-2 hover:text-cyan-400"
                  >
                    <span className="text-cyan-400">↗</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-bold">
              Get In Touch
            </h3>

            <p className="mb-5 leading-7 text-gray-400">
              Have a project or an idea? Let's create
              something amazing together.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 px-5 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Contact Me
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyPortfolio.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Built with{" "}
            <span className="text-cyan-400">React JS</span>
            {" "}and{" "}
            <span className="text-purple-400">Tailwind CSS</span>
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-cyan-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
