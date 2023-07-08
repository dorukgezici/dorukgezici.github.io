import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import '../../styles/c2a-btn.scss';
import styles from './BusinessCard.module.scss';


export default function BusinessCard() {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>Doruk Gezici</h1>
      <h2 className={styles.title}>Full Stack Developer &amp; Entrepreneur</h2>
      <div className={styles.about}>
        <p>
          <a href="/">DGtech</a>,&nbsp;
          <a href="https://udext.com" target="_blank">Udext</a>,&nbsp;
          <a href="https://gamerarena.com" target="_blank">Gamer Arena</a>,&nbsp;
          <a href="https://ituscheduler.com" target="_blank">ITUscheduler</a>
        </p>
        <a href="mailto:doruk@gezici.me" className="c2a-btn mt-10 mr-5" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>Contact Me
        </a>
        <a href="https://calendly.com/dorukgezici/30min" className="c2a-btn mt-10" target="_blank">
          <FontAwesomeIcon icon={faCalendar} className="mr-2"/>Book a Meeting
        </a>
      </div>

      <div className={styles.social}>
        <a href="https://linkedin.com/in/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className={classNames(styles.icon, 'mr-14')}/>
        </a>
        <a href="https://dorukgezici.medium.com" target="_blank">
          <FontAwesomeIcon icon={faMediumM} className={classNames(styles.icon, 'mr-14')}/>
        </a>
        <a href="https://github.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={classNames(styles.icon, 'mr-14')}/>
        </a>
        <a href="https://instagram.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className={classNames(styles.icon, 'mr-14')}/>
        </a>
        <a href="https://twitter.com/derektraveller" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className={classNames(styles.icon, 'mr-14')}/>
        </a>
        <a href="https://facebook.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon}/>
        </a>
      </div>
    </div>
  );
}
