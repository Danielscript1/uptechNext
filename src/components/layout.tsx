import Main from 'components/Main';
import Navbar from 'components/navbar';
import Header from './Header';
import  Footer  from './rodape/index';

export default function Layout({ children }:any) {
  return (
    <>
      <Header/>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}