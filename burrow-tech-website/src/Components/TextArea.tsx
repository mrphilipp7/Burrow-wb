/*
-------usage-----------
const [txtArea, setTxtArea] = useState("");
const handleTxtAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTxtArea(event.target.value);
  };
/>

<TextArea
    value={txtArea}
    changeVal={handleTxtAreaChange}
    placeHolder={"Text Area"}
/>
*/

import { ReactNode } from "react";

interface InputGroupProps extends React.ComponentPropsWithoutRef<"textarea"> {
  children?: ReactNode;
  placeHolder: string;
  value: string;
  changeVal: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  value,
  changeVal,
  placeHolder,
  children,
  ...attributes
}: InputGroupProps) => {
  return (
    <div className="w-60 relative  border-transparent">
      <textarea
        className={` peer w-full outline-none      bg-transparent tracking-wide text-lg text-white resize-none`}
        value={value}
        onChange={changeVal}
        {...attributes}
      />
      <span
        className={`pointer-events: none absolute left-0 top-0  text-lg tracking-wide  peer-focus:-translate-y-7 peer-focus: transition ease-in-out duration-300 pointer-events-none  peer-focus:text-dark-orange ${
          value != "" ? "-translate-y-7  text-dark-orange" : "text-dark/50"
        }`}
      >
        {placeHolder}
      </span>
      {/* //bars for the animation  */}
      <div
        className={`z-0 w-full h-1  bg-dark-orange translate-y-2 absolute `}
      />
      <div
        className={`z-10 w-full h-1 transition duration-[350ms] bg-gray-400 translate-y-2 scale-100 peer-focus:scale-0 absolute ${
          value != "" ? "bg-transparent" : "bg-dark"
        } `}
      />
    </div>
  );
};

export default TextArea;
