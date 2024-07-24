// ================ Layouts =================== \\
import CollectLayout from "../layouts/collect.layout";

const Footer = () => {
  return (
    <CollectLayout
      banner={{
        image: "/images/footer.png",
        className: "!h-[350px] bg-bottom",
        bgColor: "bg-[#f5f5f5]",
      }}
      reverse={true}
    >
      <div className="flex items-center justify-center w-full h-full flex-col md:flex-row px-4">
        <div className="md:px-12 border-b md:border-r md:border-b-0 border-solid border-black py-3 w-full">
          <ul className="flex flex-col gap-3 items-start">
            <li className="capitalize cursor-pointer">
              23 grigol lortkipanidze street
            </li>
            <li className="capitalize cursor-pointer">tbilisi, georgia</li>
            <li className="capitalize cursor-pointer">+995 32 2 65 67 05</li>
            <li className="capitalize cursor-pointer">info@mixori.com</li>
          </ul>
        </div>
        <div className="md:px-12 py-3 w-full">
          <ul className="flex md:flex-col flex-row gap-3 justify-between">
            <li className="capitalize cursor-pointer">facebook</li>
            <li className="capitalize cursor-pointer">instagram</li>
            <li className="capitalize cursor-pointer">linkedin</li>
            <li className="capitalize cursor-pointer">youtube</li>
          </ul>
        </div>
      </div>
    </CollectLayout>
  );
};

export default Footer;
