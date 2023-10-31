import Content from "./components/Content";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <Content />
    </div>
  );
}
