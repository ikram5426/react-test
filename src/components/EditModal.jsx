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
          className='fixed  flex top-0 left-0 w-[100vw] h-[100vh] bg-[#000]/80 z-50 items-center justify-center '
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0 }}
        >
          <div className='sm:w-[26.6vw] w-[75vw] h-auto pb-12 sm:rounded-[1.01vw] rounded-[4vw] bg-[#FBFCFC]'>
            <div>
              <img src={mask} alt='modal header' />
            </div>
            <h2 className='relative sm:-top-[4vw] bottom-[15vw] text-white font-bold font-lato text-[7vw] sm:text-[2.02vw] flex sm:items-center justify-center '>
              Edit Customer
            </h2>
            <button className='relative sm:-top-[9.5vw] bottom-[29vw] sm:left-[24.5vw] left-[67vw] font-bold text-white text-[6vw] sm:text-[1.25vw]'>
              <AiOutlineClose
                onClick={() => setEditModal(false)}
                onKeyDown={() => setEditModal(false)}
                tabIndex={0}
                role='button'
              />
            </button>
            <form
              action=''
              className='flex flex-col items-center sm:-mt-[2vw] -mt-[10vw] sm:gap-[2vw] gap-[4vw]'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                className='sm:w-[22.9vw] sm:h-[5.4vh] h-[5vh] w-[85%] rounded-[3vw] outline-none bg-[#FFFFFF] border-solid border-[2px] sm:border-[1px] border-[#DCDBDD] text-[#84818A] sm:rounded-[.52vw] placeholder:text-[#84818A] sm:text-[.85vw] text-[4vw] font-lato sm:font-medium font-[400] sm:pl-[.75vw] pl-[3vw]'
                placeholder='Jordan Joseph'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type='text'
                className='sm:w-[22.9vw] sm:h-[5.4vh] h-[5vh] w-[85%] rounded-[3vw] outline-none bg-[#FFFFFF] border-solid border-[2px] sm:border-[1px] border-[#DCDBDD] text-[#84818A] sm:rounded-[.52vw] placeholder:text-[#84818A] sm:text-[.85vw] text-[4vw] font-lato sm:font-medium font-[400] sm:pl-[.75vw] pl-[3vw]'
                placeholder='randomemail@gmail.com'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className='sm:text-[1vw] text-[4vw] flex  font-lato text-[#57BC90] underline sm:w-[100%] pl-[2vw]   w-[85%] '>
                Upload Photo
              </button>
              <button
                type='submit'
                className='sm:w-[22.9vw] w-[85%] mt-[1.5vw] h-[5.4vh]  bg-gradient-to-r from-[#57BC90] to-[#004B40] rounded-[3vw] sm:rounded-[.52vw] font-lato font-bold text-white sm:text-[1vw] text-[4vw]'
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
