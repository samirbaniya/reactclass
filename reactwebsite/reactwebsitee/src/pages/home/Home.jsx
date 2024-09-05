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
      <div>
        <h1 className="heading">Animals For Adoption</h1>
      </div>
      <div className="pet-card">{tpets}</div>
    </>
  );
}

export default Home;
