import { useState } from "react";
import logo from "/src/assets/images/logo.svg";
import mobileImage from "/src/assets/images/hero-mobile.jpg";
import desktopImage from "/src/assets/images/hero-desktop.jpg";
import arrowIcon from "/src/assets/images/icon-arrow.svg";
import errorIcon from "/src/assets/images/icon-error.svg";
import styles from "./Home.module.css";

function HomePage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.trim() === "") {
      setErrorMessage("Please provide a valid email.");
      return;
    }

    if (!pattern.test(email)) {
      setErrorMessage("Please provide a valid email");
      return;
    }

    // Your submission logic goes here
    alert("Thank you for filling in your email.");
  };
  return (
    <>
      <nav className={styles.logo}>
        <img src={logo} alt="logo" />
      </nav>
      <div className={styles.hero}>
        <picture className={styles["hero-img"]}>
          <source srcSet={desktopImage} media="(min-width: 1440px)" />
          <img src={mobileImage} alt="picture of a women" />
        </picture>
      </div>
      <div className={styles["page-content"]}>
        <h1 className={styles["page-title"]}>
          we&apos;re<span> coming soon</span>
        </h1>

        <p className={styles["page-description"]}>
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals
        </p>

        <form
          onSubmit={handleSubmit}
          className={errorMessage ? styles["form-alert"] : ""}
        >
          <div className={styles["form-input"]}>
            <input
              placeholder="Email Address"
              type="email"
              id="email-input"
              value={email}
              onChange={handleChange}
              className={errorMessage ? styles["input-error"] : ""}
            />
            <span
              className={styles["error-icon"]}
              style={{ display: errorMessage ? "flex" : "none" }}
            >
              <img src={errorIcon} alt="" aria-hidden="true" />
            </span>
          </div>
          <button
            aria-label="Submit"
            className={styles["submit-btn"]}
            type="submit"
          >
            <img alt="submit" src={arrowIcon} />
          </button>
          <span
            className={styles["error-alert"]}
            style={{ display: errorMessage ? "block" : "none" }}
          >
            {errorMessage}
          </span>
        </form>
      </div>
    </>
  );
}

export default HomePage;
