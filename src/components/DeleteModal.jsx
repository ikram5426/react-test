import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {BsTrash3} from "react-icons/bs"
const DeleteModal = ({ deleteModal, setDeleteModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // const handleSubmit = () => {
  //   // event.preventDefault()
  //   console.log(name, email);
  // };
  return (
    <AnimatePresence>
      {deleteModal && (
        <motion.div
          className='fixed  flex top-0 left-0 w-[100vw] h-[100vh] bg-[#000]/80 z-50 items-center justify-center '
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0 }}
        >
          <div className='sm:w-[26.6vw] w-[80vw] h-auto pb-12 sm:rounded-[1.01vw] rounded-[4vw] bg-[#FBFCFC] flex items-center flex-col'>
            <button className='pt-[3vw] sm:pt-[1vw] pl-[66vw] sm:pl-[23vw] font-bold text-black text-[6vw] sm:text-[2vw]'>
              <AiOutlineClose
                onClick={() => setDeleteModal(false)}
                onKeyDown={() => setDeleteModal(false)}
                tabIndex={0}
                role='button'
              />
            </button>

            <BsTrash3 className='text-red-600 text-[20vw] sm:text-[4.25vw] font-bold mt-[4vw] sm:mt-[2vw] ' />
            <h2 className='text-[6vw] sm:text-[1.5vw] text-black font-lato font-bold my-[1vw]'>
              Are you sure?
            </h2>
            <p className='w-[85%] font-medium text-[3.5vw] sm:text-[1.2vw] flex items-center justify-center flex-col'>
              Do you really want to delete this customer?
              <span>This process can not be undone.</span>
            </p>

            <div className='sm:w-[85%] w-[75%] text-[3vw] sm:text-[0.9vw] uppercase font-lato text-white flex justify-between sm:mt-[3vw] mt-[5vw] mb-[4vw]'>
              <button
                className='bg-[rgb(165,165,175)] w-[20vw] sm:w-[10.5vw] sm:h-[2.75vw] h-[7vw] sm:rounded-[.5vw] rounded-[2.5vw] text-[3vw] font-bold sm:text-[0.9vw] uppercase font-lato text-white'
                onClick={() => setDeleteModal(false)}
                onKeyDown={() => setDeleteModal(false)}
                tabIndex={0}
                role='button'
              >
                Cancel
              </button>
              <button className='bg-[#d80000] w-[20vw] sm:w-[10.5vw] sm:h-[2.75vw] h-[7vw] sm:rounded-[.5vw] rounded-[2.5vw] text-[3vw] font-bold sm:text-[0.9vw] uppercase font-lato text-white'>
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

DeleteModal.propTypes = {
  deleteModal: PropTypes.any,
  setDeleteModal: PropTypes.any,
};

export default DeleteModal;
