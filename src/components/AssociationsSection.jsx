import { motion } from "framer-motion";

function AssociationsSection() {
  const partners = [
    "HDFC",
    "ICICI",
    "Axis Bank",
    "JLL",
    "Knight Frank",
    "CBRE",
    "L&T",
    "Tata Projects",
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold mb-4"
        >
          Strategic Associations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
        >
          Trusted By Industry Leaders
        </motion.h2>

      </div>

      {/* Marquee */}
      <div className="relative">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >

          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="
                bg-white
                min-w-[220px]
                h-[120px]
                rounded-3xl
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              <span className="text-2xl font-bold text-gray-800">
                {partner}
              </span>
            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default AssociationsSection;