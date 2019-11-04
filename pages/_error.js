import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <>
    {statusCode ? (
      <p>Could not load your user data: status code: {statusCode}</p>
    ) : (
      <p>Couldn't get that page, sorry.</p>
    )}
  </>
);
