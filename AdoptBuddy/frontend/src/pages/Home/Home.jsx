function Home() {
  const students = [
    {
      name: "puppy",
      id: 1,
      species:"dog",
      color:"black",
      breed:"normal",
      image: "images/dog1.jpg"
    },
    
    {
      name: "kitten",
      id: 22,
      species:"Banepa",
      color:"white",
      breed:"normal",
      image: "images/cat1.jpg"
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
export default Home;
