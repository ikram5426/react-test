import mask from "../assets/mask.svg";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EditModal = ({ editModal, setEditModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // event.preventDefault()
    console.log(name, email);
  };
  console.log(email, name);
  return (
    <AnimatePresence>
      {editModal && (
        <motion.div
          className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-[#000]/80 z-50 items-center justify-center '
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0 }}
        >
          <div className='w-[26.6vw] h-auto pb-12 rounded-[1.01vw] bg-[#FBFCFC]'>
            <div>
              <img src={mask} alt='modal header' />
            </div>
            <h2 className='relative -top-[4vw] text-white font-bold font-lato text-[2.02vw] flex items-center justify-center'>
              Edit Customer
            </h2>
            <button className='relative -top-[9.5vw] left-[24.5vw] font-bold text-white text-[1.25vw]'>
              <AiOutlineClose
                onClick={() => setEditModal(false)}
                onKeyDown={() => setEditModal(false)}
                tabIndex={0}
                role='button'
              />
            </button>
            <form
              action=''
              className=' flex flex-col items-center -mt-[2vw] gap-[2vw]'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                className='w-[22.9vw] h-[5.4vh] outline-none bg-[#FFFFFF] border-solid border-[1px] border-[#DCDBDD] text-[#84818A] rounded-[.52vw] placeholder:text-[#84818A] text-[.85vw] font-lato font-medium  pl-[.75vw]'
                placeholder='Jordan Joseph'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type='text'
                className='w-[22.9vw] h-[5.4vh] outline-none bg-[#FFFFFF] border-solid border-[1px] border-[#DCDBDD] text-[#84818A] rounded-[.52vw] placeholder:text-[#84818A] text-[.85vw] font-lato font-medium pl-[.75vw]'
                placeholder='randomemail@gmail.com'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className='text-[1vw] flex  font-lato text-[#57BC90] underline w-[100%] pl-[2vw] '>
                Upload Photo
              </button>
              <button
                type='submit'
                className='w-[22.9vw] mt-[1.5vw] h-[5.4vh]  bg-gradient-to-r from-[#57BC90] to-[#004B40] rounded-[.52vw] font-lato  text-white text-[1vw]'
              >
                EDIT CUSTOMER
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

EditModal.propTypes = {
  editModal: PropTypes.any,
  setEditModal: PropTypes.any,
};

export default EditModal;
