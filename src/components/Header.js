// src/components/Header.js
function Header({ title }) {
  return (
    <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold shadow-md">
      {title}
    </header>
  );
}

export default Header;
