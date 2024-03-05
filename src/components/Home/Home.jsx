import logo from "/src/assets/images/logo.svg";
import mobileImage from "/src/assets/images/hero-mobile.jpg";
import desktopImage from "/src/assets/images/hero-desktop.jpg";
import arrowIcon from "/src/assets/images/icon-arrow.svg";
import errorIcon from "/src/assets/images/icon-error.svg";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <nav className={styles.logo}>
        <img src={logo} alt="logo" />
      </nav>
      <section className={styles.container}>
        <picture className={styles["hero-img"]}>
          <source srcSet={desktopImage} media="(min-width: 600px)" />
          <img src={mobileImage} alt="picture of a women" />
        </picture>
        <div className={styles["page-content"]}>
          <h1 className={styles["page-title"]}>
            we&apos;re<span> coming soon</span>
          </h1>

          <p className={styles["page-description"]}>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals
          </p>

          <form>
            <div className={styles["form-input"]}>
              {/* <label htmlFor="email-input"></label> */}
              <input
                placeholder="Email Address"
                type="email"
                id="email-input"
                // className={styles["form-input"]}
              />
              <span className={styles["error-icon"]}>
                <img src={errorIcon} alt="" aria-hidden="true" />
              </span>
            </div>
            <button aria-label="Submit" className={styles["submit-btn"]}>
              <img alt="submit" src={arrowIcon} />
            </button>
            <span className={styles["error-alert"]}>
              Please provide a valid email
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
