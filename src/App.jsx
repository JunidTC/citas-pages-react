import { useState } from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

    // Función para eliminar un paciente por ID
    const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter((p) => p.id !== id); // Filtrar el paciente a eliminar
      setPacientes(pacientesActualizados); // Actualizar el estado
    };
  
    return (
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente} // Pasar la función de eliminación
          />
        </div>
      </div>
    );
}

export default App

