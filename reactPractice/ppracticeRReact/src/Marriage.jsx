/* eslint-disable react/prop-types */
function Marriage({data}) {
  const marriageStyle={
    
      // border:"1px solid green",
      display:"flex",
      flexDirection:"column",
      width:"20%",
      height:"65vh",
      padding:"2%",
      alignItems:"center",
      // backgroundColor:"#fbefe3",
      // boxShadow:"#c6ffc6 0px 0px 15px 4px",
      // borderRadius:"90px",
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
