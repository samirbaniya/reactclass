import { useParams } from "react-router-dom";
import pets from "../../assets/petData";
import "./AdoptForm.css";

function AdoptForm() {
  const params = useParams();
  const intParams = params.id;
  const currData = pets.filter((pet) => `${pet.id}` === intParams)[0];
  if (!currData) {
    return <div>Invalid data</div>;
  }

  const handleSubmit = () => {
    const isConfirmed = window.confirm(
      "Click ok if you're sure to submit adoption form"
    );
    if (isConfirmed) {
      alert("Form submitted successfully!");
    } else {
      alert("Submission canceled.");
    }
  };
  return (
    <div className="adopt-form">
      <div className="adopt-form-in">
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#585858",
            }}
          >
            Adoption Form
          </h2>
          <fieldset
            style={{
              display: "flex",
              //   justifyContent: "center",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <legend>Adopting {currData.name}:</legend>
            <div className="form-animal">
              <img className="form-animal-img" src={currData.image} alt="" />
            </div>
            <div>
              <div>Species: {currData.species}</div>
              <div>Age: {currData.age}</div>
              <div>Color: {currData.color}</div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Form for user</legend>
            <div>
              <label htmlFor="username">Name:</label>
              <input type="text" name="username" id="username" />
              <br />
              <br />

              <label htmlFor="phone">Phone No.:</label>
              <input type="text" name="phone" id="phone" />
              <br />
              <br />

              <label htmlFor="address">Address:</label>
              <input type="text" name="address" id="address" />
              <br />
              <br />

              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
              <br />
              <br />

              <label htmlFor="previousPet">
                Do you have any pets currently?
              </label>
              <br />

              <input type="radio" name="previousPet" id="petyes" value="yes" />
              <label htmlFor="petyes">Yes</label>

              <input type="radio" name="previousPet" id="petno" value="yes" />
              <label htmlFor="petno">No</label>
              <br />
              <br />

              <label htmlFor="typeOfResidence">Type Of Residence:</label>
              <input list="TypeOfResidence" name="TypeOfResidence" />
              <datalist id="TypeOfResidence">
                <option value="House" />
                <option value="Apartment" />
              </datalist>
              <br />
              <br />
            </div>
          </fieldset>
          <div className="adoptform-btn-div">
            <button className="adoptform-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptForm;
