import React from "react";
import updateImg from "../../images/blogs/updateImage.png";

function Material() {
  return (
    <div className="py-32 px-10">
      <section className=" flex flex-col-reverse md:flex-row-reverse items-center justify-evenly gap-60 md:gap-6 h-full w-full mt-12">
        <div className=" w-full md:w-1/2 bg-stone-200 p-4 md:p-12">
          <h1 className=" font-semibold text-4xl mt-12">Register Now for free !</h1>  <br/>
          <span className=" text-md md:text-xl">
             Register your E-mail now to deliver latest news and Courses deliver  to your Inbox.
          </span>
          <br/>

          <div className=" flex flex-row items-center ">
           <input type="text" className=" h-12 w-2/3 bg-white border-2 border-blue-700 px-4 text-lg text-black" placeholder="Enter your Email"/>
           <button className=" h-12 w-24 bg-blue-600 hover:bg-blue-800 m-2 border-2">Register</button>
          </div>
        </div>

        <div className=" h-20 md:h-42 md:-mt-44 p-4 md:w-1/3  object-cover">
            <img src={updateImg} alt="samplePic" className=" update__img w-100% h-100% rounded-md" />
        </div>
      </section>
    </div>
  );
}


export default Material;
