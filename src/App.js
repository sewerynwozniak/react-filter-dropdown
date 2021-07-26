import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import homeIcon from './icons/home.png';
import publicationsIcon from './icons/publications.png';
import peopleIcon from './icons/people.png';
import entitiesIcon from './icons/entities.png';
import profileIcon from './icons/profile.png';
import privacyIcon from './icons/privacy.png';
import settingsIcon from './icons/settings.png';
import logoutIcon from './icons/logout.png';
import arrowDownIcon from './icons/arrow-down.png';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  const [click, setClick] = useState(false);

  const [search, setSearch] = useState('');
  
  
  
  const menuList = [
      {
          key:1,
          name:'Home',
          path:'/',
          srcIcon:homeIcon,
          category:'platform'
      },
      {
          key:2,
          name:'Publications',
          path:'/',
          srcIcon:publicationsIcon,
          category:'platform'
      },
      {
          key:3,
          name:'People',
          path:'/',
          srcIcon:peopleIcon,
          category:'platform'
      },
      {
          key:4,
          name:'Client Contract',
          path:'/',
          srcIcon:publicationsIcon,
          category:'workspaces'
      },
      {
          key:5,
          name:'Supplier Contract',
          path:'/',
          srcIcon:publicationsIcon,
          category:'workspaces'
      },
      {
          key:6,
          name:'Corporate',
          path:'/',
          srcIcon:entitiesIcon,
          category:'workspaces'
      },
      {
          key:7,
          name:'Leanne Graham',
          path:'/',
          srcIcon:profileIcon,
          category:'account'
      },
      {
          key:8,
          name:'Privacy',
          path:'/',
          srcIcon:privacyIcon,
          category:'account'
      },
      {
          key:9,
          name:'Settings',
          path:'/',
          srcIcon:settingsIcon,
          category:'account'
      },
  ]
  
  
  
  
  const [menu, setMenu] = useState(menuList);
  
  
  const handleExpandedMenu =()=>{
      setClick(!click)
       
  };
  
  const filter = (e)=>{
      setSearch(e.target.value); 
  }
  
  

  
  
  useEffect(() => {
      setMenu(menuList.filter(m=>m.name.toLowerCase().indexOf(search.toLowerCase())!==-1))
  }, [search])
  
  
  const handleClick = (e)=>{
  
      if(click && !myRef.current?.contains(e.target)){
          setClick(false)    
      }
  
  }
  
  useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
          document.removeEventListener('click', handleClick)
      }
  }, [click])
  
  
  
  const myRef = React.useRef(null);
  
  
  
      return (
          <div ref={myRef}>
              <Router>
            <button 
                onClick={handleExpandedMenu} 
                className="expMenu__arrowDown">
                <img className="expMenu__homeIcon" src={homeIcon} alt=""/>
                 <span className="expMenu__currentMenu">Home</span>
                <img src={arrowDownIcon} alt=""/>
            </button>
              <ul className={click? 'expMenu__ul--visible' : 'expMenu__ul--novisible'}>
                  <input className='expMenu__input' onChange={filter} type="text" placeholder='Filter'/>
  
                  {menu.some(e=>e.category=='platform')&&<span className="expMenu__linkCategory">Platform</span>}
                  {menu.filter(e=>e.category=='platform').map(({name, srcIcon, path})=>(
                      <li className="expMenu__li">
                      <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                      </li>
                  ))}
  
                  {menu.some(e=>e.category=='workspaces')&&<span className="expMenu__linkCategory">Workspaces</span>}
                  {menu.filter(e=>e.category=='workspaces').map(({name, srcIcon, path})=>(
                      <li className="expMenu__li">
                      <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                      </li>
                  ))}
                   {menu.some(e=>e.category=='account')&&<span className="expMenu__linkCategory">Account</span>}
                   {menu.filter(e=>e.category=='account').map(({name, srcIcon, path})=>(
                      <li className="expMenu__li">
                      <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                      </li>
                  ))}
                  <button className='expMenu__logout'>
                      <img className='expMenu__logOutIcon' src={logoutIcon}></img>
                      <Link className="expMenu__link" to='/test'>Logout</Link>                  
                  </button>
               </ul>
               </Router>
          </div>
      );


}

export default App;
