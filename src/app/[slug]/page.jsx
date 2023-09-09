import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}></div>
        <div className={styles.imageContainer}>
          <Image src="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
