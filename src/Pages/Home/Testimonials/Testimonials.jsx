import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import testimonialImage from "../../../assets/banner/testimonialImage.jpg";

const Testimonials = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage": `url(${testimonialImage})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            John Doe
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            CEO, TechCorp
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Working with Employee Management has been a transformative
              experience for our company. Their platform has streamlined our HR
              processes, making everything from payroll to employee tracking
              incredibly simple and efficient. The customer support team is
              outstanding and always ready to help. Highly recommended for
              businesses looking to modernize their workforce management!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Michael Lee
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Founder, StartupX
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              I cannot express how much time and effort this platform has saved
              us. As a growing startup, we needed a scalable solution to manage
              our expanding team, and Employee Management delivered exactly what
              we needed. It's not just software; it's a partner in growth.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Jane Smith
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            HR Manager, FinCorp
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              The tools provided by Employee Management have made a huge
              difference in our day-to-day operations. We can now track employee
              performance, manage leaves, and even handle remote work
              arrangements seamlessly. The intuitive design and ease of use make
              it a favorite among our HR team.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
