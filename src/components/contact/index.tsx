// ================ UI =================== \\
import { PrimaryButton } from "../ui/buttons.ui";
import { PrimaryInput, PrimaryTextarea } from "../ui/inputs.ui";

// ================ Types =================== \\
import { ContactFormType } from "../../types/components.type";

const ContactForm = ({ className = "" }: ContactFormType) => {
  return (
    <div className={`${className} flex flex-col gap-8 w-full`}>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-3 w-full">
          <PrimaryInput
            type="text"
            placeholder="name"
            darkMode={{ status: true, initialColor: "border-black" }}
          />
          <PrimaryInput
            type="text"
            placeholder="phone number"
            darkMode={{ status: true, initialColor: "border-black" }}
          />
        </div>
        <PrimaryInput
          type="text"
          placeholder="email address"
          darkMode={{ status: true, initialColor: "border-black" }}
        />
        <PrimaryTextarea placeholder="your message" className="h-36" />
      </div>
      <PrimaryButton className="w-full">send message</PrimaryButton>
    </div>
  );
};

export default ContactForm;
