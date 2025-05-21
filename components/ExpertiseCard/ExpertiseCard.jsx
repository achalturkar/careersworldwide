import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ExpertiseCard = ({ Expertise }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-12">
      {Expertise.map((each, index) => (
        <div key={index} className="p-4 rounded-lg shadow-sm bg-orange-50 hover:bg-white hover:shadow-lg"  data-aos="fade-up">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-blue-950">{each.head}</h1>
          </div>

          <ul className="space-y-1 mt-2">
            {each.skill.map((skill, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <MdKeyboardDoubleArrowRight className="mt-1 text-blue-900 size-6" />
                <p className="ml-2 text-lg font-semibold ">{skill.set}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseCard;
