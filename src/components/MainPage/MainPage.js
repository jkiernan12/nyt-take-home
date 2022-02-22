import MainSection from '../MainSection/MainSection';
import './MainPage.scss'
import Sidebar from '../Sidebar/Sidebar'

function MainPage() {
  return (
    <div className='page'>
      <div className='sidebar-spacer'></div>
      <Sidebar />
      <main className='main-container'>
        <h1>Times News</h1>
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