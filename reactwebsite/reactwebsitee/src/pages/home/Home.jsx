import "./Home.css";

function Home() {
  const pets = [
    {
      name: "Max",
      id: 1,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog1.jpg",
      description:
        "Max is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Kale",
      id: 2,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/catt.png",
      description:
        "Kale is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Ratey",
      id: 3,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dogg.png",
      description:
        "Ratey is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Rockey",
      id: 4,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat2.jpg",
      description:
        "Max is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Guppy",
      id: 5,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog3.jpg",
      description:
        "Guppy is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Kitten",
      id: 6,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat3.jpg",
      description:
        "Kitten is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Trippy",
      id: 7,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog4.jpg",
      description:
        "Trippy is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Guy",
      id: 8,
      age: 3,
      species: "cow",
      color: "white",
      image: "images/cow1.jpg",
      description:
        "Guy is a cow with good behaviour.He is also well trained.............",
    },
    {
      name: "Puppy",
      id: 9,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog5.jpg",
      description:
        "Puppy is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Kitten",
      id: 10,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat4.jpg",
      description:
        "Kitten is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Pups",
      id: 11,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog2.jpg",
      description:
        "Pups is a dog with good behaviour.He is also well trained.............",
    },
    {
      name: "Kitten",
      id: 12,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat2.jpg",
      description:
        "Kitten is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Kits",
      id: 13,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat2.jpg",
      description:
        "Kits is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Kale",
      id: 14,
      age: 3,
      species: "cat",
      color: "white",
      image: "images/cat1.jpg",
      description:
        "Kale is a cat with good behaviour.He is also well trained.............",
    },
    {
      name: "Ratey",
      id: 15,
      age: 2,
      species: "dog",
      color: "black",
      image: "images/dog2.jpg",
      description:
        "Ratey is a dog with good behaviour.He is also well trained.............",
    },
  ];

  const tpets = pets.map((pet) => (
    <div key={pet.id}>
      <div className="card">
        <div className="pet-div">
          <img className="pet-img" src={pet.image} alt={pet.image} />
        </div>
        <div
          style={{ textAlign: "center", color: "#7387cd", fontSize: "2rem" }}
        >
          {pet.name}
        </div>
        <section className="flex">
          <div className="adopt-btn-div">
            <div>
              Description: <br />
              {pet.description}
            </div>
            {/* <button className="adopt-btn">Adopt</button> */}
          </div>
          <div className="pet-description">
            <div>Species: {pet.species}</div>
            <div>Age: {pet.age}</div>
            <div>Color: {pet.color}</div>
          </div>
        </section>
        <button className="readmore-btn">Readmore...</button>
      </div>
    </div>
  ));
  return (
    <>
      <div>
        <h1 className="heading">Animals For Adoption</h1>
      </div>
      <div className="pet-card">{tpets}</div>
    </>
  );
}

export default Home;
