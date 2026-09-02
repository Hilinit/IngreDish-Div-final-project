import { PiChefHatFill } from "react-icons/pi";

export const Title = ({ title, dec }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#C2410C] dark:text-orange-400"> {title} </h2>
      <div className="flex items-center justify-center gap-3 my-3">
        <span className="w-10 h-px bg-[#d8cdb8] dark:bg-neutral-700"></span>
        <PiChefHatFill className="text-[#C2410C] dark:text-neutral-500 text-xl" />
        <span className="w-10 h-px bg-[#d8cdb8] dark:bg-neutral-700"></span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 px-4">{dec}</p>
    </div>
  );
};

export default Title;