import { ServicesData } from "../constant/constant";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            High-quality freelance services tailored to help your business grow
            and succeed in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:-translate-y-2"
            >
              <div className="text-center">
                {<service.icon />}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
