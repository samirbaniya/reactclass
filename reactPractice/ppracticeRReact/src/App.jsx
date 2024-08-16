// import Marriage from "./Marriage"
// import PracticeState from "./PracticeState"

import Nmarriage from "./Nmarriage"
// import PracticeUsestateApp from "./PracticeUseStateApp"

function App() {

  const WedStyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }
    
  return(
    <>
    <div style={WedStyle}>
    <Nmarriage/>
    </div>
    {/* <PracticeUsestateApp/> */}
    </>
    
  )
}

export default App