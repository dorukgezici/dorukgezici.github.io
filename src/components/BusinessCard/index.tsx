import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function BusinessCard({ className }: { className: string }) {
  return (
    <div className={classNames(styles.card, className, "bg-neutral-900")}>
      <h1 className="font-extrabold text-6xl md:text-8xl text-neutral-200">Doruk Gezici</h1>
      <h2 className="my-5 sm:my-10 text-2xl md:text-4xl text-neutral-300">Backend &amp; DevOps Engineer</h2>

      <p className="text-xl md:text-2xl">
        <a href="/">DGtech</a>,&nbsp;
        <a href="https://udext.com" target="_blank">
          Udext
        </a>
        ,&nbsp;
        <a href="https://gamerarena.com" target="_blank">
          Gamer Arena
        </a>
        ,&nbsp;
        <a href="https://ituscheduler.com" target="_blank">
          ITUscheduler
        </a>
      </p>

      <div
        className={classNames(
          styles.actions,
          "flex flex-wrap justify-center items-center",
          "gap-5 my-5 sm:my-10 text-neutral-200"
        )}
      >
        <a href="mailto:doruk@gezici.me" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contact Me
        </a>
        <a href="https://calendly.com/dorukgezici/30min" target="_blank">
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          Book Meeting
        </a>
      </div>

      <div
        className={classNames(
          styles.social,
          "flex flex-wrap justify-center mt-5 sm:mt-10",
          "gap-4 sm:gap-8 md:gap-12 lg:gap-14",
          "text-3xl sm:text-4xl text-neutral-300"
        )}
      >
        <a href="https://linkedin.com/in/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://dorukgezici.medium.com" target="_blank">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
        <a href="https://github.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://instagram.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/derektraveller" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
    </div>
  );
}
