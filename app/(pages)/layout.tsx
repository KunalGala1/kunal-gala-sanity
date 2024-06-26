import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTopBtn from '../components/ScrollTopBtn';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollTopBtn />
    </>
  );
};
export default PagesLayout;
