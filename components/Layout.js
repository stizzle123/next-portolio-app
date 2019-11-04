import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>NextPortfolio</title>
      </Head>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          margin: 1em;
        }
        header > * {
          display: block;
          margin: 1em;
        }
      `}</style>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire me</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <div className="root">{children}</div>
    </>
  );
};

export default Layout;
