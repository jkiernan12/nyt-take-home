import MainSection from '../MainSection/MainSection';
import './MainPage.scss'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header';

function MainPage() {
  return (
    <div className='page'>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <MainSection category="arts" />
        <MainSection category="science" />
        <MainSection category="sports" />
        <MainSection category="food" />
        <MainSection category="books" />
        <MainSection category="technology" />
      </main>
    </div>
  );
}

export default MainPage;