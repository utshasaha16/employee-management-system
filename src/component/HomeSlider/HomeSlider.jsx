import { Carousel, Typography } from "@material-tailwind/react";
import bannerImage1 from "../../assets/banner/bannerImage-1.jpg";
import bannerImage2 from "../../assets/banner/bannerImage-2.jpg";
import bannerImage3 from "../../assets/banner/bannerImage-3.jpg";

const HomeSlider = () => {
  return (
    <Carousel loop={true} autoplay={true}>
      <div className="relative h-full w-full">
        <img
          src={bannerImage1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Efficient Workforce Solutions
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Simplify employee management with intuitive tools and streamlined
              processes.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={bannerImage2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Streamline Your Workforce
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              A one-stop solution for all your employee management needs.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={bannerImage3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Smart HR, Smarter Business
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Revolutionize your HR processes with advanced employee management
              features.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeSlider;
