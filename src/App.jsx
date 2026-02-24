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
import { FunctionDemo1 } from './components/FunctionDemo1';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { CardComponent } from './components/CardComponent';
import { Employees } from './components/Employees';
import { Students } from './components/Students';
import { InputDemo1 } from './components/input/InputDemo1';
import { InputDemo2 } from './components/input/InputDemo2';
import { FormDemo1 } from './components/form/FormDemo1';
import { FormDemo2 } from './components/form/FormDemo2';
import { FormDemo3 } from './components/form/FormDemo3';
import { FormDemo4 } from './components/form/FormDemo4';
import { FormDemo5 } from './components/form/FormDemo5';
import { PractiseForm1 } from './components/form/PractiseForm1';
import { PractiseForm2 } from './components/form/PractiseForm2';
import { PractiseForm3 } from './components/form/PractiseForm3';
import { FormDemo6 } from './components/form/FormDemo6';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { ApiDemo3 } from './components/api/ApiDemo3';
import { ApiDemo4 } from './components/api/ApiDemo4';
import { ApiDemo5 } from './components/api/ApiDemo5';
import { MovieDetail } from './components/api/MovieDetail';
import { ApiDemo6 } from './components/api/ApiDemo6';
import { PractiseApi1 } from './components/api/PractiseApi1';
import { PractiseApi2 } from './components/api/PractiseApi2';
import { ApiPostDemo1 } from './components/api/ApiPostDemo1';


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
            <Route path='/functiondemo1' element={<FunctionDemo1 />}></Route>
            <Route path='/usestatedemo1' element={<UseStateDemo1 />}></Route>
            <Route path='/usestatedemo2' element={<UseStateDemo2 />}></Route>
            <Route path='/usestatedemo3' element={<UseStateDemo3 />}></Route>
            <Route path='/employees' element={<Employees />}></Route>
            <Route path='/students' element={<Students />}></Route>
            <Route path='/inputdemo1' element={<InputDemo1 />}></Route>
            <Route path='/inputdemo2' element={<InputDemo2 />}></Route>
            <Route path='/formdemo1' element={<FormDemo1 />}></Route>
            <Route path='/formdemo2' element={<FormDemo2 />}></Route>
            <Route path='/formdemo2' element={<FormDemo2 />}></Route>
            <Route path='/formdemo3' element={<FormDemo3 />}></Route>
            <Route path='/formdemo4' element={<FormDemo4 />}></Route>
            <Route path='/formdemo5' element={<FormDemo5 />}></Route>
            <Route path='/practiseform1' element={<PractiseForm1 />}></Route>
            <Route path='/practiseform2' element={<PractiseForm2 />}></Route>
            <Route path='/practiseform3' element={<PractiseForm3 />}></Route>
            <Route path='/formdemo6' element={<FormDemo6 />}></Route>
            <Route path='/apidemo1' element={<ApiDemo1 />}></Route>
            <Route path='/apidemo2' element={<ApiDemo2 />}></Route>
            <Route path='/apidemo3' element={<ApiDemo3 />}></Route>
            <Route path='/apidemo4' element={<ApiDemo4 />}></Route>
            <Route path='/apidemo5' element={<ApiDemo5 />}></Route>
            <Route path="/moviedetail/:id"element={<MovieDetail/>}></Route>
            <Route path='/apidemo6' element={<ApiDemo6 />}></Route>
            <Route path='/pracapi1' element={<PractiseApi1 />}></Route>
            <Route path='/pracapi2' element={<PractiseApi2 />}></Route>
            <Route path='/apipost1' element={<ApiPostDemo1 />}></Route>



            <Route path='/*' element={<ErrorNotFound />}></Route>

            <Route path='/' element={<HomeComponent />}></Route>
            


        </Routes>
        
      </div>
    </>
  );
}

export default App;
