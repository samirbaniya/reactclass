import pets from "../../assets/petData";
import userPref from "../../assets/userPref";
import { NavLink } from "react-router-dom";

function Recomender(props) {
  //   const showData = 8;
  const calculateMatch = (pet, userPref) => {
    let p1 = 0;
    let u1 = 1;
    let p2 = 0;
    let u2 = 2;
    let p3 = 0;
    let u3 = 1;
    if (pet.age === userPref.prefage) {
      p1 = 1;
    }
    if (pet.species === userPref.prefspecies) {
      p2 = 2;
    }
    if (pet.color === userPref.prefcolor) {
      p3 = 1;
    }
    {
      console.log(calculateCosineSimilarity(p1, u1, p2, u2, p3, u3));
    }
    console.log(pet.age);
    console.log(userPref.prefage);
    console.log(pet.species);
    console.log(userPref.prefspecies);
    console.log(pet.color);
    console.log(userPref.prefcolor);
    return calculateCosineSimilarity(p1, u1, p2, u2, p3, u3);
  };
  const calculateCosineSimilarity = (p1, u1, p2, u2, p3, u3) => {
    let cosineSimilarity =
      (p1 * u1 + p2 * u2 + p3 * u3) /
      (Math.sqrt(p1 ** 2 + p2 ** 2 + p3 ** 2) *
        Math.sqrt(u1 ** 2 + u2 ** 2 + u3 ** 2));

    if (isNaN(cosineSimilarity)) {
      cosineSimilarity = 0;
    }
    return cosineSimilarity;
  };

  const petsWithSimilarity = pets.map((pet) => ({
    pet,
    similarity: calculateMatch(pet, userPref[0]),
  }));

  // Sort pets by similarity score in ascending order
  petsWithSimilarity.sort((a, b) => b.similarity - a.similarity);

  return (
    <>
      <h2 className="explore-heading">Recommended Pets</h2>
      <div className="pet-card">
        {petsWithSimilarity
          // eslint-disable-next-line react/prop-types
          .slice(0, props.showData)
          .map(({ pet, similarity }) => (
            <div key={pet.id}>
              <NavLink to={`/animals/${pet.id}`}>
                <div className="card">
                  <div className="pet-div">
                    <img className="pet-img" src={pet.image} alt={pet.image} />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      color: "#7387cd",
                      fontSize: "2rem",
                    }}
                  >
                    {pet.name}
                  </div>
                  <div className="pet-description">
                    <div>Age: {pet.age}</div>
                    <div>Species: {pet.species}</div>
                    <div>Color: {pet.color}</div>
                    <div>similarity={similarity.toFixed(4)}</div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}

export default Recomender;
