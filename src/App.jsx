import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { MapDemo7 } from './components/MapDemo7';
import { MapDemo8 } from './components/MapDemo8';
import { MapDemo9 } from './components/MapDemo9';
import { MapDemo10 } from './components/MapDemo10';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './components/NetflixHome';
import { NetflixMovies } from './components/NetflixMovies';
import { NetflixShows } from './components/NetflixShows';
import { Navbar } from './components/Navbar';
import { HomeComponent } from './components/HomeComponent';
import { RecentlyAdded } from './components/RecentlyAdded';
import { MyList } from './components/MyList';
import { Categories } from './components/Categories';
import { ErrorNotFound } from './components/ErrorNotFound';
import { Watch } from './components/Watch';
import { Teams } from './components/Teams';
import { TeamDetail } from './components/TeamDetail';

function App() {
  

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/netflixhome' element={<NetflixHome />}></Route>
            <Route path='/netflixmovies' element={<NetflixMovies />}></Route>
            <Route path='/netflixshows' element={<NetflixShows />}></Route>
            <Route path='/recentlyadded' element={<RecentlyAdded />}></Route>
            <Route path='/mylist' element={<MyList />}></Route>
            <Route path='/categories' element={<Categories />}></Route>
            <Route path='/watch/:name' element={<Watch />}></Route>
            <Route path='/teams' element={<Teams />}></Route>
            <Route path='/teamdetail/:name' element={<TeamDetail />}></Route>

            
            <Route path='/*' element={<ErrorNotFound />}></Route>

            <Route path='/' element={<HomeComponent />}></Route>
            


        </Routes>
        
      </div>
    </>
  );
}

export default App;
