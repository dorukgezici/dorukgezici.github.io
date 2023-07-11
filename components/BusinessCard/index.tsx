import Link from 'next/link';
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
import styles from './styles.module.scss';


export default function BusinessCard({ className }: { className: string }) {
  return (
    <div className={classNames(styles.card, className)}>
      <h1 className="font-extrabold text-6xl md:text-8xl">Doruk Gezici</h1>
      <h2 className="my-5 sm:my-10 text-2xl md:text-4xl">Full Stack Developer &amp; Entrepreneur</h2>

      <p className="text-gray-400 text-xl md:text-2xl">
        <Link href="/">DGtech</Link>,&nbsp;
        <Link href="https://udext.com" target="_blank">Udext</Link>,&nbsp;
        <Link href="https://gamerarena.com" target="_blank">Gamer Arena</Link>,&nbsp;
        <Link href="https://ituscheduler.com" target="_blank">ITUscheduler</Link>
      </p>

      <div className={classNames(styles.actions,
        'flex flex-wrap justify-center items-center',
        'gap-5 my-5 sm:my-10',
      )}>
        <Link href="mailto:doruk@gezici.me" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>Contact Me
        </Link>
        <Link href="https://calendly.com/dorukgezici/30min" target="_blank">
          <FontAwesomeIcon icon={faCalendar} className="mr-2"/>Book Meeting
        </Link>
      </div>

      <div className={classNames(styles.social,
        'flex flex-wrap justify-center mt-5 sm:mt-10',
        'gap-4 sm:gap-8 md:gap-12 lg:gap-14',
        'text-3xl sm:text-4xl',
      )}>
        <Link href="https://linkedin.com/in/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </Link>
        <Link href="https://dorukgezici.medium.com" target="_blank">
          <FontAwesomeIcon icon={faMediumM}/>
        </Link>
        <Link href="https://github.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faGithub}/>
        </Link>
        <Link href="https://instagram.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faInstagram}/>
        </Link>
        <Link href="https://twitter.com/derektraveller" target="_blank">
          <FontAwesomeIcon icon={faTwitter}/>
        </Link>
        <Link href="https://facebook.com/dorukgezici" target="_blank">
          <FontAwesomeIcon icon={faFacebookF}/>
        </Link>
      </div>
    </div>
  );
}
