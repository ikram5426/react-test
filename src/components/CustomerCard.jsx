import { useEffect ,useState} from "react";
import { fetchUsers } from "../redux/slices/UserSlice";

import { useSelector, useDispatch } from "react-redux";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const CustomerCard = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const userData = state.data?.data; // Use optional chaining to avoid errors


  const openEditModal = () => {
setEditModal(true)  };

  // const closeEditModal = () => {
  //   setSelectedUserId(null);
  //   setEditModal(false);
  // };
   const openDeleteModal = () => {
     setDeleteModal(true);
      setSelectedUserId(null);

     console.log("object selected");
   };

  //  const closeDeleteModal = () => {
  //    setSelectedUserId(null);
  //    setDeleteModal(false);
  //  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {userData &&
        userData.map((user) => (
          <div
            key={user.id}
            className='bg-[#FFFFFF] sm:h-[12.15vh] h-[37vh] sm:w-auto w-[75vw] sm:rounded-[10px] rounded-[4vw] shadow-sm flex sm:flex-row flex-col items-center sm:mt-4 mt-8 ml-auto sm:mb-0 mb-[10vw]'
          >
            <img
              src={user.avatar}
              alt='image'
              className='sm:w-[5.67vw] hidden sm:block w-[25vw] h-[25vw] sm:h-[5.5vw] sm:rounded-[10px] rounded-[4vw] sm:ml-3 sm:mt-0 mt-[4vw]'
            />
            <div className='sm:w-[22%] sm:flex  hidden justify-center text-[.9vw] absolute'>
              {user.id}
            </div>
            <div className='hidden sm:flex w-[48%] justify-center text-[0.9vw]  text-[#57BC90] underline absolute'>
              {user.first_name.replace(/^\s+/, "")}
            </div>
            <div className='hidden sm:flex w-[83.75%] justify-center text-[.9vw] absolute'>
              {user.email.replace(/^\s+/, "")}
            </div>

            <div className='absolute hidden sm:flex w-[70%] gap-8 justify-end pr-10'>
              <button
                className='w-[5.52vw] h-[3vh] bg-[#39B54A]/40 text-[#008212] text-[0.801vw] font-lato font-medium rounded-[5px]'
                onClick={openEditModal}
              >
                Edit
              </button>
              <button
                className='w-[5.52vw] h-[3vh] bg-[#D80000]/40  text-[#D80000] text-[0.801vw] font-lato font-medium rounded-[5px]'
                onClick={openDeleteModal}
              >
                Delete
              </button>
            </div>

            {/* mobile card */}
            <div className='sm:hidden bg-gradient-to-r  from-[#57BC90] to-[#004B40] rounded-tl-[4vw]  rounded-tr-[4vw]  flex w-[100%] items-center justify-center'>
              {" "}
              <img
                src={user.avatar}
                alt='image'
                className=' w-[25vw] h-[25vw] [10px] rounded-[4vw]  my-[4vw]'
              />
            </div>

            <div className='m-[4vw]  sm:hidden w-[100%] h-auto px-[4vw]'>
              <div className='flex border border-gray-200  rounded-[4vw] py-1  pl-2 justify-between '>
                <span>ID </span>
                <span className='border-l pl-2 flex items-start  w-[80%]'>
                  {user.id}
                </span>
              </div>

              <div className='flex border pl-2  rounded-[4vw] py-1 mt-1 border-gray-200  justify-between'>
                <span>Name </span>
                <span className='flex items-start border-l w-[80%] pl-2'>
                  {user.first_name.replace(/^\s+/, "")}
                </span>
              </div>
              <div className='flex border pl-2 mt-1  rounded-[4vw] py-1 border-gray-200  justify-between'>
                <span>Email</span>
                <span className='flex pl-2 items-start border-l w-[80%] '>
                  {" "}
                  {user.email.replace(/^\s+/, "")}
                </span>
              </div>
            </div>
            <div className='w-[100%] flex items-center justify-between px-[15vw] sm:hidden'>
              <button
                className='h-[3.5vh] w-[20vw] bg-[#39B54A]/40 text-[#008212] text-[4vw] font-lato font-medium rounded-[2vw] sm:hidden'
                onClick={openEditModal}
              >
                Edit
              </button>
              <button
                className=' h-[3.5vh] w-[20vw] bg-[#D80000]/40  text-[#D80000] text-[4vw] font-lato font-medium rounded-[2vw] sm:hidden'
                onClick={openDeleteModal}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
      <EditModal editModal={editModal} setEditModal={setEditModal} />
    </div>
  );
};

export default CustomerCard;
