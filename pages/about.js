import Layout from "../components/Layout";
// import axios from "axios";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = ({ data, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <>
      <h2>{data.name}</h2>
      <img
        src={data.avatar_url}
        alt={data.name}
        width="200"
        height="200"
        style={{ borderRadius: "50%" }}
      />
    </>
  );
};

About.getInitialProps = async ctx => {
  const response = await fetch("https://api.github.com/users/stizzle123");
  const statusCode = response.status > 200 ? response.status : false;
  const data = await response.json();
  return { data, statusCode };
};

export default About;
