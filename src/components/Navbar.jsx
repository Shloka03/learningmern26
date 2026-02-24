import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/netflixhome">NetflixHome</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/netflixshows">Shows</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/netflixmovies">Movies</Link>
      </li>
      
      
      <li class="nav-item">
        <Link class="nav-link" to="/teams">Teams</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/functiondemo1">FunctionDemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo1">UseStateDemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo2">UseStateDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo3">UseStateDemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/employees">Employees</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/students">Students</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputdemo1">InputDemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputdemo2">InputDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">FormDemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">FormDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">FormDemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">FormDemo4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">FormDemo5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/practiseform1">PractiseForm1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/practiseform2">PractiseForm2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/practiseform3">PractiseForm3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">FormDemo6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">ApiDemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">ApiDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo3">ApiDemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo4">ApiDemo4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo5">ApiDemo5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo6">ApiDemo6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo6">ApiDemo6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/pracapi1">PractiseApi1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/pracapi2">PractiseApi2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apipost1">ApiPostDemo1</Link>
      </li>



      


      
      
    </ul>
    
  </div>
</nav>
    </div>
  );
}
