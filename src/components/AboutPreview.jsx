import { motion } from "framer-motion";

function AboutPreview() {
  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[32px] group"
          >

            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
              alt="Stable Evershine"
              className="
                w-full
                h-[450px]
                md:h-[600px]
                object-cover
                group-hover:scale-110
                transition-transform
                duration-700
              "
            />

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              About Stable Evershine
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building
              <br />
              Timeless Residences
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Inspired by the elegance of water, the strength of a shell,
              and the optimism of a sunrise, Stable Evershine creates
              residences that blend architecture, luxury and lifestyle.
              Every development is designed to deliver exceptional living
              experiences for generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  25+
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  1000+
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Families
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  15+
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Years
                </p>
              </div>

            </div>

            {/* CTA */}
            <button
              className="
                mt-10
                bg-black
                text-white
                px-8
                py-4
                rounded-full
                hover:bg-yellow-500
                hover:text-black
                transition-all
                duration-300
              "
            >
              Discover More
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;