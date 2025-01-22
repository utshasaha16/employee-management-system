import HomeSlider from "../../../component/HomeSlider/HomeSlider";
import Services from "../Services/Services";

export const Home = () => {
  return (
    <>
      <header className="">
        <HomeSlider></HomeSlider>
      </header>
      <main>
        {/* services section */}
        <section className="py-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Services</h2>
          <Services></Services>
        </section>
      </main>
    </>
  );
};
export default Home;
