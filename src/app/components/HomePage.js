import Image from "next/image";
import { avatar } from "../assets/Images";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-between">
      <div className="flex flex-col justify-center items-start w-1/2 gap-4">
        <h1 className="text-6xl font-bold">Front-End React Developer</h1>
        <p>
          Hi, I'm Luis Ramirez. A passionate Front-end React Developer based in
          Buenos Aires, Argentina. 📍
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={avatar}
          className="w-80 h-80 object-cover rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default HomePage;
