import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      name: "Evershine Solara",
      status: "New Launch",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Evershine Waterfront",
      status: "Premium Living",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Upcoming Development",
      status: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            Our Projects
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Crafted For
            <br />
            Exceptional Living
          </h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl">
            Discover premium residential developments designed around luxury,
            comfort and timeless architecture.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />
                </div>

                <div className="p-8">
                  <p className="uppercase text-yellow-600 text-sm font-semibold tracking-wider">
                    {project.status}
                  </p>

                  <h3 className="text-3xl font-bold text-gray-900 mt-3">
                    {project.name}
                  </h3>

                  <Link
                    to="/projects/evershine-solara"
                    className="
    bg-white
    text-black
    px-6
    py-3
    rounded-full
    font-semibold
  "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F6F2] py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Looking For Your Dream Home?
          </h2>

          <p className="text-gray-600 mt-6">
            Connect with our team to explore available residences.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
            Contact Sales Team
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Projects;
