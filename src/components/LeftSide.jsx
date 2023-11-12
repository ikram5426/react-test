import logo from "../assets/logo.png";
import customerIcon from "../assets/customers.png";
const LeftSide = () => {
  return (
    <div className='sm:h-[100vh] z-50 overflow-hidden h-[27vh] w-[100vw] sm:rounded-tr-[20px]  sm:rounded-br-[20px]  sm:w-[20.85vw] bg-[#015249] fixed top-0 left-0 flex items-center flex-col shadow-lg'>
      <div className='w-full flex items-center mt-[4.75vh] justify-center'>
        <img src={logo} alt='logo' className=' sm:w-[12.7vw] h-[5.37vh]' />
      </div>
      <div className='flex   z-50 items-center sm:gap-10 gap-2  sm:ml-[2vw] sm:pl-6 pl-4 bg-[#043933] capitalize w-[45vw] sm:w-[15.4vw] h-[7vh] rounded-[4vw] sm:rounded-[10px] shadow-lg sm:mt-[10vh] mt-[5vh]'>
        <div>
          <img
            src={customerIcon}
            alt='customer icon'
            className='sm:w-[1.6vw] w-[8vw] h-[8vw] sm:h-[2.87vh]'
          />
        </div>
        <h3 className='text-white uppercase text-[4vw] sm:text-[1.25vw] font-lato font-bold'>
          CUSTOMERS
        </h3>
      </div>
    </div>
  );
};

export default LeftSide;
