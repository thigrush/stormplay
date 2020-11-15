import Head from 'next/head'
import styles from '../../styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({ title = "Stormplay" }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          Bem vindo ao {title}
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>GRID</h3>
            <p>DESCRIPTION</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/thigrush"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Thiago Andrade
        </a>
      </footer>
    </div>
  )
}
