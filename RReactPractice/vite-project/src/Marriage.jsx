/* eslint-disable react/prop-types */
function Marriage({data}) {
    const marriageStyle={
        display:"flex",
        flexDirection:"column",
        width:"20%",
        height:"65vh",
        padding:"2%",
        alignItems:"center",
        margin:"10px",
        backgroundImage:"url('../public/wedbackground.jpg')",
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat"
    }
    const fontt={fontFamily:"cursive"}
  
    
  
    return (
    <div style={marriageStyle}>
      <div>YOU ARE INVITED</div> 
      <div>TO THE WEDDING OF </div>
      <h2>{data.groomsName} </h2>
      <h2>&</h2>
      <h2>{data.bridesName}</h2> 
      <div>{data.date} </div>
      <b>{data.venue} </b>
      <div style={fontt}>Reception to follow</div>
  
    </div>
      );
  }
  
  export default Marriage;
  