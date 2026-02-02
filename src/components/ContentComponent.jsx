import React from 'react'

export default function ContentComponent() {
    var year = 2026;
  var title ="Virat Kohli Portfolio";
  var isAvailable = "true";

  var player = {
    name : "Virat Kohli",
    age : "37",
    city : "Delhi",
    jerseyno : "18",
    birthdate : "5th November 1988",
    petname : "Cheeku",
    proffesion: "International Cricketer"
  };
  return (
    <div>
        
            <h1>Hello</h1>
            {year}
            <h1>YEAR : {year}</h1>
            <h2>Title : {title}</h2>
            
            <h3>Available??? {isAvailable == true ? "TRUE" : "FALSE"}</h3>
            
            
            <h2>Name : {player.name}</h2>
            <h3>AGE : {player.age}</h3>
            <h3>City: {player.city}</h3>
            <h3>Jersey No: {player.jerseyno}</h3>
            <h3>BirthDate : {player.birthdate}</h3>
            <h3>PetName : {player.petname}</h3>
            <h3>Profession : {player.proffesion}</h3>
            </div>
  );
}
