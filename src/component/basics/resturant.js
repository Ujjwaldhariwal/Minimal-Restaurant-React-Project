import React from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import Menucard from "./Menucard.js";
import Navebar from './navebar';

const uniqueList =[
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];


const Resturant = () => {

  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);


  const filterItem = (category) => {
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };
  
  return (
    <>
    <Navebar filterItem={filterItem} menuList={menuList}/> 
    <Menucard menuData={menuData}/>
    </>
  );
};

export default Resturant ;