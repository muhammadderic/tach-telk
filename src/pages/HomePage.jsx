import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ReadingMaterials from "../components/ReadingMaterials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <ReadingMaterials isHome={true} />
    </>
  )
}

export default HomePage;