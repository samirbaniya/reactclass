import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div>
        Links
        <ul>
          <NavLink to={"/home"}>
            <li>Home</li>
          </NavLink>

          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>

          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <div>
        {/* <div className="center-content">Other Links</div> */}
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/samir.baniya.104"
              target=" _blank"
            >
              <img
                className="fb-img"
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                alt="fb-link"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCOavj2A6g98P4t_ImSCI_5Q"
              target=" _blank"
            >
              <img
                className="yt-img"
                src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                alt="yt-link"
              />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/samir_baniya_/" target=" _blank">
              <img
                className="insta-img"
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                alt="insta-link"
              />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.0533524588845!2d85.52149267163199!3d27.620027576831855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0900340a5b3d%3A0xd2aed6f5f3ddde48!2sAdoptBuddy!5e1!3m2!1sen!2snp!4v1729166834498!5m2!1sen!2snp"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
