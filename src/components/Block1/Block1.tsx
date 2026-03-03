// import "./styles/style.scss";
import React from "react";
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
              <h1>Hello</h1>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Block1;
