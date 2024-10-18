// import pets from "../../assets/petData"; // Import pets data
// import userPref from "../../assets/userPref"; // Import user preferences
// import "./Recommended.css";
// // Function to calculate similarity score
// const calculateMatch = (pet, userPref) => {
//   let score = 0;

//   if (pet.age === userPref.prefage) score++; // Match on age
//   if (pet.species === userPref.prefspecies) score += 3; // Match on species
//   if (pet.color === userPref.prefcolor) score++; // Match on color

//   return score; // The higher the score, the better the match
// };

// const Recommended = () => {
//   // Filter pets based on user preferences and calculate similarity score
//   const matchedPets = pets
//     .map((pet) => ({
//       ...pet,
//       matchScore: calculateMatch(pet, userPref[0]), // Calculate match score for each pet
//     }))
//     .filter((pet) => pet.matchScore > 0) // Keep only pets with a match score greater than 0
//     .sort((a, b) => b.matchScore - a.matchScore); // Sort by match score

//   return (
//     <div>
//       <h2>Recommended Pets</h2>
//       <div className="pet-grid">
//         {matchedPets.length > 0 ? (
//           matchedPets.map((pet) => (
//             <div key={pet.id} className="pet-card">
//               <img src={pet.image} alt={pet.name} className="pet-image" />
//               <h3>{pet.name}</h3>
//               <p>{pet.description}</p>
//               <p>
//                 <strong>Age:</strong> {pet.age}
//               </p>
//               <p>
//                 <strong>Species:</strong> {pet.species}
//               </p>
//               <p>
//                 <strong>Color:</strong> {pet.color}
//               </p>
//               <p>
//                 <strong>Match Score:</strong> {pet.matchScore}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No pets match your preferences.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Recommended;

function Recommended() {
  return <div>Recommended</div>;
}

export default Recommended;
