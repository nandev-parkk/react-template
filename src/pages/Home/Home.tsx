import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section>
      Home
      <Link to="/sub">sub</Link>
    </section>
  );
}
