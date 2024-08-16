import { useState } from "react";

function PracticeUsestate() {
    const [student, setStudent] = useState({
        name: "abishek",
        roll: 1,
        address: "panauti",
      });
    //   const [result, setResult] = useState(0);
    //   let a = 2;
    //   let b = 3;
    
    //   function sum() {
    //     setResult(a + b);
    //   }
    
      function changeData() {
        setStudent({ name: "Asim", roll: 2, address: "Sallaghari" });
      }
      console.log(student);
      return (
        <>
          Name :{student.name}
          Roll :{student.roll}
          Address :{student.address}
          {/* {result } */}
          <button onClick={changeData}>Change me</button>
        </>
  )
}

export default PracticeUsestate