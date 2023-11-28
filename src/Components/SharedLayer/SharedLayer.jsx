import React from 'react'
import Header from '../Header/Header';
import AddTask from '../AddTask/AddTask';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function SharedLayer() {
  return (
		<div>
          <Header />
          <AddTask />
          <Outlet/>
          <Footer/>
		</div>
	);
}

export default SharedLayer