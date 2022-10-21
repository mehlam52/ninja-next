import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          deleniti exercitationem blanditiis ullam. Incidunt, aut praesentium
          consectetur officiis, voluptatum sequi voluptates ratione tempora odit
          ut aspernatur aperiam, fuga numquam velit!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          deleniti exercitationem blanditiis ullam. Incidunt, aut praesentium
          consectetur officiis, voluptatum sequi voluptates ratione tempora odit
          ut aspernatur aperiam, fuga numquam velit!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
