import "./Home.css";

function Home() {
  const pets = [
    {
      name: "Puppy",
      id: 1,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog1.jpg",
    },
    {
      name: "kale",
      id: 2,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat1.jpg",
    },
    {
        name: "rate",
        id: 1,
        age: 2,
        species: "dog",
        color: "black",
        image: "images/dog1.jpg",
      },
      {
        name: "rockey",
        id: 2,
        age: 3,
        species: "cat",
        color: "white",
        image: "images/cat1.jpg",
      },
      {
        name: "Puppy",
        id: 1,
        age: 2,
        species: "dog",
        color: "black",
        image: "images/dog1.jpg",
      },
      {
        name: "Kitten",
        id: 2,
        age: 3,
        species: "cat",
        color: "white",
        image: "images/cat1.jpg",
      },
      {
        name: "Puppy",
        id: 1,
        age: 2,
        species: "dog",
        color: "black",
        image: "images/dog1.jpg",
      },
      {
        name: "Kitten",
        id: 2,
        age: 3,
        species: "cat",
        color: "white",
        image: "images/cat1.jpg",
      },
      {
        name: "Puppy",
        id: 1,
        age: 2,
        species: "dog",
        color: "black",
        image: "images/dog1.jpg",
      },
      {
        name: "Kitten",
        id: 2,
        age: 3,
        species: "cat",
        color: "white",
        image: "images/cat1.jpg",
      },{
        name: "Puppy",
        id: 1,
        age: 2,
        species: "dog",
        color: "black",
        image: "images/dog1.jpg",
      },
      {
        name: "Kitten",
        id: 2,
        age: 3,
        species: "cat",
        color: "white",
        image: "images/cat1.jpg",
      },
  ];

  const tpets = pets.map((pet) => (
    <div key={pet.id}>
      <div className="card">
        <div className="pet-div">
          <img className="pet-img" src={pet.image} alt={pet.image} />
        </div>
        <div>Name: {pet.name}</div>
        <div>Age: {pet.age}</div>
        <div>Species: {pet.species}</div>
        <div>Color: {pet.color}</div>
      </div>
    </div>
  ));
  return <><div><h1 className="heading">Animals For Adoption</h1></div>
  
  <div className="pet-card">{tpets}</div>;
  </>
}

export default Home;
