import { useParams } from "react-router-dom";

export default function Page() {
  const { slug } = useParams();
  return (
    <div className="page generic-page">
      <div className="container">
        <h2>{slug ? slug.replace("-", " ").toUpperCase() : "Page"}</h2>
        <p>
          This is a placeholder page for <strong>{slug}</strong>. Replace with
          actual page content.
        </p>
      </div>
    </div>
  );
}
