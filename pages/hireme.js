import Layout from "../components/Layout";
import Link from "next/link";

const HireMe = () => {
  return (
    <>
      <h1>Hire Me</h1>
      <p>
        You can hire me at{" "}
        <a href="mailto:arifayanidowu@gmail.com">arifayanidowu@gmail.com</a>
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default HireMe;
