import Header from "./components/header";
import Introduction from "./components/introduction";
import Diagnosis from "./components/dofa";
import Identity from "./components/identify";
import Objectives from "./components/objectives";
import Footer from "./components/footer";
import './index.css';

const data = [
  { id: 1, type: "Debilidades", items: [{ id: 1, description: "Debilidad 1" }, { id: 2, description: "Debilidad 2" }, { id: 3, description: "Debilidad 3" }] },
  { id: 2, type: "Oportunidades", items: [{ id: 1, description: "Oportunidad 1" }, { id: 2, description: "Oportunidad 2" }, { id: 3, description: "Oportunidad 3" }] },
  { id: 3, type: "Fortalezas", items: [{ id: 1, description: "Fortaleza 1" }, { id: 2, description: "Fortaleza 2" }, { id: 3, description: "Fortaleza 3" }] },
  { id: 4, type: "Amenazas", items: [{ id: 1, description: "Amenaza 1" }, { id: 2, description: "Amenaza 2" }, { id: 3, description: "Amenaza 3" }] },
];


const objectives = [
  { id: 1, goal: "Objetivo 1", target: 500, progress: 250, compliance: 50 },
  { id: 2, goal: "Objetivo 2", target: 1000000, progress: 50000, compliance: 5 },
  { id: 3, goal: "Objetivo 3", target: 1000, progress: 900, compliance: 90 },
  { id: 4, goal: "Objetivo 4", target: 150000, progress: 150000, compliance: 100 },
];

function App() {
  return (
    <div>
      <Header/>
      <Introduction />
      <Diagnosis data={data} />
      <Identity />
      <Objectives objectives={objectives} />
      <Footer />
    </div>
  );
}

export default App;
