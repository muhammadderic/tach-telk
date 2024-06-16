import { Link } from "react-router-dom";

const Card = ({ title, text, link, to = "/" }) => {
  return (
    <div className={"p-6 flex justify-between gap-2 bg-lime-200 rounded-lg shadow-md"}>
      <div>
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
        <p className="mt-2 mb-4">
          {text}
        </p>
      </div>
      <div className="flex justify-end">
        <Link
          to={to}
          className="px-4 py-2 inline-block flex items-center bg-blue-800 text-white text-center rounded-lg hover:bg-blue-900"
        >
          {link}
        </Link>
      </div>
    </div>
  )
}

export default Card;