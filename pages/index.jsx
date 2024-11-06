// pages/index.js
import ModelViewer from "../components/ModelViewer"; // Import the ModelViewer component

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>Bozi Tamuna</h1>
      <div style={{ height: "80vh" }}>
        {/* Render the 3D model viewer */}
        <ModelViewer style={{ marginTop: "-150px" }} />
      </div>
    </div>
  );
}
