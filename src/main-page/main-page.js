import './main-page.css';
import Header from '../components/header';
import Info from '../components/info';
import CardsFilter from '../components/cards-filter';
import FAQ from '../components/faq';
import News from '../components/news';

function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <Info />
      <CardsFilter />
      <FAQ />
      <News />
    </div>
    
  );
}
export default MainPage;
