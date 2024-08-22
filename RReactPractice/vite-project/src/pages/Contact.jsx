function Contact() {
  return (
    <>
      <div className="contact">
        <div className="flex form-Img">
          <div>
            <img className="cimg" src="contact-img.png" alt="beardimg" />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name.."
            />
            <br />
            <br />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address.."
            />
            <br />
            <br />

            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email.."
            />
            <br />
            <br />

            <label htmlFor="">Message:</label>
            <br />
            <textarea
              className="contact-msg"
              name="message"
              id="message"
              cols="30"
              rows="8"
              placeholder="Enter your message.."
            ></textarea>
            <br />
            <br />
            {/* <button onClick="validation()">Submit</button> */}
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
