import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="mx-auto container-lg lg:container">
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
        <Card
          title="For Tech Enthusiasts"
          text="Dive into our latest tech discussions, reviews, and tutorials."
          link="Read More"
        />
        <Card
          title="For Content Creators"
          text="Share your tech insights, reviews, and tutorials with our community."
          link="Add Post"
        />
      </div>
    </section>
  )
}

export default HomeCards;