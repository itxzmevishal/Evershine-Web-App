import { FiSearch } from "react-icons/fi";

function HeroSearch() {
  const projects = [
    {
      title: "Evershine Solara",
      location: "Nashik",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Evershine Waterfront",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Luxury Residences",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-black py-12 md:py-16">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Search Bar */}
        <div
          className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            rounded-4xl
            p-4
            md:p-6
          "
        >

          <div className="flex items-center gap-4">

            <FiSearch
              className="text-white text-2xl"
            />

            <input
              type="text"
              placeholder="Search by project, location, lifestyle..."
              className="
                w-full
                bg-transparent
                text-white
                text-lg
                md:text-xl
                outline-none
                placeholder:text-gray-400
              "
            />

          </div>

        </div>

        {/* Suggestions */}
        <div className="mt-8">

          <p className="text-gray-400 uppercase tracking-[3px] text-sm mb-6">
            Suggested Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  cursor-pointer
                "
              >

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-52
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                </div>

                <div className="mt-4">

                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {project.location}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSearch;