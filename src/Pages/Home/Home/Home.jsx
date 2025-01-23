import HomeSlider from "../../../component/HomeSlider/HomeSlider";
import NoteSection from "../noteSection/NoteSection";
import QuestionSection from "../QuestionSection/QuestionSection";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

export const Home = () => {
  return (
    <>
      <header className="">
        <HomeSlider></HomeSlider>
      </header>
      <main>
        {/* services section */}
        <section className="mt-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Services</h2>
          <Services></Services>
        </section>
        {/* tastimonials section */}
        <section className="mt-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Testimonials</h2>
          <Testimonials></Testimonials>
        </section>
        {/* note-section */}
        <section className="mt-10">
          <NoteSection></NoteSection>
        </section>
        {/* questions section */}
        <section className="mt-10">
          <QuestionSection></QuestionSection>
        </section>
      </main>
    </>
  );
};
export default Home;
