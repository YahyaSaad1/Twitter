import Image from "next/image";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="container px-20 mx-auto grid grid-cols-[2fr_7fr]">
      <Header/>
      <Main/>
    </div>
  );
}
