import React from "react";
import "./SocialLinks.css";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaMedium,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

function SocialLinks({ smallIcons }) {
  return (
    <div className={`socialLinks ${smallIcons ? "small" : ""}`}>
      <a href="https://t.me/ADA_DEMON">
        <FaTelegramPlane />
      </a>
      <a href="https://twitter.com/ADADEMON_?t=gPBFY7DCnGGBy2iWngw8dg&s=09">
        <FaTwitter />
      </a>
      <a href="https://instagram.com/ada.dem0n?utm_medium=copy_link">
        <FaInstagram />
      </a>
      <a href="https://www.reddit.com/user/Ada_demon/">
        <FaReddit />
      </a>
      <a href="https://discord.gg/dmVcqaa86S">
        <FaDiscord />
      </a>
      <a href="https://medium.com/@ADADEMON">
        <FaMedium />
      </a>
      <a href="https://github.com/ADADEMON">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialLinks;
