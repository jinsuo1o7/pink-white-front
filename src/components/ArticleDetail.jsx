import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatDate } from "../utils/timeForamt";
import ReplySection from "./ReplySection";

export default function ArticleDetail() {
  const {
    state: { id },
  } = useLocation();

  const [article, setArticle] = useState({});

  const loadData = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_ARTICLE_API_URL + "/" + id
    );
    setArticle(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const {
    title,
    content,
    hashtag,
    nickname,
    email,
    createdAt,
    articleComments,
  } = article;

  return (
    article && (
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 mt-6">{title}</h2>
        <p className="text-gray-500 text-sm mb-4">
          Published on {formatDate(createdAt)}
        </p>
        <p className="text-gray-500 text-sm mb-4">{nickname}</p>
        <p className="text-gray-500 text-sm mb-4">{email}</p>
        <img
          src="https://source.unsplash.com/random/500x500"
          alt=""
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-lg mb-4">{content}</p>
        <p className="text-gray-500 text-sm mb-4">{hashtag}</p>
        <ReplySection articleComments={articleComments} />
      </div>
    )
  );
}
