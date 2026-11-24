
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percent: 95, color: "#22d3ee" },
  { name: "CSS", percent: 90, color: "#3b82f6" },
  { name: "JavaScript", percent: 65, color: "#a855f7" },
  { name: "React JS", percent: 70, color: "#ec4899" },
  { name: "Tailwind CSS", percent: 85, color: "#14b8a6" },
  { name: "Bootstrap", percent: 85, color: "#14b8a6" },

];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* IMAGE GLOW */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-40 blur-xl" />

          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000"
            alt="Developer workspace"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.025 }}
            className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 -right-5 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              100%
            </h3>

            <p className="text-sm text-gray-400">
              Passion for Coding
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* LABEL */}
          <motion.div variants={fadeUp}>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-400">
              ABOUT ME
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={fadeUp}
            className="mt-8 text-4xl font-bold leading-tight md:text-6xl"
          >
            Creating Modern

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-7 leading-8 text-gray-400"
          >
            Hello! I'm a passionate Front-End Developer
            who enjoys building beautiful, modern, and
            responsive websites. I love exploring new
            technologies and transforming creative ideas
            into amazing digital experiences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 leading-8 text-gray-400"
          >
            I focus on clean code, creative designs,
            smooth animations, and user-friendly interfaces.
          </motion.p>

          {/* SKILLS */}
          <div className="mt-10 space-y-7">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
              >

                {/* NAME AND PERCENT */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-gray-200">
                    {skill.name}
                  </span>

                  <span
                    className="font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.percent}%
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.percent}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, #8b5cf6)`,
                      boxShadow: `0 0 18px ${skill.color}80`,
                    }}
                    className="h-full rounded-full"
                  />

                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.div variants={fadeUp}>
            <motion.a
              href="#contact"
              whileHover={{
                y: -5,
                scale: 1.04,
                boxShadow: "0 10px 35px rgba(6,182,212,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="mt-10 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-9 py-4 font-semibold shadow-lg shadow-blue-500/20"
            >
              Let's Work Together →
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;
