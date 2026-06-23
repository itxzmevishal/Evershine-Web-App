import PageWrapper from "../../components/PageWrapper";

function EvershineSolara() {
  return (
    <PageWrapper>

      {/* Hero */}
      <section className="relative h-[80vh]">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Evershine Solara"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

            <p className="uppercase tracking-[4px] text-yellow-400 mb-4">
              New Launch
            </p>

            <h1 className="text-white text-6xl md:text-8xl font-bold">
              Evershine Solara
            </h1>

          </div>

        </div>

      </section>

      {/* Overview */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <h2 className="text-5xl font-bold mb-8">
            Project Overview
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            A premium residential development designed around
            luxury, comfort and modern architecture.
          </p>

        </div>

      </section>

    </PageWrapper>
  );
}

export default EvershineSolara;