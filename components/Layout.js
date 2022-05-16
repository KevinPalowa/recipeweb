import Container from "./Container";
import Nav from "./Nav";
import Categories from "./Categories";
import Search from "./Search";
import Head from "next/head";
import { motion } from "framer-motion";
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

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Container>
  );
}

export default Layout;
