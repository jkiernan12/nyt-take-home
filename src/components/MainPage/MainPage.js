import MainSection from '../MainSection/MainSection';
import './MainPage.scss'

function MainPage() {
  return (
    <main>
      <h1>Times News</h1>
      <MainSection category="arts" />
      <MainSection category="science" />
      <MainSection category="sports" />
    </main>
  );
}

export default MainPage;