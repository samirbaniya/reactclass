import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <section>
        <h2 className="text-center contact-heading">Send us a Message</h2>
        <div
          // encType="multipart/form-data"
          // method="post"
          // action="#"
          className="form-horizontal"
        >
          <label htmlFor="">Name</label>
          <input
            className="form-control"
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name.."
          />

          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email.."
          />

          <label htmlFor="">Message</label>
          <textarea
            className="form-control"
            required
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            placeholder="Enter your message.."
          ></textarea>

          <input
            type="submit"
            name="submit"
            className="btn text-center btn-primary"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
