
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Thank you! Your message is ready.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-semibold uppercase tracking-[5px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Have a project in mind or want to work together?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-10"
          >
            <h3 className="mb-8 text-2xl font-bold">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>

              {status && (
                <p
                  className="text-center text-sm text-cyan-400"
                  role="status"
                >
                  {status}
                </p>
              )}

            </form>
          </motion.div>

          {/* RIGHT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Let's Work Together
            </h3>

            <p className="mb-10 leading-8 text-gray-400">
              I am always interested in new projects,
              creative ideas, and opportunities to be part
              of your vision.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition hover:border-cyan-400/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">
                    yourname@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition hover:border-purple-400/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-2xl text-purple-400">
                  📍
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Cambodia</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition hover:border-blue-400/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-2xl text-blue-400">
                  💻
                </div>

                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="font-semibold">
                    Available for Projects
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
