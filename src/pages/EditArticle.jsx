import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getArticle, updateArticle } from "../api/job";
import Spinner from "../components/Spinner";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams()

  const submitHandler = (e) => {
    e.preventDefault()

    const updatedArticle = {
      title,
      text,
      category,
    }

    updateArticle(id, updatedArticle);

    toast.success("Article updated Successfully");

    navigate(`/articles/${id}`);
  }

  useEffect(() => {
    const fetchArticle = async (id) => {
      try {
        const data = await getArticle(id);
        setTitle(data.title);
        setText(data.text);
        setCategory(data.category);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle(id);
  }, [id]);

  return (
    <section className="mx-auto container-lg lg:container">
      {
        loading
          ? <Spinner loading={loading} />
          : (
            <div className="w-full px-6 py-8 mb-4 shadow-md rounded-md border">
              <form
                className="w-4/6 mx-auto mb-12"
                onSubmit={submitHandler}
              >
                <h2 className='mb-6 text-3xl text-center text-blue-800 font-bold'>Edit Article</h2>

                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    className='w-full py-2 px-3 mb-2 border-2 border-gray-300 rounded'
                    placeholder='Input title here'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='text'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Text
                  </label>
                  <textarea
                    id='text'
                    name='text'
                    className='border-2 border-gray-300 rounded w-full py-2 px-3'
                    rows='4'
                    placeholder='Add your text here, express yourself'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='type'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Category
                  </label>
                  <select
                    id='category'
                    name='category'
                    className='border-2 border-gray-300 rounded w-full py-2 px-3'
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value='general'>General</option>
                    <option value='software'>Software</option>
                    <option value='ai'>Artificial Intelligence</option>
                  </select>
                </div>

                <div>
                  <button
                    className='mt-4 bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Edit Article
                  </button>
                </div>
              </form>
            </div>
          )
      }
    </section>
  )
}

export default EditArticle;