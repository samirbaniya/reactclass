import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import pets from "../../assets/petData";
function PetCategories() {
  const params = useParams();
  const strParams = params.category;
  const currData = pets.filter((pet) =>
    strParams === "other"
      ? pet.species !== "dog" && pet.species !== "cat"
      : pet.species === strParams
  );

  //   console.log(currData);
  if (currData.length < 1) {
    return <div>No {strParams} found</div>;
  }

  const tdata = currData.map((pet) => (
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
    <div>
      <h2 className="explore-heading">Explore {strParams}s</h2>
      <div className="pet-card">{tdata}</div>
    </div>
  );
}

export default PetCategories;
