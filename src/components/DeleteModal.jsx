import mask from "../assets/mask.svg";
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
  console.log(email, name);
  return (
    <AnimatePresence>
      {deleteModal && (
        <motion.div
          className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-[#000]/80 z-50 items-center justify-center '
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0 }}
        >
          <div className='w-[26.6vw] h-auto rounded-[1.01vw] bg-[#FBFCFC] flex items-center flex-col'>
            <button className=' pt-[1vw] pl-[23vw] font-bold text-black text-[2vw]'>
              <AiOutlineClose
                onClick={() => setDeleteModal(false)}
                onKeyDown={() => setDeleteModal(false)}
                tabIndex={0}
                role='button'
              />
            </button>

            <BsTrash3 className='text-red-600 text-[4.25vw] font-bold mt-[2vw] ' />
            <h2 className='text-[1.5vw] text-black font-lato font-bold my-[1vw]'>
              Are you sure?
            </h2>
            <p className='w-[85%] font-medium text-[1.2vw] flex items-center justify-center flex-col'>
              Do you really want to delete this customer?
              <span>This process can not be undone.</span>
            </p>

            <div className='w-[85%] text-[0.9vw] uppercase font-lato text-white flex justify-between mt-[3vw] mb-[4vw]'>
              <button
                className='bg-[#A5A5AF] w-[10.5vw] h-[2.75vw] rounded-[.5vw]  text-[0.9vw] uppercase font-lato text-white'
                onClick={() => setDeleteModal(false)}
                onKeyDown={() => setDeleteModal(false)}
                tabIndex={0}
                role='button'
              >
                Cancel
              </button>
              <button className='bg-[#D80000] w-[10.5vw] h-[2.75vw] rounded-[.5vw]  text-[0.9vw] uppercase font-lato text-white'>
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
