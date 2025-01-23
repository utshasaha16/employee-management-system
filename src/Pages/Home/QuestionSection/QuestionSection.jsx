import { Button, Input, Textarea } from "@material-tailwind/react";
import questionImage from "../../../assets/banner/questionImage.jpg"

const QuestionSection = () => {
  return (
    <section className="md:flex gap-2">
      <div className="md:w-2/4 w-full">
        <h1 className="text-5xl font-semibold">Have Questions?</h1>
        <form className="mt-8 max-w-screen-lg ">
          <div className="flex gap-3 mb-2">
          <Input className="rounded-none" size="lg" label="First name" />
          <Input className="rounded-none" size="lg" label="Last name" />
          </div>
          <div className="flex gap-3 mb-2">
          <Input className="rounded-none" size="lg" label="Email" />
          <Input className="rounded-none" size="lg" label="Phone" />
          </div>
          <Textarea className="rounded-none" size="lg" label="your comment" rows={8} />
          <Button className="bg-[#557C56] text-white hover:text-black hover:bg-white">Submit</Button>
        </form>
      </div>
     <div className="md:w-2/4 w-full md:mt-0 mt-3">
     <img className="rounded-lg w-full h-full" src={questionImage} alt="" />
     </div>
    </section>
  );
};

export default QuestionSection;
