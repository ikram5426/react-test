import { useEffect } from "react";
import { fetchUsers } from "../redux/slices/UserSlice";

import { useSelector, useDispatch } from "react-redux";

const CustomerCard = () => {
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const userData = state.data?.data; // Use optional chaining to avoid errors

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {userData &&
        userData.map((user) => (
          <div
            key={user.id} // Add a unique key for each mapped element
            className='bg-[#FFFFFF] h-[12.15vh] rounded-[10px] shadow-sm flex items-center mt-4'
          >
            <img
              src={user.avatar}
              alt='image'
              className='w-[5.67vw] h-[5.5vw] rounded-[10px] ml-3 '
            />
            <div className='w-[22%] flex justify-center text-[.9vw] absolute'>
              {user.id}
            </div>
            <div className='flex w-[48%] justify-center text-[0.9vw]  text-[#57BC90] underline absolute'>
              {user.first_name.replace(/^\s+/, "")}
            </div>
            <div className='flex w-[83.75%] justify-center text-[.9vw] absolute'>
              {user.email.replace(/^\s+/, "")}
            </div>

            <div className='flex w-[93%] gap-8 justify-end pr-10'>
              <button className='w-[5.52vw] h-[3vh] bg-[#39B54A]/40 text-[#008212] text-[0.801vw] font-lato font-medium rounded-[5px]'>
                Edit
              </button>
              <button className='w-[5.52vw] h-[3vh] bg-[#D80000]/40  text-[#D80000] text-[0.801vw] font-lato font-medium rounded-[5px]'>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomerCard;
