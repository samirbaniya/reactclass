import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <ul className="txtDecoration">
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="txtDecoration listStyle flex ytfb">
          <a href="https://www.youtube.com/shorts/wS82kKLs6mE">
            <img className="yt-link" src="yt.png" alt="youtubelink" />
          </a>
          <a href="https://www.facebook.com">
            <img className="fb-link" src="fb.png" alt="fblink" />
          </a>
        </ul>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1365.4960314455627!2d85.52404511524249!3d27.62930372610191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1723132204167!5m2!1sen!2snp"
          width="200"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
