import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EdTech AI Tutor</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to EdTech AI Tutor</h1>
        <p className={styles.description}>AI-Powered Learning Assistant with Gamification</p>
      </main>
    </div>
  );
}