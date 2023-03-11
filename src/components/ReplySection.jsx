import React from "react";
import { formatDate } from "../utils/timeForamt";

export default function ReplySection({ articleComments }) {
  return (
    <div className="mt-8">
      <div className="border-t py-1"></div>
      <h3 className="text-lg font-medium mb-4">Replies</h3>

      <ul className="bg-gray-100 p-4 rounded-md">
        {articleComments &&
          articleComments.map((comment) => {
            const {
              id,
              commentContent,
              commenterNickname,
              createdAt,
              modifiedAt,
            } = comment;
            return (
              <li key={id}>
                <p className="text-gray-500 text-sm mb-2">
                  {commenterNickname}
                  {": "}
                  {createdAt === modifiedAt
                    ? formatDate(createdAt)
                    : formatDate(modifiedAt)}
                </p>
                <p className="text-base mb-4">{commentContent}</p>
                <hr className="my-4" />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
