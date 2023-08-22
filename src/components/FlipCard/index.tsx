import classNames from "classnames";
import styles from "./styles.module.css";

export default function FlipCard({ className }: { className: string }) {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img
            src="/img/dg.jpg"
            alt="Doruk Gezici"
            width={512}
            height={512}
            className="rounded-xl"
          />
        </div>
        <div className={styles.cardBack}>
          <iframe
            width="100%"
            height="512"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dorukgezici&color=%232a0c12&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
