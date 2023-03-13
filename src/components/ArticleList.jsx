import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const location = useLocation();
  const { search } = useLocation();
  const curPage = new URLSearchParams(location.search).get("page") || 0;

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState({
    totalPages: 0,
    totalElements: 0,
    number: 0,
    size: 0,
  });

  const loadData = async () => {
    const {
      data: { content, totalPages, totalElements, size, number },
    } = await axios.get(
      process.env.REACT_APP_ARTICLE_API_URL + `${search}&?page=${curPage}`
    );

    setPage({ totalPages, totalElements, size, number });
    setArticles(content);
  };

  useEffect(() => {
    loadData();
  }, [search, curPage]);

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      <Pagination page={page} onLoadData={loadData} />
    </>
  );
};

export default ArticleList;
