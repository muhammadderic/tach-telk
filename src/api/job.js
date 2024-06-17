// Add a new article
export const addArticle = async (newJob) => {
  return await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  })
}

// Get all articles
export const getAllArticles = async (url) => {
  const res = await fetch(url);
  return res.json();
}

// Get an article
export const getArticle = async (id) => {
  const res = await fetch(`/api/articles/${id}`);
  return res.json();
}