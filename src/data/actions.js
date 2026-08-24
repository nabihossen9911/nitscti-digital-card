import { shareCard } from "../utils/share";
import { downloadVCard } from "../utils/vcard";
import profile from "../data/profile";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FiShare2, FiCopy } from "react-icons/fi";

const actions = [
  {
    label: "Call",
    icon: FaPhoneAlt,
    href: `tel:${profile.phone}`,
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/${profile.whatsapp}`,
  },
  {
    label: "Website",
    icon: FaGlobe,
    href: profile.website,
  },
  {
    label: "Email",
    icon: FaEnvelope,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: profile.facebook,
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: profile.youtube,
  },
  {
    label: "Location",
    icon: FaMapMarkerAlt,
    href: profile.maps,
  },
  {
    label: "Save Contact",
    action: downloadVCard,
  },
  {
    label: "Share Card",
    icon: FiShare2,
    action: shareCard,
  },

  // v1.1
  {
    label: "Copy Phone",
    icon: FiCopy,
    copy: profile.phone,
  },
  {
    label: "Copy Email",
    icon: FiCopy,
    copy: profile.email,
  },
  {
    label: "Copy Website",
    icon: FiCopy,
    copy: profile.website,
  },
];

export default actions;