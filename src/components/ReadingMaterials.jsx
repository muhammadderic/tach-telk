import { useEffect, useState } from "react";

import { getAllArticles } from "../api/job";
import Spinner from "./Spinner";
import ReadingMaterial from "./ReadingMaterial";

const ReadingMaterials = ({ isHome = false }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = isHome ? "/api/articles?_limit=3" : "/api/articles";
      try {
        const data = await getAllArticles(url);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [isHome]);

  return (
    <section className="mx-auto max-w-screen-lg">
      <div className="w-auto">
        <h2 className="my-4 text-3xl font-bold text-blue-700 text-center">
          {isHome ? "Recent Articles" : "Articles"}
        </h2>
      </div>
      {
        loading
          ? <Spinner loading={loading} />
          : (
            <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>
  )
}

export default ReadingMaterials;