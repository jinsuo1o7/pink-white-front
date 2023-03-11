import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 rounded-md hover:brightness-125 bg-indigo-600 text-white first-letter:uppercase font-semi-bold"
    >
      {text}
    </button>
  );
}
