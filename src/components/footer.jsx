
const Footer = () => {
  return (
    <footer className="relative bg-[url('/assets/bg.jpg')] bg-cover bg-bottom text-white p-6 shadow-md min-h-[120px] flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-between items-center w-full">
        <p>© 2024 Carlos Mendoza</p>
        <p>Master Race</p>
        <button>Contacto</button>
      </div>
    </footer>
  );
};

export default Footer;
