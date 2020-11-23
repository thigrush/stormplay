import Head from 'next/head'

const Header = () => (
  <>
    <Head>
      <title>Storm Play</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <header className="header">
      <div className="header__img"></div>
      <div className="header__text">
        <p className="header__description">Bem vindo ao </p>
        <h1 className="header__title">Storm Play</h1>
      </div>
    </header>
  </>
)

export default Header
