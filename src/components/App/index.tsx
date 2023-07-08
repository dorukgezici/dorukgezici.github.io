import classNames from 'classnames';
import BusinessCard from '../BusinessCard';
import styles from './App.module.scss';


export default function App() {
  return (
    <div className="overflow-hidden">
      <section className={classNames(styles.bgImg, 'min-h-screen flex justify-center items-center')}>
        <BusinessCard/>
      </section>

      <section className="flex">
        <h1 className="flex-col">Test asdfasdf</h1>
        <h1 className="flex-col">Test asdfasdf</h1>
        <h1 className="flex-col">Test asdfasdf</h1>
      </section>
    </div>
  );
}
