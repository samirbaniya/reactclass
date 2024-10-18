import "./Home.css";
import pets from "../../assets/petData";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search/Search";
import Recomender from "../Recommend/Recomender";

function Home() {
  const tpets = pets.slice(0, 4).map((pet) => (
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
      <div className="heading" id="heading">
        <h1>Find Pet Buddy</h1>
        <p>
          Browse through a variety of animals and find the perfect pet for your
          family and adopt a loving pet.
        </p>
        <Search />
      </div>

      <div className="categories-container">
        <h2 className="categories-heading">Categories</h2>
        <div className="categories">
          <NavLink to={`/categories/cat`}>
            <div className="categories-card">
              <img
                className="categories-img"
                src="/images/cat1.jpg"
                alt="cat"
              />
              <h3 className="float-text">Cat</h3>
            </div>
          </NavLink>
          <NavLink to={`/categories/dog`}>
            <div className="categories-card">
              <img
                className="categories-img"
                src="/images/dog1.jpg"
                alt="dog"
              />
              <h3 className="float-text">Dog</h3>
            </div>
          </NavLink>
          <NavLink to={`/categories/other`}>
            <div className="categories-card">
              <img
                className="categories-img"
                src="/images/cow1.jpg"
                alt="dog"
              />
              <h3 className="float-text">Other Animals</h3>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="home-description">
        <section className="home-paragraph">
          <h2>Adopt Buddy</h2>
          <p className="home-adoptBuddy">
            At Adopt Buddy, we believe every pet deserves a loving home, and
            every person deserves a loyal companion. Our mission is to simplify
            the pet adoption process by connecting animals with caring adopters
            through our platform. We showcase a wide variety of pets, ensuring
            potential adopters can find the perfect match based on their
            preferences. We are passionate about animal welfare and committed to
            helping shelters animals reach a wider audience. By offering a
            seamless adoption experience, we strive to improve the lives of
            animals while creating meaningful connections with their new
            families. Together, we can create a world where every pet finds a
            place to call home.
          </p>
        </section>
      </div>
      <div>
        {/* <h2 className="explore-heading">Recommended for you</h2> */}
        <Recomender showData={4} />
        <div className="explore-link">
          <NavLink to={"/recommend"}>
            <button className="explore-btn">More recomended Animals</button>
          </NavLink>
        </div>

        <div className="home-description">
          <section className="home-paragraph">
            <h2>Why Adopt?</h2>
            <p className="home-adoptBuddy">
              Adopting a pet is more than just bringing a new friend into your
              home; it`s giving a deserving animal a second chance at a loving
              and fulfilling life. When you adopt, you rescue a pet from an
              uncertain future, help reduce the number of homeless animals, and
              experience the joy of knowing you`ve made a positive impact. Each
              adopted pet brings unique love and companionship, creating a bond
              that enriches both your life and theirs. Choose adoption today and
              make a difference—one paw at a time.
            </p>
          </section>
        </div>
        <h2 className="explore-heading">Explore Animals</h2>
        <div className="pet-card">{tpets}</div>
        <div className="explore-link">
          <NavLink to={"/explore"}>
            <button className="explore-btn">Explore more Animals</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
