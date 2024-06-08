import Image from "next/image";
import styles from "./home.module.css"


const Home= () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Anime Rolls Wheel
        </h1>
        <p className={styles.desc}>
          The official Anime Rolls site by mauriex and KanadeT33
        </p>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands img" fill className={styles.brandsImg}/>
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/homeWheel.png" alt="Wheel image" height={600} width={600} className={styles.wheelImg}/>
      </div>
    </div>
  );
};


export default Home;