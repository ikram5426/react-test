import logo from '../assets/logo.png'
import customerIcon from "../assets/customers.png"
const LeftSide = () => {
  return (
    <div className='h-[100vh] rounded-tr-[20px] rounded-br-[20px]  w-[20.85vw] bg-[#015249] fixed '>
      <div className='w-full flex items-center mt-[4.75vh] justify-center'>
        <img src={logo} alt='logo' className=' w-[12.7vw] h-[5.37vh]' />
      </div>
      <div className='flex items-center gap-10 ml-[2vw] pl-6 bg-[#043933] capitalize w-[15.4vw] h-[7vh] rounded-[10px] shadow-lg mt-[10vh]'>
        <div>
          <img src={customerIcon} alt="customer icon" className='w-[1.6vw] h-[2.87vh]'/>
        </div>
        <h3 className='text-white uppercase text-[1.25vw] font-lato font-bold'>CUSTOMERS</h3>
      </div>
    </div>
  );}

export default LeftSide