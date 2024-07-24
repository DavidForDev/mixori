// ================ Components =================== \\
import News from "../components/news";

const NewsDetailPage = () => {
  return (
    <div className="flex flex-col h-full pt-28 gap-12 py-28 w-full">
      <div className="max-w-[700px] m-auto w-full flex flex-col gap-12 px-6">
        <div className="flex flex-col gap-10">
          <img
            src="/images/service-1.png"
            alt="news_banner"
            className="max-h-[400px] h-full w-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-[#2680EB] text-3xl first-letter:uppercase">
              news name
            </h3>
            <p className="text-black/50 font-medium">2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing ielitr, sed diam
            nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem amet.Loem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </p>
          <img src="/images/service-2.png" alt="news_img" />
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="uppercase font-bold text-2xl">
            Sustainable Concrete Design
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem amet.Loem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
        <div className="border-t border-solid border-black/50 w-full">
          <div className="flex items-center gap-2 py-5 justify-end w-full">
            <h3 className="first-letter:uppercase text-black/50 text-sm">
              share to:{" "}
            </h3>
            <ul className="flex gap-3 text-sm">
              <li className="cursor-pointer">facebook,</li>
              <li className="cursor-pointer">linkedin,</li>
              <li className="cursor-pointer">twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-10">
        <h3 className="font-bold uppercase text-black text-xl">other news</h3>
        <News />
      </div>
    </div>
  );
};

export default NewsDetailPage;
