import classNames from 'classnames';
import BusinessCard from '@/components/BusinessCard';
import FlipCard from '@/components/FlipCard';
import styles from './styles.module.scss';


export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className={classNames(styles.bgImg, 'min-h-screen max-h-screen flex justify-center items-center')}>
        <BusinessCard className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-[900px]"/>
      </section>

      <section className="flex flex-wrap justify-center items-center sm:my-20 gap-8">
        <FlipCard className="w-11/12 h-[96vw] sm:w-[512px] sm:h-[512px]"/>

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
            Prefers tech stack choices like Python, Django, FastAPI, Go, Docker, AWS, PostgreSQL, Kubernetes,
            Rancher, Celery, RabbitMQ, Redis, NextJS, React, VueJS, Tailwind, Bootstrap, Firebase, Sentry, GitHub
            Actions, Hotjar, Cloudflare, Google Data Studio, Trello, Slack...
          </p>
          <p>
            Also loves to play and record some jams and songs which you can check out at <a
            href="https://soundcloud.com/dorukgezici">soundcloud.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
