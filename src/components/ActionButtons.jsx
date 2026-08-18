import profile from "../data/profile";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

import {
  FiGlobe,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function ActionButtons() {
  return (
    <section className="actions">

      <a
        href={`tel:${profile.phone}`}
        className="action-btn"
      >
        <FaPhoneAlt />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <a
        href={profile.website}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn"
      >
        <FiGlobe />
        <span>Website</span>
      </a>

      <a
        href={`mailto:${profile.email}`}
        className="action-btn"
      >
        <FiMail />
        <span>Email</span>
      </a>

      <a
        href={profile.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn"
      >
        <FaFacebookF />
        <span>Facebook</span>
      </a>

      <a
        href={profile.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn"
      >
        <FiMapPin />
        <span>Location</span>
      </a>

    </section>
  );
}

export default ActionButtons;