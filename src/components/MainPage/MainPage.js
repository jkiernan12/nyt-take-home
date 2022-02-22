import MainSection from '../MainSection/MainSection';
import './MainPage.scss'

function MainPage() {
  return (
    <main className='main-container'>
      <h1>Times News</h1>
      <MainSection category="arts" />
      <MainSection category="science" />
      <MainSection category="sports" />
      <MainSection category="food" />
      <MainSection category="books" />
      <MainSection category="technology" />
    </main>
  );
}

export default MainPage;