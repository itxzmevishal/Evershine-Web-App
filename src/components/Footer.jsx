import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden">

      {/* Newsletter */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="uppercase tracking-[4px] text-yellow-500 text-sm mb-4">
              Stay Updated
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Join Our Newsletter
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Get updates about new launches, investment opportunities
              and company announcements.
            </p>

            <div className="max-w-xl mx-auto mt-8 flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  bg-white/5
                  border
                  border-white/10
                  rounded-full
                  px-6
                  py-4
                  outline-none
                "
              />

              <button
                className="
                  bg-yellow-500
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-yellow-400
                  transition-all
                "
              >
                Subscribe
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Stable Evershine
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Creating landmark residences inspired by water,
              light and timeless architecture.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-yellow-500 transition">
                Home
              </li>

              <li className="hover:text-yellow-500 transition">
                About
              </li>

              <li className="hover:text-yellow-500 transition">
                Projects
              </li>

              <li className="hover:text-yellow-500 transition">
                NRI Corner
              </li>

              <li className="hover:text-yellow-500 transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Projects */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Featured Projects
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-yellow-500 transition">
                Evershine Solara
              </li>

              <li className="hover:text-yellow-500 transition">
                Evershine Waterfront
              </li>

              <li className="hover:text-yellow-500 transition">
                Upcoming Projects
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Nashik, Maharashtra</li>

              <li>+91 98765 43210</li>

              <li>info@stableevershine.com</li>

            </ul>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition-all
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition-all
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition-all
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition-all
                "
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            md:px-6
            lg:px-10
            py-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 Stable Evershine. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed by Stable Evershine
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;