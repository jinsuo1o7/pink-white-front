import React from "react";
import { useNavigate } from "react-router-dom";
import { getTimeDiff } from "../utils/timeForamt";

export default function ArticleCard({
  article: { id, title, nickname, content, hashtag, createdAt },
}) {
  const navigate = useNavigate();
  return (
    <div>
      <li
        key={id}
        onClick={() => {
          navigate(`/articles/${id}`, { state: { id } });
        }}
        className="border-b py-4 px-8 flex flex-row justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <div className="flex flex-col w-full">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-400 text-sm">By {nickname}</p>
          <p className="text-gray-400 text-sm">{content}</p>
          <div className="flex justify-between text-gray-400 text-sm">
            <p>{hashtag}</p>
            <p>{getTimeDiff(createdAt)}</p>
          </div>
        </div>
        {/* <img src={board.image} alt="" className="w-12 h-12" /> */}
      </li>
    </div>
  );
}
