import { Helmet } from "react-helmet-async";
import HomeSlider from "../../../component/HomeSlider/HomeSlider";
import NoteSection from "../noteSection/NoteSection";
import QuestionSection from "../QuestionSection/QuestionSection";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Employee | Home</title>
      </Helmet>
      <header className="">
        <HomeSlider></HomeSlider>
      </header>
      <main>
        {/* services section */}
        <section className="mt-20">
          <h2 className="text-center text-3xl font-semibold text-gray-800">
            Services
          </h2>
          <Services></Services>
        </section>
        {/* tastimonials section */}
        <section className="mt-20">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
            Testimonials
          </h2>
          <Testimonials></Testimonials>
        </section>
        {/* note-section */}
        <section className="mt-20">
          <NoteSection></NoteSection>
        </section>
        {/* questions section */}
        <section className="mt-20">
          <QuestionSection></QuestionSection>
        </section>
      </main>
    </>
  );
};
export default Home;
