import "./App.css";
import Card from "./components/card.jsx"

function App() {
  return (
    <>
      <h1 className="logo">Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
      <Card img="/portainer.jpg" title="Portainer" link="https://192.168.50.26:32777"/>
      <Card img="/mealie.png" title="Mealie" link="https://192.168.50.26:32777"/>
      <Card img="/pihole.jpg" title="Pi-hole" link="https://192.168.50.26:32777"/>
      </div>
    </>
  );
}

export default App;
