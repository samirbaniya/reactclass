import "./Home.css";
import pets from "../../assets/petData";
import { NavLink } from "react-router-dom";
function Home() {
  const tpets = pets.map((pet) => (
    <div key={pet.id}>
      <NavLink to={`/animals/${pet.id}`}>
        <div className="card">
          <div className="pet-div">
            <img className="pet-img" src={pet.image} alt={pet.image} />
          </div>
          <div
            style={{ textAlign: "center", color: "#7387cd", fontSize: "2rem" }}
          >
            {pet.name}
          </div>
          <div className="pet-description">
            <div>Age: {pet.age}</div>
            <div>Species: {pet.species}</div>
            <div>Color: {pet.color}</div>
          </div>
        </div>
      </NavLink>
      {/* <NavLink to={`/animals/${pet.id}`}>
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
              <button className="adopt-btn">Adopt</button>
            </div>
            <div className="pet-description">
              <div>Species: {pet.species}</div>
              <div>Age: {pet.age}</div>
              <div>Color: {pet.color}</div>
            </div>
          </section>
          <button className="readmore-btn">Readmore...</button>
        </div>
      </NavLink> */}
    </div>
  ));
  return (
    <>
      <div className="heading">
        <h1>Find Pet Buddy</h1>
        <p>
          Browse through a variety of animals and find the perfect pet for your
          family and adopt a loving pet.
        </p>
      </div>

      <div className="categories-container">
        <h2 className="categories-heading">Categories</h2>
        <div className="categories">
          <div className="categories-card">
            <img className="categories-img" src="/images/cat1.jpg" alt="cat" />
            <h3 className="float-text">Cat</h3>
          </div>
          <div className="categories-card">
            <img className="categories-img" src="/images/dog1.jpg" alt="dog" />
            <h3 className="float-text">Dog</h3>
          </div>
          <div className="categories-card">
            <img className="categories-img" src="/images/cow1.jpg" alt="dog" />
            <h3 className="float-text">Other Animals</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="explore-heading">Explore Animals</h2>
        <div className="pet-card">{tpets}</div>
      </div>
    </>
  );
}

export default Home;
