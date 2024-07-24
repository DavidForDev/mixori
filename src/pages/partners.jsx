// ================ Components =================== \\
import { PrimaryBanner } from "../components/banner";
import Partners from "../components/partners";

// ================ UI =================== \\
import { SwitchButton } from "../components/ui/buttons.ui";

// ================ Icons =================== \\
import CaretArrow from "../assets/icons/caretArrow";

// ================ Layouts =================== \\
import SectionLayout from "../layouts/section.layout";

const PartnersPage = () => {
  const partners = [
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
    {
      name: "gwp",
      logo: "/images/logos/gwp-logo.png",
    },
  ];
  return (
    <div className="flex flex-col h-full pt-28 gap-24 py-28">
      <SectionLayout className="flex flex-col gap-8 px-3 md:px-10">
        <PrimaryBanner image="/images/banners/banner-10.png" className="h-48" />
        <div className="flex items-center flex-col gap-6">
          <h3 className="uppercase font-bold text-lg">partners</h3>
          <p className="md:w-[620px] text-start">
            At Mixori, we combine cutting-edge technology with a commitment to
            sustainability, ensuring that our products not only meet but exceed
            industry standards.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout className="w-full flex flex-col items-center gap-10">
        <Partners data={partners} />
        <SwitchButton
          className="flex items-end gap-2 group h-full px-7"
          darkMode={{ status: true, initialColor: "" }}
        >
          <p>Next Page</p>
          <CaretArrow
            width={13}
            height={13}
            className="-rotate-90 group-hover:fill-white transition-all duration-300"
          />
        </SwitchButton>
      </SectionLayout>
    </div>
  );
};

export default PartnersPage;
