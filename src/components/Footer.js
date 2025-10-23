// src/components/Footer.js
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mt-auto">
      © {year} My React Mini Project | Task 3
    </footer>
  );
}

export default Footer;
