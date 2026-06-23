import PageWrapper from "../components/PageWrapper";
import PageTransition from "../components/PageTransition";

function About()
         {
  return (
    <PageTransition>
     <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black text-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            About Stable Evershine
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Building Landmarks
            <br />
            That Inspire Generations
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-3xl">
            Stable Evershine is committed to creating exceptional
            residential experiences through thoughtful design,
            superior quality and a vision for sustainable growth.
          </p>

        </div>

      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Creating Spaces
                That Matter
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Inspired by the harmony of water, light and timeless
                architecture, Stable Evershine develops premium
                residences designed for modern lifestyles.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our focus is not only on building homes, but creating
                communities that offer comfort, elegance and long-term value.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="About"
                className="rounded-3xl w-full h-[500px] object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Vision Mission */}
      <section className="py-20 bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To become one of the most trusted real estate brands,
                known for innovation, quality and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To deliver thoughtfully designed developments that
                enhance lifestyles and create lasting value.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Excellence In Every Detail
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#F8F6F2] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Premium Quality
              </h3>

              <p className="text-gray-600">
                Superior construction standards and attention to detail.
              </p>
            </div>

            <div className="bg-[#F8F6F2] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Trusted Delivery
              </h3>

              <p className="text-gray-600">
                Commitment to transparency and timely execution.
              </p>
            </div>

            <div className="bg-[#F8F6F2] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Modern Design
              </h3>

              <p className="text-gray-600">
                Contemporary architecture inspired by global trends.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-black py-20">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Let's Build The Future Together
          </h2>

          <p className="text-gray-300 mt-6">
            Connect with our team to learn more about our developments.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all">
            Contact Us
          </button>

        </div>

      </section>
    </PageWrapper>
    </PageTransition>
  );
}

export default About;