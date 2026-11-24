
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A modern shopping website with beautiful product cards, responsive design and smooth interactions.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "#22d3ee",
    demo: "https://new-zando.wasmer.app/",
    github: "#",
  },
  {
    id: 2,
    title: "Food Restaurant",
    category: "Web Design",
    description:
      "A modern restaurant website featuring food menus, attractive layouts and responsive design.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
    tech: ["React", "CSS", "JavaScript"],
    color: "#a855f7",
    demo: "https://shop-gurger.wasmer.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Personal Website",
    description:
      "A professional portfolio website to showcase personal skills, projects and developer experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#ec4899",
    demo: "",
    github: "#",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
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

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-16"
    >

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
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
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >

          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-400">
            MY PROJECTS
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            My Latest
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Creative Works
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Here are some of my recent projects.
            I enjoy creating modern websites with
            beautiful designs and smooth user experiences.
          </p>

        </motion.div>

        {/* PROJECT CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >

          {projects.map((project) => (

            <motion.div
              key={project.id}
              variants={cardAnimation}
              whileHover={{
                y: -12,
                transition: { duration: 0.35 },
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl transition-colors duration-500 hover:border-cyan-400/40"
            >

              {/* IMAGE */}

              <div className="relative h-60 overflow-hidden">

                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-70" />

                <span
                  className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-semibold backdrop-blur-md"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}

                <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-6">

                  <a
                    href={project.demo}
                    className="font-semibold text-cyan-400 transition duration-300 hover:text-white"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    className="font-semibold text-gray-400 transition duration-300 hover:text-purple-400"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

        {/* BOTTOM BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >

          <a
            href="#contact"
            className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-9 py-4 font-semibold text-cyan-400 transition duration-300 hover:-translate-y-2 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            Let's Create Something →
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
