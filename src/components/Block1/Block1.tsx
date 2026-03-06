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
                <h2>
                  <div className="line">
                    <div className="catch">美容医療専門</div>
                  </div>
                  <div className="line">
                    <div className="catch">オンライン診療</div>
                  </div>
                </h2>
              </div>
              <div className="right">
                <div className="mark_wrapper">
                  <ul>
                    <li>ダイエットGLP-1</li>
                    <li>美容内服液</li>
                    <li>AGA/FAGA治療</li>
                    <li>エクソソーム</li>
                    <li>ゼオスキン</li>
                    <li>医療マツゲ育毛</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sentence">
              <p>
                株式会社Supercellが運営する美容医療オンライン診療プラットフォームです。お客様に「もっと手軽に美しくなる」ための美容医療メニューの診療でき、あらゆる処方品でお客様のお悩みを解決いたします。
              </p>
              <p>
                オンライン診療をご希望されているお客様は、MEDIPLUS提携医師の指導・アドバイスのもと処方が決定いたしましたら、
                <span className="big bold">自宅にお薬をお届け</span>します。
              </p>
              <p>
                メディプラス独自の厳選した美容医療、お薬、処方品をお手軽に利用することができ、
                <span className="big bold">
                  一度利用した美容意識の高いお客様から特にご好評
                </span>
                頂いています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Block1;
