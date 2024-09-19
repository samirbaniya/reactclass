import { NavLink } from "react-router-dom";
import pets from "../../assets/petData";
import Search from "../../components/Search/Search";
function Explore() {
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
        <Search />
      </div>

      <div>
        <h2 className="explore-heading">Explore for Pets</h2>
        <div className="pet-card">{tpets}</div>
      </div>
    </>
  );
}

export default Explore;
