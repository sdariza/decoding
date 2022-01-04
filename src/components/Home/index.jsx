import { useState } from "react";
import InputCode from "../InputCode";
import ValidateClick from "../ValidateClick";
const Home =()=>{
    const [loading, setLoading] = useState(false);
    const [codes, setCodes] = useState(null);

    return (
      <div className="App">
        <h1>Bienvenido</h1>
        <h2>Ingresa el comando de solicitud de número del equipo
        </h2>
  
        <InputCode
          length={3}
          label="Code Label"
          loading={loading}
          onComplete={(code) => {
            setCodes(code);
            setLoading(true);
            setTimeout(() => setLoading(false), 200);
          }}
        />
        <br />
        <ValidateClick code={codes} />
      </div>
    );
}

export default Home;