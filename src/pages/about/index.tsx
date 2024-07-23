// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

// ================ Local Components =================== \\
import AboutCard from "./_components/aboutCard";

const AboutPage = () => {
  UseNavColorMode("black");

  return (
    <div className="pt-28 md:pt-0 h-fit">
      <AboutCard
        text="Welcome to Mixori, your premier destination for high-quality concrete products. With decades of experience in the industry, we pride ourselves on delivering superior concrete solutions for a wide range of projects, from residential to commercial developments.

At Mixori, we combine cutting-edge technology with a commitment to sustainability, ensuring that our products not only meet but exceed industry standards. Whether you’re looking for ready-mix concrete, precast elements, or custom-designed solutions, our dedicated team is here to meet your needs with efficiency and precision.

Explore our website to learn more about our products, services, and the values that drive us forward. Partner with [Factory Name] for your next construction project and experience the difference in quality and reliability that defines us."
        banner={{
          image: "/images/about-1.png",
          className: "max-w-sm h-[384px]  m-auto bg-[#F5F5F5]",
        }}
        label={{ labelText: "what we do", labelColor: "#2680EB" }}
      />
      <AboutCard
        text="Welcome to Mixori, your premier destination for high-quality concrete products. With decades of experience in the industry, we pride ourselves on delivering superior concrete solutions for a wide range of projects, from residential to commercial developments.

At Mixori, we combine cutting-edge technology with a commitment to sustainability, ensuring that our products not only meet but exceed industry standards. Whether you’re looking for ready-mix concrete, precast elements, or custom-designed solutions, our dedicated team is here to meet your needs with efficiency and precision.

Explore our website to learn more about our products, services, and the values that drive us forward. Partner with [Factory Name] for your next construction project and experience the difference in quality and reliability that defines us."
        banner={{ image: "/images/about-2.png" }}
        label={{ labelText: "we believe that", labelColor: "#ED9422" }}
        reverse={true}
      />
      <AboutCard
        text="Welcome to Mixori, your premier destination for high-quality concrete products. With decades of experience in the industry, we pride ourselves on delivering superior concrete solutions for a wide range of projects, from residential to commercial developments.

At Mixori, we combine cutting-edge technology with a commitment to sustainability, ensuring that our products not only meet but exceed industry standards. Whether you’re looking for ready-mix concrete, precast elements, or custom-designed solutions, our dedicated team is here to meet your needs with efficiency and precision.

Explore our website to learn more about our products, services, and the values that drive us forward. Partner with [Factory Name] for your next construction project and experience the difference in quality and reliability that defines us."
        banner={{
          image: "/images/about-3.png",
          className: "max-w-sm h-[384px]  m-auto bg-[#F5F5F5]",
        }}
      />
    </div>
  );
};

export default AboutPage;
