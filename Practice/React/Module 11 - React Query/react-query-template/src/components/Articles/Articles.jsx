import React from "react";
import { useSearchParams } from "react-router-dom";

const dummyArticles = [
  { id: 1, title: "Laptop Review", views: 250, category: "Electronics" },
  { id: 2, title: "SmartPhone Tips", views: 300, category: "Electronics" },
  { id: 3, title: "Running Shoes", views: 100, category: "Fashion" },
  { id: 4, title: "Washing Machine", views: 150, category: "Electronics" },
];
const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");
  const sortByViews = searchParams.get("sortByViews");
  const category = searchParams.get("category");

  let filteredArticle = dummyArticles;
console.log(filteredArticle);

 if (category) {
    filteredArticle = filteredArticle.filter(
      (item) => item.category === category
    );
  }


  if (sortByViews === "true") {
    filteredArticle = [...filteredArticle].sort(
      (a, b) => a.views - b.views
    );
  }

  const handleClick = () => {
    setSearchParams({
      sortByViews: "true",
      category: "Electronics",
    });
  };
  return (
    <div>
      <h2>
        Articles
        <p>{`SortBy:${sortBy ?? sortByViews} Category:${category}`}</p>
        <button onClick={handleClick}>Sort By Views</button>
        <ul>
            {filteredArticle.map((item) =>(
                <li key={item.id}>{item.title} - {item.views}({item.category})</li>
            ))}
        </ul>
      </h2>
    </div>
  );
};

export default Articles;
