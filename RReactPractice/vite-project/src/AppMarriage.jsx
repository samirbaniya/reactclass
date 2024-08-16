import UseStateMarriage from "./UseStateMarriage"
function AppMarriage() {

  const WedStyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }
    
  return(
    <>
    <div style={WedStyle}>
    <UseStateMarriage/>
    </div>
    </>
    
  )
}

export default AppMarriage