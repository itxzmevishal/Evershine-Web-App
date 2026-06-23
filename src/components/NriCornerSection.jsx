import { motion } from "framer-motion";
import { FaGlobeAsia, FaChartLine, FaHome } from "react-icons/fa";

function NriCornerSection() {
  return (
    <section className="relative bg-[#0B0B0B] py-20 md:py-28 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="
            w-full
            h-full
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)]
            bg-[length:40px_40px]
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold mb-4">
              NRI Corner
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Invest In India
              <br />
              From Anywhere
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl">
              Stable Evershine offers seamless investment opportunities
              for NRIs looking to build wealth through premium real estate.
              Dedicated assistance, legal guidance and end-to-end support.
            </p>

            <button
              className="
                mt-10
                bg-yellow-500
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-yellow-400
                transition-all
                duration-300
              "
            >
              Explore NRI Services
            </button>

          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <FaGlobeAsia
                size={40}
                className="text-yellow-500 mb-5"
              />

              <h3 className="text-white text-2xl font-bold mb-3">
                Global Access
              </h3>

              <p className="text-gray-400">
                Invest from anywhere in the world with dedicated support.
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <FaChartLine
                size={40}
                className="text-yellow-500 mb-5"
              />

              <h3 className="text-white text-2xl font-bold mb-3">
                Strong Returns
              </h3>

              <p className="text-gray-400">
                Benefit from India's rapidly growing real estate market.
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <FaHome
                size={40}
                className="text-yellow-500 mb-5"
              />

              <h3 className="text-white text-2xl font-bold mb-3">
                Trusted Homes
              </h3>

              <p className="text-gray-400">
                Premium residences crafted for long-term value and comfort.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default NriCornerSection;