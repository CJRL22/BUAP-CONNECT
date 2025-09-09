import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/")
      .then(res => setMensaje(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>BUAP Connect</h1>
      <p>Backend dice: {mensaje}</p>
    </div>
  );
}

export default App;