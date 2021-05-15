import './main-page.css';
import Header from '../components/header';
import Info from '../components/info';
import CardsFilter from '../components/cards-filter';

function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <Info />
      <CardsFilter />
    </div>
    
  );
}
export default MainPage;
