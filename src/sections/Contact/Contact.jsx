import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="avatar" className={styles.container}>
      <h1>Wanna Work Together?</h1>
      <a
        className="py-3 text-base"
        href="mailto:seoungminics@gmail.com"
        target="_blank"
        referrerpolicy="no-referrer-when-downgrade"
      >
        <button className="hover">Contact Me!</button>
      </a>
    </section>
  );
}

export default Contact;
