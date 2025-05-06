import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";
import image from "../assets/image.png";

const NewsBoard = () => {
  const [articles, setArticles] = useState({});
  const [category, setCategory] = useState("all");

  // Fetch articles from backend
  useEffect(() => {
    const fetchNews = async () => {
      const url = "https://newsbackend-4.onrender.com/api/articles";
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Group articles by category
        const grouped = data.reduce((acc, article) => {
          const cat = article.category?.toLowerCase() || "uncategorized";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(article);
          return acc;
        }, {});
        
        setArticles(grouped);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Format category name for display
  const formatCategoryName = (cat) => {
    if (cat === "all") return "All";
    if (cat === "Arts/Culture/Celebrities") return "Arts & Culture";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // Determine which articles to show based on selected category
  const filteredArticles =
    category === "all"
      ? Object.values(articles).flat()
      : articles[category] || [];

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <h2 className="text-center mt-4">
        {formatCategoryName(category)}{" "}
        <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((news, index) => {
            const imgSrc =
              news.picture && !news.picture.endsWith("grey-placeholder.png")
                ? news.picture
                : image;
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={imgSrc}
                url={news.url}
                category={news.category}
                source={news.source}
                picture={imgSrc}
              />
            );
          })
        ) : (
          <p className="text-center text-muted">No articles available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
