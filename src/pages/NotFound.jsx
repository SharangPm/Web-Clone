import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-5">
      <div className="text-center relative">
        <h1 className="text-9xl font-extrabold tracking-widest relative z-10">
          404
        </h1>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ rotate: 15, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="text-pink-500 bg-gray-900 px-3 py-1 text-lg font-semibold rounded-lg shadow-lg">
            Page Not Found
          </span>
        </motion.div>
        <p className="text-xl font-light mt-4">
          The page you are looking for doesn't exist.
        </p>
        <NavLink
          to="/"
          className="mt-8 inline-block px-8 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
        >
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
