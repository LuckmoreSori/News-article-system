import React, { useState } from "react";
import Navbar from "./frontend/Navbar";
import NewsBoard from "./frontend/NewsBoard";
import NewsItem from "./frontend/NewsItem";

const App = () => {
  const [category, setCategory] = useState('general'); // Default category

  return (
    <>
      <NewsBoard />
    </>
  );
};

export default App;