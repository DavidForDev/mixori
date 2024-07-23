// ================ Components =================== \\
import News from "../../components/news";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

// ================ Local Database =================== \\
import NewsDB from "../../db/news.json";

const NewsPage = () => {
  UseNavColorMode("black");

  return (
    <div className="flex flex-col h-full pt-28 gap-24 py-28">
      <News data={NewsDB} />
    </div>
  );
};

export default NewsPage;
