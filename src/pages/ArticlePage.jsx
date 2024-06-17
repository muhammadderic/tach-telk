import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getArticle } from "../api/job";
import Spinner from "../components/Spinner";
import { FaArrowLeft } from "react-icons/fa";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticle(id);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id])

  return (
    <>
      {
        loading
          ? <Spinner loading={loading} />
          : (
            <section className="mx-auto container-lg lg:container">
              <div className='m-auto py-6 px-6'>
                <Link
                  to='/articles'
                  className='text-blue-700 hover:text-blue-900 flex items-center'
                >
                  <FaArrowLeft className='mr-2' /> Back to Articles Page
                </Link>
              </div>
              <main className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-70/30 gap-6">
                <div className='bg-white px-6 text-center md:text-left'>
                  <div className='text-gray-500 uppercase'>{article.category}</div>
                  <h1 className='text-3xl font-bold'>{article.title}</h1>
                </div>

                <div className='bg-white px-6 mt-2'>
                  <p>{article.text}</p>
                </div>
              </main>

              <div className='max-w-screen-md mx-auto mt-12 p-6 flex gap-4 bg-white rounded-lg shadow-md'>
                <Link
                  to={`/edit-article/${article.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit
                </Link>
                <button
                  // onClick={() => onDeleteClick(job.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete
                </button>
              </div>
            </section>
          )
      }
    </>
  )
}

export default ArticlePage;