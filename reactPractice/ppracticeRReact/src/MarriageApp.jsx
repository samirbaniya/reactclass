import Marriage from "./Marriage"

function MarriageApp() {
  const wed1={
    groomsName:"Rajan",
    bridesName:"Sajana",
    date:"SEPT 24 2024 At 10 AM",
    venue:"Lotus Party Venue"
  }

  const wed2={
    groomsName:"Biraj",
    bridesName:"Bipina",
    date:"NOV 2 2024 At 11 AM",
    venue:"Panchakanya Party Venue"
  }

  const wedSushil={
    groomsName:"Sushil",
    bridesName:"Supriya",
    date:"NOV 2 2024 At 11 AM",
    venue:"Banepa Party Venue"
  }

  const WedStyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }
    
  return (
    <div style={WedStyle}>
      <Marriage data={wed1} />
      <Marriage data={wed2} />
      <Marriage data={wedSushil} />
      </div>
  )
}

export default MarriageApp