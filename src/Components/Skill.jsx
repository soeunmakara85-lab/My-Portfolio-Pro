
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    percent: 95,
    color: "#22d3ee",
    icon: "</>",
    description: "Web Structure",
  },
  {
    name: "CSS",
    percent: 90,
    color: "#3b82f6",
    icon: "#",
    description: "Web Styling",
  },
  {
    name: "JavaScript",
    percent: 75,
    color: "#eab308",
    icon: "JS",
    description: "Web Interaction",
  },
  {
    name: "React JS",
    percent: 70,
    color: "#a855f7",
    icon: "⚛",
    description: "Frontend Framework",
  },
  {
    name: "Tailwind CSS",
    percent: 85,
    color: "#06b6d4",
    icon: "TW",
    description: "CSS Framework",
  },
  {
    name: "Responsive Design",
    percent: 90,
    color: "#ec4899",
    icon: "▣",
    description: "Mobile Friendly",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Skill() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-16"
    >

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-400">
            <span>✦</span>
            MY SKILLS
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            My Technical

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            These are the technologies and tools I use
            to create modern, responsive, and beautiful
            websites with great user experiences.
          </p>

        </motion.div>

        {/* SKILLS GRID */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-xl backdrop-blur-md transition-colors duration-500 hover:border-cyan-400/40"
            >

              {/* CARD GLOW */}

              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{
                  backgroundColor: skill.color,
                }}
              />

              {/* ICON + PERCENT */}

              <div className="relative flex items-center justify-between">

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-bold"
                  style={{
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>

                <span
                  className="text-2xl font-bold"
                  style={{
                    color: skill.color,
                  }}
                >
                  {skill.percent}%
                </span>

              </div>

              {/* SKILL INFO */}

              <div className="relative mt-7">

                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {skill.description}
                </p>

              </div>

              {/* PROGRESS BAR */}

              <div className="relative mt-7">

                <div className="mb-3 flex justify-between text-xs text-gray-500">
                  <span>Skill Level</span>
                  <span>{skill.percent}%</span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.percent}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, #8b5cf6)`,
                      boxShadow: `0 0 15px ${skill.color}90`,
                    }}
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

        {/* BOTTOM TEXT */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

          <p className="text-gray-400">
            Always learning. Always improving.
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Growing Every Day
            </span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}

export default Skill;
