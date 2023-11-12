import { FaPlus } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import CustomerCard from "./CustomerCard";
import AddModal from "./AddModal";
import { useState } from "react";

const RightSide = () => {
  const [addModal,setAddModal] =useState(false)

  
  return (
    <div className='flex flex-col bg-[#F3F3F3] sm:ml-[20.85vw] w-[100vw] min-h-[100vh] sm:mt-0 mt-[56vw]'>
      <div className='sm:h-[13.88vh] h-[8vh] flex items-center justify-center sm:justify-normal sm:pl-[5vw] bg-white sm:w-[79.15vw] shadow-lg'>
        <h1 className='uppercase text-[5vw]  sm:text-[2.02vw] text-black font-lato'>
          Customers
        </h1>
      </div>
      <div className="flex justify-center sm:justify-normal">
        <button
        className='sm:w-[17.91vw] w-[30vw] sm:h-[6.86vh] h-[7vh] mt-[4vh] bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white uppercase text-[4vw] sm:text-[1.2vw] flex items-center rounded-[10px] sm:gap-[1vw] sm:pl-[1.25vw] sm:ml-[5vw]'
        onClick={() => setAddModal(true)}
      >
        <span>
          <FaPlus className=""/>
        </span>
        <span>Add New Customer</span>
        </button>
      </div>
      
      <AddModal addModal={addModal} setAddModal={setAddModal} />
      <div className='bg-[#57BC90]/30 hidden rounded-[10px]  h-[5.5vh] mx-[5vw] mt-[7vh] sm:flex items-center text-[#015249] font-lato text-[1.2vw] font-bold'>
        <div className='flex  w-[27%] justify-end items-center'>
          Customer ID <RiExpandUpDownFill className='cursor-pointer' />
        </div>
        <div className='flex  w-[20%] justify-end items-center'>
          Customer Name <RiExpandUpDownFill className='cursor-pointer' />
        </div>
        <div className='flex  w-[20%] justify-center items-center'>
          Email <RiExpandUpDownFill className='cursor-pointer' />
        </div>
      </div>

      {/* Cards  */}
      <div className='flex flex-col mt-[2vh] mx-auto sm:mx-[5vw] gap-y-10  '>
        <CustomerCard />
      </div>
    </div>
  );
};

export default RightSide;
