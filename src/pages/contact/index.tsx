// ================ Icons =================== \\
import { Link, useSearchParams } from "react-router-dom";
import FacebookIcon from "../../assets/icons/facebook";

// ================ Components =================== \\
import ContactForm from "../../components/contact";
import Socials from "../../components/socials";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

const ContactPage = () => {
  // === get Query
  const [searchParams] = useSearchParams();
  const contentQuery = searchParams.get("content") || "head office";

  const socialData = [
    {
      href: "https://facebook.com",
      logo: <FacebookIcon width={10} height={22} />,
    },
    {
      href: "https://facebook.com",
      logo: <FacebookIcon width={10} height={22} />,
    },
    {
      href: "https://facebook.com",
      logo: <FacebookIcon width={10} height={22} />,
    },
    {
      href: "https://facebook.com",
      logo: <FacebookIcon width={10} height={22} />,
    },
  ];

  const contactsBase = [
    {
      content: "head office",
      contacts: {
        email: "info@mixori.com",
        phoneNumbers: ["+995 32 2 65 67 05", "+995 32 2 65 67 05"],
        address: "23 Grigol Lortkipanidze Street, Tbilisi",
      },
    },
    {
      content: "railway constructions",
      contacts: {
        email: "rc@mixori.com",
        phoneNumbers: ["+995 32 2 65 67 05", "+995 32 2 65 67 05"],
        address: "23 Grigol Lortkipanidze Street, Tbilisi",
      },
    },
    {
      content: "constructions",
      contacts: {
        email: "const@mixori.com",
        phoneNumbers: ["+995 32 2 65 67 05", "+995 32 2 65 67 05"],
        address: "23 Grigol Lortkipanidze Street, Tbilisi",
      },
    },
    {
      content: "concrete",
      contacts: {
        email: "contrete@mixori.com",
        phoneNumbers: ["+995 32 2 65 67 05", "+995 32 2 65 67 05"],
        address: "23 Grigol Lortkipanidze Street, Tbilisi",
      },
    },
  ];

  const contact = contactsBase.find((x) => x.content === contentQuery);

  UseNavColorMode("border-black");

  return (
    <div className="flex items-stretch h-full overflow-hidden flex-col md:flex-row">
      <div className="bg-gradient-to-b self-stretch from-[#BFCDDA]/30 to-[#F1F5F8] py-12 h-svh md:h-auto px-16 md:flex-[0_0_30%] flex flex-col items-center justify-end md:gap-24 min-h-full">
        <img src="/images/contact.png" alt="contact_logo" className="mb-12" />
        <div className="flex flex-col items-center gap-16">
          <p className="text-sm leading-relaxed first-letter:uppercase">
            We are always happy to discuss new challenges so feel free to get in
            touch with us
          </p>
          <Socials data={socialData} />
        </div>
      </div>
      <div className="flex-[1_1_auto] pt-20 min-h-full">
        <header className="border-b border-solid border-black/10 py-5 w-full hidden md:flex">
          <ul className="w-full text-end justify-end flex gap-8 px-10">
            {contactsBase.map((el) => (
              <Link to={{ search: `?content=${el.content}` }}>
                <li
                  className={`${
                    contentQuery === el.content ? "text-[#2680EB]" : ""
                  } hover:text-[#2680EB] cursor-pointer first-letter:uppercase`}
                >
                  {el.content}
                </li>
              </Link>
            ))}
          </ul>
        </header>
        <main className="h-full flex flex-col gap-12 max-w-2xl m-auto py-12 px-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2680EB] text-6xl first-letter:uppercase">
              get in touch with
            </h2>
            <p className="uppercase font-bold text-sm">{contact?.content}</p>
          </div>
          <div className="flex items-start flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-3">
              <h3 className="text-black/50 first-letter:uppercase">
                phone number
              </h3>
              <ul className="flex flex-col  text-black text-nowrap">
                {contact?.contacts.phoneNumbers.map((number) => (
                  <li>{number}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-black/50 first-letter:uppercase">email</h3>
              <ul className="flex flex-col text-black">
                <li>{contact?.contacts.email}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-black/50 first-letter:uppercase">address</h3>
              <ul className="flex flex-col text-black text-nowrap">
                <li>{contact?.contacts.address}</li>
              </ul>
            </div>
          </div>
          <ContactForm className="max-w-sm" />
        </main>
      </div>
    </div>
  );
};

export default ContactPage;
