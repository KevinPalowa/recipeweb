import Container from "./Container";
import Nav from "./Nav";
import Categories from "./Categories";
import Search from "./Search";
import Head from "next/head";
function Layout({ children, title }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Categories />
      <Search />
      {children}
    </Container>
  );
}

export default Layout;
