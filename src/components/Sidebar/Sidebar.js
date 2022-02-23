import './Sidebar.scss'
import { NavLink } from 'react-router-dom';
import { preferredCategories, toTitleCase } from '../../utils';

function Sidebar() {
  return ( 
    <>
    <div className='sidebar-spacer'></div>
    <aside className='Sidebar'>
      <h3>Categories</h3>
      <div className='categories'>
      {preferredCategories.map(el => {
        return <NavLink 
         className={"category-link"}
         to={`/category/${el}`}
         key={el}>
        {toTitleCase(el)}</NavLink>
      })}
      </div>
    </aside>
    </>
   );
}

export default Sidebar;