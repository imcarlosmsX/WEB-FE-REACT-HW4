import Header from "./components/header";
import Introduction from "./components/introduction";
import Diagnosis from "./components/dofa";
import Identity from "./components/identify";
import Objectives from "./components/objectives";
import Footer from "./components/footer";
import './index.css';
import React from "react";

const data = [
  {
    id: 1,
    type: "DEBILIDADES",
    items: [
      { id: 1, description: "Alta dependencia de proveedores internacionales", additionalInfo: "Esta debilidad puede afectar la estabilidad de nuestra cadena de suministro, aumentando el riesgo de retrasos y costos inesperados. La dependencia de proveedores externos puede limitar nuestra capacidad para negociar precios y adaptarnos rápidamente a cambios en el mercado." },
      { id: 2, description: "Costos de envío elevados para algunas regiones", additionalInfo: "Los costos altos de envío pueden limitar nuestra capacidad para competir en ciertos mercados, afectando la rentabilidad y la satisfacción del cliente. Esto puede ser especialmente problemático para clientes en áreas geográficas menos accesibles o más distantes." },
      { id: 3, description: "Falta de reconocimiento de marca a nivel nacional", additionalInfo: "El bajo reconocimiento de marca puede dificultar la adquisición de nuevos clientes y la expansión en nuevos mercados. Es crucial desarrollar estrategias de marketing y branding para mejorar nuestra visibilidad y reputación en el mercado." },
    ],
  },
  {
    id: 2,
    type: "FORTALEZAS",
    items: [
      { id: 1, description: "Amplio conocimiento del mercado gamer", additionalInfo: "Nuestro profundo entendimiento del mercado gamer nos permite ofrecer productos y servicios que se alinean perfectamente con las necesidades y expectativas de nuestros clientes. Este conocimiento también facilita la adaptación a las tendencias emergentes y la anticipación de demandas futuras." },
      { id: 2, description: "Capacidad para ensamblar equipos personalizados", additionalInfo: "La habilidad para ensamblar equipos a medida nos diferencia de los competidores y atrae a clientes que buscan soluciones personalizadas. Esto también nos permite ofrecer un servicio más completo y adaptado a las necesidades individuales de cada cliente." },
      { id: 3, description: "Excelente servicio postventa y atención al cliente", additionalInfo: "Un servicio postventa de alta calidad y una atención al cliente excepcional contribuyen a la fidelización y satisfacción del cliente. Esto no solo mejora la reputación de nuestra marca, sino que también fomenta recomendaciones y repeticiones de compra." },
    ],
  },
  {
    id: 3,
    type: "OPORTUNIDADES",
    items: [
      { id: 1, description: "Crecimiento del mercado de videojuegos en la región", additionalInfo: "El aumento en la popularidad de los videojuegos presenta una oportunidad significativa para expandir nuestra base de clientes. Aprovechar el crecimiento del mercado nos permitirá introducir nuevos productos y servicios que atraigan a una audiencia más amplia." },
      { id: 2, description: "Incremento de la demanda por personalización en equipos", additionalInfo: "Cada vez más consumidores buscan personalizar sus equipos para satisfacer sus necesidades específicas. Ofrecer opciones de personalización puede diferenciarnos de la competencia y atraer a clientes que valoran equipos adaptados a sus preferencias." },
      { id: 3, description: "Alianzas estratégicas con marcas tecnológicas reconocidas", additionalInfo: "Formar alianzas con marcas tecnológicas líderes puede proporcionar acceso a nuevos recursos y tecnologías, así como mejorar nuestra credibilidad en el mercado. Estas alianzas también pueden abrir nuevas oportunidades para marketing y ventas." },
    ],
  },
  {
    id: 4,
    type: "AMENAZAS",
    items: [
      { id: 1, description: "Competencia de grandes tiendas en línea", additionalInfo: "La competencia de grandes minoristas en línea con precios agresivos y una amplia gama de productos puede representar una amenaza significativa. Para competir efectivamente, debemos centrarnos en nuestras fortalezas y diferenciar nuestros servicios y productos." },
      { id: 2, description: "Fluctuaciones en los precios de componentes importados", additionalInfo: "Las variaciones en los precios de los componentes importados pueden afectar los costos y márgenes de ganancia. Es crucial gestionar eficientemente el inventario y buscar alternativas para mitigar el impacto de estas fluctuaciones en nuestro negocio." },
      { id: 3, description: "Cambios tecnológicos que exigen constante actualización", additionalInfo: "El ritmo acelerado de los avances tecnológicos requiere una actualización continua de nuestros productos y servicios. Mantenerse al día con las últimas tendencias y tecnologías es esencial para permanecer competitivo y relevante en el mercado." },
    ],
  },
];


const objectives = [
  { 
    id: 1, 
    goal: "Aumentar las ventas en un 30% en los próximos 6 meses.", 
    target: 500000, 
    progress: 100000, 
    compliance: 20 
  },
  { 
    id: 2, 
    goal: "Expandir la línea de productos con 5 nuevas marcas.", 
    target: 5, 
    progress: 1, 
    compliance: 20 
  },
  { 
    id: 3, 
    goal: "Mejorar la atención al cliente con tiempos de respuesta menores a 1 hora.", 
    target: 100, 
    progress: 50, 
    compliance: 50 
  },
  { 
    id: 4, 
    goal: "Incrementar la participación en eventos tecnológicos.", 
    target: 10, 
    progress: 5, 
    compliance: 50 
  },
  { 
    id: 5, 
    goal: "Lograr un índice de satisfacción del cliente del 95%.", 
    target: 95, 
    progress: 90, 
    compliance: 90 
  }
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
