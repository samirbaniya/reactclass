import { useParams } from "react-router-dom";
import pets from "../../assets/petData";
import { NavLink } from "react-router-dom";
import "./PetDescription.css";
function PetDesccription() {
  const params = useParams();
  const intParams = params.id;
  const currData = pets.filter((pet) => `${pet.id}` === intParams)[0];

  //   console.log(currData);
  if (!currData) {
    return <div>Invalid data</div>;
  }

  return (
    <div className="animal-background">
      <section className="animal-content">
        <div style={{ color: "#7387cd", fontSize: "2rem" }}>
          {currData.name}
        </div>

        <img className="animal-img" src={currData.image} alt={currData.image} />
        <div>Species: {currData.species}</div>
        <div>Age: {currData.age}</div>
        <div>Color: {currData.color}</div>
        <hr />
        <div style={{ lineHeight: "1.5rem" }}>
          Description: <br />
          {currData.description}
        </div>
        <hr />
        <NavLink to={`/adopt/${currData.id}`}>
          <div className="adopt-btn-div">
            <button className="adopt-btn">Adopt {currData.name}</button>
          </div>
        </NavLink>
      </section>
    </div>
  );
}

export default PetDesccription;
