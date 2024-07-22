// ================ Components =================== \\
import { PrimaryBanner } from "../../components/banner";
import Partners from "../../components/partners";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

// ================ Layouts =================== \\
import SectionLayout from "../../layouts/section.layout";

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

  UseNavColorMode("border-black");

  return (
    <div className="flex flex-col h-full pt-28 gap-24 py-28">
      <SectionLayout className="flex flex-col gap-8 px-3 md:px-10">
        <PrimaryBanner image="/images/banner-1.png" className="h-48" />
        <div className="flex items-center flex-col gap-6">
          <h3 className="uppercase font-bold text-lg">partners</h3>
          <p className="md:w-[620px] text-start">
            At Mixori, we combine cutting-edge technology with a commitment to
            sustainability, ensuring that our products not only meet but exceed
            industry standards.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout className="w-full">
        <Partners data={partners} />
      </SectionLayout>
    </div>
  );
};

export default PartnersPage;
