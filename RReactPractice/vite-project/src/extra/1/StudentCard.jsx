import "./StudentCard.css";
function StudentCard() {
  const students = [
    {
      name: "Sam",
      roll: 1,
      address:"Banepa",
      subject:"C++",
      image: "images/1.png"
    },
    {
      name: "Raj",
      roll: 2,
      address:"Panauti",
      subject:"Java",
      image: "images/2.png"

    },
    {
      name: "Rajan",
      roll: 4,
      address:"Banepa",
      subject:"Python",
      image: "images/beard.png"
    },
    {
      name: "Gopal",
      roll: 5,
      address:"Banepa",
      subject:"C++",
      image: "images/fb.png"
    },
    {
      name: "Harka",
      roll: 6,
      address:"Bhaktapur",
      subject:"C++",
      image: "images/logo.png"
    },
    {
      name: "Hari",
      roll: 55,
      address:"Banepa",
      subject:"C++",
      image: "images/icon.png"
    },
    {
      name: "Sravan",
      roll: 11,
      address:"Nala",
      subject:"C++",
      image: "images/shop.png"
    },
    {
      name: "Rajesh",
      roll: 7,
      address:"Banepa",
      subject:"C++",
      image: "images/yt.png"
    },
    {
      name: "Sheldon",
      roll: 12,
      address:"Banepa",
      subject:"OOP",
      image: "images/fb.png"
    },
    {
      name: "Alex",
      roll: 8,
      address:"Banepa",
      subject:"C++",
      image: "images/logo.png"
    },
    {
      name: "Luke",
      roll: 9,
      address:"Banepa",
      subject:"C++",
      image: "images/logo.png"
    },
    {
      name: "Charlie",
      roll: 10,
      address:"Banepa",
      subject:"Math",
      image: "images/logo.png"
    },
    {
      name: "Alan",
      roll: 15,
      address:"Banepa",
      subject:"C++",
      image: "images/logo.png"
    },
    {
      name: "Alan",
      roll: 22,
      address:"Banepa",
      subject:"C++",
      image: "images/logo.png"
    },
    
  ];

  const tstudents = students.map((item) => (
    <div key={item.roll}>
      <div className="card">
        <div>Name:{item.name}</div>
        <div>Roll:{item.roll}</div>
        <div>Address:{item.address}</div>
        <div>Subject:{item.subject}</div>
        <div>Image: <br/> <img className="imga" src={item.image} alt={item.image} /></div>

      </div>
    </div>
  ));
  return <div className="student">{tstudents}</div>;
}

export default StudentCard;
