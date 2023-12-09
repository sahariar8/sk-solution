import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
    return (
        <div className=" my-12">
        <div
          className="hero bg-fixed bg-contain bg-center"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content flex flex-col">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl md:text-6xl font-bold py-10">
                Our Services
              </h1>
            </div>
            <div className="grid md:grid-cols-4 gap-6 pb-20">
              <div data-aos="zoom-in-down">
                <div className="card  bg-emerald-100 shadow-xl">
                  <div className="card-body text-slate-600">
                    <h2 className="card-title font-bold text-emerald-500">Device Repair Services:</h2>
                    <p className="font-semibold text-sm">
                    Offer services like screen replacement, battery replacement, software troubleshooting, and water damage repair for various brands and models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card  bg-pink-100 shadow-xl" data-aos="zoom-in">
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold text-pink-500">Skilled Technicians</h2>
                  <p className="font-semibold text-sm">
                  Employ experienced technicians who are certified in repairing the specific types of devices you offer services for.
                  </p>
                </div>
              </div>
              <div className="card  bg-yellow-100 shadow-xl" data-aos="zoom-in">
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold text-yellow-600">Online Presence</h2>
                  <p className="font-semibold text-sm">
                  Create a professional website and maintain a strong online presence to attract customers and provide information about your services.
                  </p>
                  
                </div>
              </div>
              <div
                className="card  bg-sky-100 shadow-xl"
                data-aos="zoom-in-down"
              >
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold text-sky-400">Customer Service</h2>
                  <p className="font-semibold text-sm">
                  Offer exceptional customer service with clear communication and updates on the repair progress.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;