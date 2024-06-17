import { useState } from "react";
import { Link } from "react-router-dom";

const ReadingMaterial = ({ article }) => {
  const [showFullText, setShowFullText] = useState(false);

  let text = article.text;

  if (!showFullText) {
    text = text.substring(0, 90) + "...";
  }

  return (
    <div className="p-4 bg-lime-200 rounded-xl shadow-md relative">
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{article.category}</div>
        <h3 className='text-xl font-bold'>{article.title}</h3>
      </div>

      <div className="mb-5">{text}</div>

      <button
        onClick={() => setShowFullText((prevState) => !prevState)}
        className="text-blue-700 mb-5 hover:text-blue-900"
      >
        {showFullText ? "Less" : "More"}
      </button>

      <div className="mb-2 flex flex-col lg:flex-row justify-end">
        <Link
          to={`/articles/${article.id}`}
          className="h-[36px] bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ReadingMaterial;