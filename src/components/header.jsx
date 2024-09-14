import '../index.css';

const Header = () => {
  return (
    <header className="relative text-white p-4 md:p-6 shadow-md">
      <div className="absolute inset-0 bg-[url('src/assets/bg.jpg')] bg-cover"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <img src="src/assets/logo.jfif" alt="logo" className='w-[130px] h-auto mr-2.5 rounded-full'/>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-0">
          Planeación Estratégica
        </h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li><a href="#Introduccion" className="hover:underline">Introducción</a></li>
            <li><a href="#Diagonostico" className="hover:underline">Diágnostico</a></li>
            <li><a href="#Identidad" className="hover:underline">Identidad</a></li>
            <li><a href="#Objetivos" className="hover:underline">Objetivos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
