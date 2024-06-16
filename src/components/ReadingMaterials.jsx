import { useEffect, useState } from "react";

import { getAllArticles } from "../api/job";
import Spinner from "./Spinner";
import ReadingMaterial from "./ReadingMaterial";

const ReadingMaterials = ({ isHome = false }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArticles();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <>
      <section className="mx-auto container-lg lg:container">
        <h2 className="text-3xl font-bold text-blue-500 text-center">
          {isHome ? "Recent Articles" : "Articles"}
        </h2>
      </section>
      {
        loading
          ? <Spinner loading={loading} />
          : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                articles.map(article => (
                  <ReadingMaterial
                    key={article.id}
                    article={article}
                  />
                ))
              }
            </div>
          )
      }
    </>
  )
}

export default ReadingMaterials;