import logo from "/src/assets/images/logo.svg";
import mobileImage from "/src/assets/images/hero-mobile.jpg";
import arrowIcon from "/src/assets/images/icon-arrow.svg";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <nav className={styles.logo}>
        <img src={logo} alt="logo" />
      </nav>
      <section>
        <picture className="">
          <img src={mobileImage} alt="picture of a women" />
        </picture>
        <div className={styles["page-content"]}>
          <h1 className={styles["page-title"]}>
            <span>we&apos;re</span> coming soon
          </h1>

          <p className={styles["page-description"]}>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals
          </p>

          <form>
            <label htmlFor="email-input"></label>
            <input
              placeholder="Email Address"
              type="email"
              id="email-input"
              className={styles["form-input"]}
            />
            <button aria-label="Submit" className={styles["submit-btn"]}>
              <img alt="" src={arrowIcon} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
