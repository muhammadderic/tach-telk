import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="mx-auto mb-12 max-w-screen-lg">
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
        <Card
          title="For Tech Enthusiasts"
          text="Dive into our latest tech discussions, reviews, and tutorials."
          link="Read More"
          to="/articles"
        />
        <Card
          title="For Content Creators"
          text="Share your tech insights, reviews, and tutorials with our community."
          link="Add Article"
          to="/add-article"
        />
      </div>
    </section>
  )
}

export default HomeCards;