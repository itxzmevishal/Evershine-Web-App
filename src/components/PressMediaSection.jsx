import { motion } from "framer-motion";

function PressMediaSection() {
  const articles = [
    {
      title: "Stable Evershine Announces Luxury Waterfront Development",
      category: "Company News",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Future Of Premium Living In India",
      category: "Insights",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Architecture Trends Shaping Modern Residences",
      category: "Media",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              Press & Media
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Latest Stories
            </h2>
          </div>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            View All News
          </button>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group cursor-pointer"
          >
            <div className="overflow-hidden rounded-[30px]">

              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="
                  w-full
                  h-[450px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

            </div>

            <div className="mt-6">

              <span className="text-yellow-600 uppercase text-sm font-semibold tracking-wider">
                {articles[0].category}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                {articles[0].title}
              </h3>

            </div>

          </motion.div>

          {/* Side Articles */}
          <div className="space-y-8">

            {articles.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                className="group cursor-pointer"
              >

                <div className="overflow-hidden rounded-3xl">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      w-full
                      h-[180px]
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

                </div>

                <div className="mt-4">

                  <span className="text-yellow-600 uppercase text-xs font-semibold tracking-wider">
                    {article.category}
                  </span>

                  <h4 className="text-xl font-bold text-gray-900 mt-2">
                    {article.title}
                  </h4>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default PressMediaSection;