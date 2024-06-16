// Add a new article
export const addArticle = async (newJob) => {
  fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  })
  return;
}