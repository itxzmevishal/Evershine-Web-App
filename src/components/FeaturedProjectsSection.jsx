import { motion } from "framer-motion";

function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Evershine Solara",
      status: "New Launch",
      location: "Nashik",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Evershine Waterfront",
      status: "Featured Project",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >

          <div>
            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Signature Residences
            </h2>
          </div>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-fit">
            View All Projects
          </button>

        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                group
                cursor-pointer
                h-[450px]
                md:h-[550px]
              "
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/50
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-8
                  md:p-10
                  text-white
                  w-full
                "
              >

                <span
                  className="
                    inline-block
                    bg-yellow-500
                    text-black
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    mb-5
                  "
                >
                  {project.status}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-300">
                  {project.location}
                </p>

                <div
                  className="
                    mt-6
                    overflow-hidden
                  "
                >

                  <button
                    className="
                      translate-y-8
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      bg-white
                      text-black
                      px-6
                      py-3
                      rounded-full
                      font-semibold
                    "
                  >
                    View Details
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjectsSection;