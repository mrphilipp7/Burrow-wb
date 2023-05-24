import { useState } from "react";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
const ContactPage = () => {
  const [name, setName] = useState("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [value, setValue] = useState("");
  const handleValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const [txtArea, setTxtArea] = useState("");
  const handleTxtAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTxtArea(event.target.value);
  };
  return (
    <div className="h-screen  ">
      <div className=" rounded-lg fixed text-center left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-16 ">
        <article className=" w-80 lg:w-96 flex justify-center items-center flex-col pb-6 space-y-8">
          <p className="text-3xl md:text-4xl pt-2">Contact our team</p>
          <Input
            value={name}
            changeVal={handleNameChange}
            placeHolder={"Name"}
            children={<UserIcon />}
          />
          <Input
            value={value}
            changeVal={handleValChange}
            placeHolder={"email"}
            children={<EnvelopeIcon />}
          />
          <Input
            value={phone}
            changeVal={handlePhoneChange}
            placeHolder={"phone"}
            children={<PhoneIcon />}
          />
          <div className="pt-4">
            <TextArea
              value={txtArea}
              changeVal={handleTxtAreaChange}
              placeHolder={"Message..."}
            />
          </div>
          <button className="text-xl p-2 px-6 rounded-lg bg-dark-orange shadow-sm shadow-dark hover:bg-dark-orange/80 active:bg-dark-orange active:shadow-dark/80">
            SEND
          </button>
        </article>
      </div>
    </div>
  );
};

export default ContactPage;
