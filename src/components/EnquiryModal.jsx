import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

function EnquiryModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[9999]
              w-[95%]
              max-w-xl
              bg-white
              rounded-[30px]
              p-8
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-3xl text-gray-600"
            >
              <HiX />
            </button>

            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Enquire Now
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

              <select
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              >
                <option>Select Project</option>
                <option>Evershine Solara</option>
                <option>Evershine Waterfront</option>
                <option>Upcoming Projects</option>
              </select>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  font-semibold
                  py-4
                  rounded-xl
                  transition-all
                "
              >
                Submit Enquiry
              </button>

            </form>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EnquiryModal;