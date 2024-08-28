import "./StudentCard.css";
function StudentCard() {
  const students = [
    {
      name: "Sam",
      roll: 1,
      address:"Banepa",
      subject:"C++",
      image: <img className="imga" src="1.png" alt="1" />
    },
    {
      name: "Raj",
      roll: 2,
      address:"Panauti",
      subject:"Java",
      image: <img className="imga" src="2.png" alt="2" />

    },
    {
      name: "Rajan",
      roll: 4,
      address:"Banepa",
      subject:"Python"
    },
    {
      name: "Gopal",
      roll: 5,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Harka",
      roll: 6,
      address:"Bhaktapur",
      subject:"C++"
    },
    {
      name: "Hari",
      roll: 55,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Sravan",
      roll: 11,
      address:"Nala",
      subject:"C++"
    },
    {
      name: "Rajesh",
      roll: 7,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Sheldon",
      roll: 12,
      address:"Banepa",
      subject:"OOP"
    },
    {
      name: "Alex",
      roll: 8,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Luke",
      roll: 9,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Charlie",
      roll: 10,
      address:"Banepa",
      subject:"Math"
    },
    {
      name: "Alan",
      roll: 15,
      address:"Banepa",
      subject:"C++"
    },
    {
      name: "Alan",
      roll: 22,
      address:"Banepa",
      subject:"C++"
    },
    
  ];

  const tstudents = students.map((item) => (
    <div key={item.roll}>
      <div className="card">
        <div>Name:{item.name}</div>
        <div>Roll:{item.roll}</div>
        <div>Address:{item.address}</div>
        <div>Subject:{item.subject}</div>
        <div>Image: <br/> {item.image}</div>

      </div>
    </div>
  ));
  return <div className="student">{tstudents}</div>;
}

export default StudentCard;
