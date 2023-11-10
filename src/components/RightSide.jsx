import { FaPlus } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import CustomerCard from "./CustomerCard";


const RightSide = () => {
  
  return (
    <div className='flex flex-col bg-[#F3F3F3] ml-[20.85vw] min-h-[100vh]'>
      <div className='h-[13.88vh] flex items-center pl-[5vw] bg-white w-[79.15vw] shadow-lg'>
        <h1 className='uppercase  text-[2.02vw] text-black font-lato'>
          Customers
        </h1>
      </div>
      <button
        className='w-[17.91vw] h-[6.86vh] mt-[4vh] bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white uppercase text-[1.2vw] flex items-center rounded-[10px] gap-[1vw] pl-[1.25vw]  ml-[5vw]'
      >
        <span>
          <FaPlus />
        </span>
        <span>Add New Customer</span>
      </button>
      <div className='bg-[#57BC90]/30 rounded-[10px]  h-[5.5vh] mx-[5vw] mt-[7vh] flex items-center text-[#015249] font-lato text-[1.2vw] font-bold'>
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
      <div className='flex flex-col mt-[2vh] mx-[5vw] gap-y-10  '>
        <CustomerCard />
      </div>
    </div>
  );
};

export default RightSide;
