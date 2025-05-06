useEffect(() => {
    const fetchNews = async () => {
      const url = "https://newsbackend-3.onrender.com/api/articles";
      try {
        const response = await fetch(url);
        const data = await response.json();
  
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
  