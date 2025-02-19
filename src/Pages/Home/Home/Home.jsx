import { Helmet } from "react-helmet-async";
import HomeSlider from "../../../component/HomeSlider/HomeSlider";
import NoteSection from "../noteSection/NoteSection";
import QuestionSection from "../QuestionSection/QuestionSection";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import FindTalent from "../FindTalent/FindTalent";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Employee | Home</title>
      </Helmet>
      <header className="pt-16">
        <HomeSlider></HomeSlider>
      </header>
      <main>
        {/* find talent section */}
        <section className="mt-20">
          <FindTalent></FindTalent>
        </section>
        {/* note-section */}
        <section className="mt-20">
          <NoteSection></NoteSection>
        </section>
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
        {/* questions section */}
        <section className="mt-20">
          <QuestionSection></QuestionSection>
        </section>
      </main>
    </>
  );
};
export default Home;
