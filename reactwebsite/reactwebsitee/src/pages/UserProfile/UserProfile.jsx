import "./UserProfile.css";
function UserProfile() {
  return (
    <div className="user-profile-page">
      <div className="user-profile-heading">UserProfile</div>
      <section className="user-profile-page-in">
        <div className="photo-div">
          <div className="center-content" style={{ flexDirection: "column" }}>
            <div className="pic-and-username">
              <div className="user-pic-div">
                <img
                  className="user-pic"
                  src="/images/user.jpg"
                  alt="userPicture"
                />
              </div>
              <div style={{ textAlign: "center" }}>Samir</div>
            </div>
            <div className="edit-pic-btn-div">
              <button className="edit-pic-btn">Change Profile Picture</button>
            </div>
          </div>
        </div>
        <div className="user-description-div">
          <div className="user-description-line">Name: Samir Baniya</div>
          <hr />
          <div className="user-description-line">Phone no.: 9841756823</div>
          <hr />
          <div className="user-description-line">
            Email: samirbaniya500@gmail.com
          </div>
          <hr />
          <div className="user-description-line">Address: Banepa</div>
          <hr />
          <div className="edit-description-btn-div">
            <button className="edit-desc-btn">Edit </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
