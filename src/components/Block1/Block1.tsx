// import "./styles/style.scss";
import logo from "../../assets/logo/logo.svg";
import thumbImage from "../../assets/images/introduction-thumb-image.jpg";
import styles from "./Block1.module.scss";

const Block1 = () => {
  return (
    <div>
      <section className={styles.introduction}>
        <div className={styles.back}>
          <p>
            Partnership<span className="sp-none"></span>
            <br className="sp-disblock" />
            Platform
          </p>
        </div>
        <div className="container">
          <div className="thumb">
            <div className="image">
              <img src={thumbImage} alt="" />
            </div>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="text">
            <div className="block">
              <div className="left">
                <h3>
                  <div className="catch">introduction of mediplus</div>
                </h3>
              </div>
              <div className="right"></div>
            </div>
            <div className="sentence"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Block1;
