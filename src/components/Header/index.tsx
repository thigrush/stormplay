import Head from 'next/head'

const Header = () => (
  <>
    <Head>
      <title>StormPlay</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <header className="header">
      <h1 className="header__title">StormPlay</h1>
      <p className="header__description">Bem vindo</p>
    </header>
  </>
)

export default Header
