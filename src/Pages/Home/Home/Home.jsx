import HomeSlider from "../../../component/HomeSlider/HomeSlider";
import Services from "../Services/Services";
import Testimonials from "./Testimonials/Testimonials";

export const Home = () => {
  return (
    <>
      <header className="">
        <HomeSlider></HomeSlider>
      </header>
      <main>
        {/* services section */}
        <section className="pt-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Services</h2>
          <Services></Services>
        </section>
        {/* tastimonials section */}
        <section className="pt-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Testimonials</h2>
          <Testimonials></Testimonials>
        </section>
      </main>
    </>
  );
};
export default Home;
