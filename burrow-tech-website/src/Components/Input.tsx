import { ReactNode } from "react";

/*
  const [value, setValue] = useState("");
  const handleValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
*/

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  children?: ReactNode;
  placeHolder: string;
  value: string;
  changeVal: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  children,
  value,
  placeHolder,
  changeVal,
  ...attributes
}: InputGroupProps) => {
  return (
    <div className="w-60 relative  border-dark-orange ">
      <input
        className={` peer w-full outline-none  pt-4  px-8 pl-6  bg-transparent tracking-wide text-lg text-white `}
        value={value}
        onChange={changeVal}
        {...attributes}
      />
      {/* //placeHolder for text */}
      <span
        className={`pointer-events: none absolute left-6 bottom-0  text-lg tracking-wide  peer-focus:-translate-y-7 peer-focus:-translate-x-6 transition ease-in-out duration-300 pointer-events-none ${
          value != ""
            ? "-translate-y-7 -translate-x-6 text-dark-orange"
            : "text-dark/50"
        } peer-focus:text-dark-orange`}
      >
        {placeHolder}
      </span>
      {/* //bars for the animation  */}
      <div
        className={`z-0 w-full h-1  bg-dark-orange translate-y-2 absolute `}
      />
      <div
        className={`z-10 w-full h-1 transition duration-[350ms]  translate-y-2 scale-100 peer-focus:scale-0 absolute ${
          value != "" ? "bg-transparent" : "bg-dark"
        } `}
      />
      {/* //needs to take heroicons // */}
      <div
        className={`absolute top-5 pointer-events-none w-5 h-5  peer-focus:text-white transition ease-in-out duration-300 ${
          value != "" ? "text-white" : "text-dark"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Input;
