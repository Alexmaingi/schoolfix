import React from "react";
import useForm from "../validation/useForm";
import SchoolFixLogo from "../comon/SchoolFixLogo";
import validate from '../validation/validateInfo'

const SchoolFixFormLogIn = ({ submitForm }) => {
  const labelStyle = 'justify-content-start block text-base text-[10px] flex justify-start px-[-10px] pb-0 font-normal text-[#000000]'
  const buttonStyle = 'text-[#000000]  bg-[#FFFFFF] border-2 ml-4 hover:text-[#ffffff] hover:bg-[#000000] w-16 h-6 border-[#000000] rounded-lg bg-transparent font-normal text-[10px] font-style: Hina Mincho'
  const inputStyle = 'bg-gray-300 text-[10px] text-[#000000] block px-[8px] ml-0 h-[20px] rounded-md w-[80%] h-[35px] bg-[#D9D9D9]  border-[#D9D9D9]  shadow-md cursor-text hover:bg-white focus:border-gray-600 focus:outline-none checkedPresent'
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <form  onSubmit={handleSubmit}>
       <div className="ml-[900px] mt-[7.8%]">
          <SchoolFixLogo 
            logoStyle={'h-[50px] w-[100px]'}
          />
       </div>

    <div className=" flex justify-unevenly w-full h-[600px]">
      <div>
        <img
          src="/login.jpg"
          alt="SschoolFix"
          className="w-[60%] ml-[49%] drop-shadow-2xl  rounded-l-lg h-[65%] mt-[0%]"
        />
      </div>
      <div className="w-[30%] h-[65%] ml-[4.25%] mt-[0] bg-[#989898] drop-shadow-2xl rounded-r-lg border-[#989898]" >
        <div className="mt-[90px] ml-[60px]">
        <label className={labelStyle}>Username/Email</label>
          <input
            className={inputStyle}
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <span className="flex ml-[16px] mb-[2px] text-[8px] text-[#FF0000]">{errors.username && <p>{errors.username}</p>}</span>
        </div>
        <div className="ml-[60px] mt-[8px]">
        <label className={labelStyle}>Password</label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="flex ml-[16px] text-[8px] text-[#FF0000]">{errors.password && <p>{errors.password}</p>}</span>

        </div>
        <div className="ml-[230px] mt-[10px]">
        <button className={buttonStyle} type="submit">
          Log In
        </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default SchoolFixFormLogIn;

