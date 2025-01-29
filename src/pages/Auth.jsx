import { FaArrowLeft } from "react-icons/fa6";
import userAvatar from "./images/useAvatar.png";
import { useNavigate } from "react-router";
const Auth = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    // logic
    console.log(e.target.name.value);
    console.log(e.target.password.value);
  };

  let navigate = useNavigate(-1);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex_box h-screen p-3 bg-gray-100"
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 font-bold text-2xl"
      >
        <FaArrowLeft />
      </button>
      <div className="w-full h-[439px] py-6 relative form_parent_shadow  rounded-2xl bg-white">
        <div className="flex_box h-[100px]">
          <img className="w-auto h-full" src={userAvatar} alt="useavatar" />
        </div>

        <div className="flex_box flex-col gap-5 mt-5 px-10">
          <input
            name="name"
            className="w-full h-[50px] border border-black/20 pl-3 rounded-2xl"
            type="text"
            placeholder="Ism Yozing"
          />
          <input
            name="password"
            className="w-full h-[50px] border border-black/20 pl-3 rounded-2xl"
            type="password"
            placeholder="Parol Yozing"
          />
        </div>

        <div className="absolute flex_box bottom-5 left-0 w-full px-4">
          <button className="w-full h-[45px] bg-black text-white rounded-2xl">
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
    </form>
  );
};

export default Auth;
