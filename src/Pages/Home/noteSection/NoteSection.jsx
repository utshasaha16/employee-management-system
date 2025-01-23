import noteImage1 from "../../../assets/note-section/noteImage-1.jpg";
import noteImage2 from "../../../assets/note-section/noteImage-2.jpg";
const NoteSection = () => {
  return (
    <div>
      <section className="lg:flex lg:items-center lg:justify-center ">
        <div>
          <img className="rounded-lg" src={noteImage1} alt="" />
        </div>
        <div className="lg:pl-6 pt-3">
          <h2 className="text-xl font-semibold mb-3">
            Empowering Teams Through Efficient Management
          </h2>
          <p>
            Create a culture of productivity and accountability with our
            cutting-edge employee management platform. Employees can post
            updates about their workflows, ensuring visibility and
            collaboration, while HR executives gain access to advanced tools for
            monitoring performance, managing payroll, and handling contracts.
          </p>
        </div>
      </section>
      {/*  */}
      <section className="lg:flex lg:items-center lg:justify-center">
        <div className="lg:pl-6 pt-3">
          <h2 className="text-xl font-semibold mb-3">
            The Ultimate HR and Workflow Solution
          </h2>
          <p>
            Transform your employee management processes with our all-in-one
            platform tailored for HR professionals and teams. This solution
            enables employees to update their tasks effortlessly, ensuring
            workflow transparency, while HR executives can oversee operations,
            manage salaries, and maintain contracts seamlessly.
          </p>
        </div>
        <div>
          <img className="rounded-lg" src={noteImage2} alt="" />
        </div>
      </section>
    </div>
  );
};

export default NoteSection;
