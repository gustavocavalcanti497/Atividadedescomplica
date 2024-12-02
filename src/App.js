import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f0f8ff", padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", color: "#007acc" }}>
        Bem-vindo ao Gerenciador de Tarefas!
      </h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Aqui você pode listar, adicionar e gerenciar suas tarefas com facilidade.
      </p>
      <ListarTarefa />
    </div>
  );
}

export default App;

