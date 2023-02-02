import Image from "next/image";
import styles from "./index.module.scss";

function Gallery() {
  return (
    <div>
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg `} alt="photo" width="500" height="300" />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
