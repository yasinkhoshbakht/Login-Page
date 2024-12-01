import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="font-bold text-orange-400">yasin_wolf</span>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yasinkhoshbakht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yasin_wolf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
