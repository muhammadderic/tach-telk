import { useState } from "react";
import { Link } from "react-router-dom";

const ReadingMaterial = ({ article }) => {
  const [showFullText, setShowFullText] = useState(false);

  let text = article.text;

  if (!showFullText) {
    text = text.substring(0, 90) + "...";
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md relative">
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{article.category}</div>
        <h3 className='text-xl font-bold'>{article.title}</h3>
      </div>

      <div className="mb-5">{text}</div>

      <button
        onClick={() => setShowFullText((prevState) => !prevState)}
        className="text-indigo-500 mb-5 hover:text-indigo-600"
      >
        {showFullText ? "Less" : "More"}
      </button>

      <div className="mb-2 flex flex-col lg:flex-row justify-end">
        <Link
          className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ReadingMaterial;