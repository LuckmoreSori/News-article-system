import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('C:\Users\LAKA\Desktop\News articles system\articles.csv'); 
      const data = await response.text();
      const parsedData = parseCSV(data); // Implement a function to parse the CSV data
      setArticles(parsedData);
    };
    
    fetchArticles();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {articles.map((article, index) => (
        <NewsItem key={index} title={article.title} src={article.urlToImage} url={article.url} />
      ))}
    </div>
  );
};

export default NewsList;