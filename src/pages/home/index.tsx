// ================ Components =================== \\
import HeroContainer from "../../components/heros";
import ProductsSlot from "../../components/products/productsSlot";
import { PrimaryButton } from "../../components/ui/buttons.ui";

// ================ Layouts =================== \\
import CollectLayout from "../../layouts/collect.layout";
import SectionLayout from "../../layouts/section.layout";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

const HomePage = () => {
  UseNavColorMode("border-white");

  return (
    <div className="flex flex-col h-full">
      <SectionLayout className="h-full md:h-svh">
        <HeroContainer />
      </SectionLayout>
      <SectionLayout className="h-full">
        <ProductsSlot />
      </SectionLayout>
      <SectionLayout className="h-full">
        <CollectLayout banner={{ image: "/images/bg.png" }}>
          <div className="flex flex-col gap-8 items-start px-10 justify-center ">
            <div className="flex flex-col items-start gap-1 max-w-xl m-auto">
              <p className="font-medium">Have something to discuss?</p>
              <h1 className="text-5xl text-orange-600">
                We are always happy to discuss new challenges so feel free to
              </h1>
            </div>
            <PrimaryButton>Get in touch</PrimaryButton>
          </div>
        </CollectLayout>
        <CollectLayout
          banner={{ image: "/images/service-1.png" }}
          reverse={true}
        >
          <div className="flex flex-col gap-8 max-w-2xl items-start px-10">
            <div className="flex flex-col items-start gap-1 max-w-xl m-auto">
              <p className="font-medium">Have something to discuss?</p>
              <h1 className="text-5xl text-orange-600">
                We are always happy to discuss new challenges so feel free to
              </h1>
            </div>
            <PrimaryButton>Get in touch</PrimaryButton>
          </div>
        </CollectLayout>
        <CollectLayout banner={{ image: "/images/service-2.png" }}>
          <div className="flex flex-col gap-8 max-w-2xl items-start px-10">
            <div className="flex flex-col items-start gap-1 max-w-xl m-auto">
              <p className="font-medium">Have something to discuss?</p>
              <h1 className="text-5xl text-orange-600">
                We are always happy to discuss new challenges so feel free to
              </h1>
            </div>
            <PrimaryButton>Get in touch</PrimaryButton>
          </div>
        </CollectLayout>
      </SectionLayout>
    </div>
  );
};

export default HomePage;
