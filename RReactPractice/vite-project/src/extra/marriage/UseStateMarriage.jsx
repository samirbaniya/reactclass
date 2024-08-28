import { useState } from "react";
function UseStateMarriage() {
  const marriageStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    height: "65vh",
    padding: "2%",
    alignItems: "center",
    margin: "10px",
    backgroundImage: "url('../public/wedbackground.jpg')",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const fontt = { fontFamily: "cursive" };

  const [groom, setGroom] = useState({
    groomsName: "Rajan",
    bridesName: "Sajana",
    date: "SEPT 24 2024 At 10 AM",
    venue: "Lotus Party Venue",
  });

  function changeData() {
    setGroom({
      groomsName: "Biraj",
      bridesName: "Bipina",
      date: "NOV 2 2024 At 11 AM",
      venue: "Panchakanya Party Venue",
    });
  }

  return (
    <div style={marriageStyle}>
      <div>YOU ARE INVITED</div>
      <div>TO THE WEDDING OF </div>
      <h2>{groom.groomsName} </h2>
      <h2>&</h2>
      <h2>{groom.bridesName}</h2>
      <div>{groom.date} </div>
      <b>{groom.venue} </b>
      <div style={fontt}>Reception to follow</div>
      <button onClick={changeData}>Change Groom</button>
    </div>
  );
}

export default UseStateMarriage;
