import React from 'react';
import Header from './Header';
import styles from '@/styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import NavBar from './NavBar';
type Props = {
  children: any;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <main className={styles.main}>
        <Box w="100vw" h="100vh" display="flex" flexDirection="column">
          <Header title={title} />
          <NavBar />
          {children}
          <Footer />
        </Box>
      </main>
    </>
  );
};

export default Layout;
