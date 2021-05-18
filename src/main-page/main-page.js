import './main-page.css';
import Header from '../components/header';
import Info from '../components/info';
import CardsFilter from '../components/cards-filter';
import FAQ from '../components/faq';
import News from '../components/news';
import Contacts from '../components/contacts';

function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <Info />
      <CardsFilter />
      <FAQ />
      <News />
      <Contacts />
    </div>
    
  );
}
export default MainPage;
