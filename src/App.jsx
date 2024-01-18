import Nav from "./components/Nav";
import {
  ExclusiveVideos,
  FeaturedMovie,
  FeaturedCasts,
  Footer,
  Header,
  NewArrival,
} from "./sections";

export default function App() {
  return (
    <>
      {/* <Nav /> */}
      <section> <Header /> </section>
      <section> <FeaturedMovie /> </section>
      <section> <NewArrival /> </section>
      <section> <ExclusiveVideos /> </section>
      <section> <FeaturedCasts /> </section>
      <section> <Footer /> </section>
    </>
  );
}
