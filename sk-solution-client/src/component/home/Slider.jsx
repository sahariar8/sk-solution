
import pic1 from '../../assets/images/slider/slider1.jpg'
import pic2 from '../../assets/images/slider/slider6.jpg'
import pic3 from '../../assets/images/slider/slider5.jpg'


const Slider = () => {
    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[200px] md:h-[500px]">
          <img
            src={pic1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[200px] md:h-[500px]">
          <img
            src={pic2}
            className="w-full"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[200px] md:h-[500px]">
          <img
            src={pic3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
   
    );
};

export default Slider;