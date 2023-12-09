import gal1 from "../../assets/images/gallary1.jpg";
import gal2 from "../../assets/images/gallary3.jpg";
import gal3 from "../../assets/images/gallary5.jpg";
import gal4 from "../../assets/images/gallary4.jpg";
import gal5 from "../../assets/images/gallary6.jpg";
import gal6 from "../../assets/images/gallary7.jpg";
import gal7 from "../../assets/images/gallary8.jpg";
import gal8 from "../../assets/images/gallary9.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-emerald-500  rounded-lg shadow-lg font-bold font-slobo text-5xl py-6 text-center bg-emerald-100">
        Gallery
      </h1>
      <div class="grid gap-4 my-10">
        <div className="grid md:grid-cols-3 gap-5">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="card">
            <figure>
              <img src={gal1} alt="Shoes" className="rounded-lg" />
            </figure>
          </div>

          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="card">
            <figure>
              <img src={gal2} alt="Shoes" className="rounded-lg" />
            </figure>
          </div>

          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="card">
            <figure>
              <img src={gal3} alt="Shoes" className="rounded-lg" />
            </figure>
          </div>

          </div>
          
        </div>
        <div class="grid md:grid-cols-5 gap-4">
        <div data-aos="zoom-in">
            <div>
                <img class="h-[180px] w-full rounded-lg" src={gal4} alt="" />
            </div>
        </div>
        <div data-aos="zoom-in">
            <div>
                <img class="h-[180px] w-full rounded-lg" src={gal5} alt="" />
            </div>
        </div>
        <div data-aos="zoom-in">
            <div>
                <img class="h-[180px] w-full rounded-lg" src={gal6} alt="" />
            </div>
        </div>
        <div data-aos="zoom-in">
            <div>
                <img class="h-[180px] w-full rounded-lg" src={gal7} alt="" />
            </div>
        </div>
        <div data-aos="zoom-in">
            <div>
                <img class="h-[180px] w-full rounded-lg" src={gal8} alt="" />
            </div>
        </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Gallery;
