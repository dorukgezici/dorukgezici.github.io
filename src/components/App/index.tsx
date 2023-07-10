import classNames from 'classnames';
import BusinessCard from '../BusinessCard';
import styles from './App.module.scss';


export default function App() {
  return (
    <div className="overflow-hidden">
      <section className={classNames(styles.bgImg, 'min-h-screen flex justify-center items-center')}>
        <BusinessCard/>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center my-20 gap-8">
        <div className={classNames(styles.card)}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <img src="/img/dg.jpg" alt="Doruk Gezici" width={512} height={512} className="rounded-xl"/>
            </div>
            <div className={styles.cardBack}>
              <iframe
                width="100%" height="512" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dorukgezici&color=%232a0c12&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-2/3 lg:w-1/3 text-lg">
          <h1 className="text-6xl font-extrabold mb-4">Who.is</h1>
          <h2 className="text-3xl mb-8">Doruk Gezici</h2>
          <p className="mb-4">
            A curious hacker who is passionate about software, blockchain, innovation, entrepreneurship and leadership.
          </p>
          <p className="mb-4">
            Experienced in product management, web development and architecture, DevOps, IoT and iOS apps. Interested
            in making everything more efficient, autonomous and smart.
          </p>
          <p className="mb-4">
            Prefers tech stack of Python, Django REST Framework, Docker, AWS, PostgreSQL, Kubernetes,
            Rancher, Celery, RabbitMQ, Redis, VueJS, Bootstrap, Firebase, Sentry, GitHub Actions, Hotjar, Cloudflare,
            Google Data Studio, Trello, Slack...
          </p>
          <p className="mb-4">
            Also loves to play and record some jams and songs which you can check out at <a
            href="https://soundcloud.com/dorukgezici">soundcloud.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
