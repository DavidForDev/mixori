import Slider from "react-slick";

// ================ Components =================== \\
import HeroContainer from "../../components/heros";
import ProductsSlot from "../../components/products/productsSlot";
import { PrimaryButton } from "../../components/ui/buttons.ui";

// ================ Layouts =================== \\
import CollectLayout from "../../layouts/collect.layout";
import SectionLayout from "../../layouts/section.layout";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";
import OpacityDivs from "../../components/gradient";
import ProSlider from "../../components/projects/proSlider";

const HomePage = () => {
  UseNavColorMode("white");

  return (
    <div className="flex flex-col h-full">
      <SectionLayout className="h-full md:h-svh">
        <HeroContainer />
      </SectionLayout>
      <SectionLayout>
        <ProductsSlot />
      </SectionLayout>
      <SectionLayout>
        <CollectLayout
          banner={{ image: "/images/collect/collect-1.png" }}
          colorLine="#ED9422"
        >
          <div className="px-10 flex items-center justify-center h-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-1 m-auto">
                <p className="font-medium">Have something to discuss?</p>
                <h1 className="text-5xl text-[#ED9422]">
                  We are always happy to discuss new challenges so feel free to
                </h1>
              </div>
              <PrimaryButton>Get in touch</PrimaryButton>
            </div>
          </div>
        </CollectLayout>
        <CollectLayout
          banner={{ image: "/images/service-1.png", className: "md:!h-full" }}
          reverse={true}
        >
          <div className="flex flex-col max-w-md m-auto px-10 w-full items-start justify-center h-full gap-12">
            <ProSlider label="current projects" />
          </div>
        </CollectLayout>
        <CollectLayout
          banner={{ image: "/images/service-2.png", className: "md:!h-full" }}
        >
          <div className="flex flex-col max-w-md m-auto px-10 w-full items-start justify-center h-full gap-12">
            <ProSlider label="current projects" />
          </div>
        </CollectLayout>
      </SectionLayout>
    </div>
  );
};

export default HomePage;
