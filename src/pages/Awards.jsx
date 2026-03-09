import AwardsHero from "../components/AwardsHero";
import PageHero from "../components/PageHero";

export default function Awards() {

  const awards = [
    {
      title: "Government of Odisha Recognition",
      image: "/assets/awards/award1.jpg",
    },
    {
      title: "Government of India Recognition",
      image: "/assets/awards/award2.jpg",
    },
    {
      title: "Startup Odisha Certificate",
      image: "/assets/awards/award3.jpg",
    },
    {
      title: "Certificate from Gopalpur NAC",
      image: "/assets/awards/award4.jpg",
    },
    {
      title: "Certificate from Ganjam NAC",
      image: "/assets/awards/award5.jpg",
    },
  ];

  return (
    <>
    <AwardsHero />

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">

        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Government Recognition
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300"
            >

              <img
                src={award.image}
                alt={award.title}
                className="w-full h-64 object-contain bg-white p-4"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-400">
                  {award.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}