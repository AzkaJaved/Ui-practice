import Image from "next/image";
import React from "react";
// import logo from "/logo.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <header className="flex  items-center justify-between min-w-[1215px] mx-auto gap-x-[150px] py-[18px] ">
        <nav className="flex gap-10">
          <Image src="/logo.png" alt="logo" width={103.94} height={40.61} />
          <ul className="flex min-w-[398px] justify-between">
            <li>Home</li>
            <li>Medications</li>
            <li>How it works</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav className="flex min-w-[523px] justify-between">
          <div className="border-[1px] w-[320px] rounded-lg px-2 focus:outline-none focus:ring-0 flex items-center justify-between gap-2">
            <Image src="/search-sm.png" alt="search" width={20} height={20} />
            <input
              type="search"
              name="search"
              placeholder="Medication search"
            />
          </div>
          <button className="bg-white text-black px-[14px] py-[10px] rounded-lg">
            Sign in{" "}
          </button>
          <button className="bg-[#0071bc] text-white px-[14px] py-[10px] rounded-lg">
            Sign up
          </button>
        </nav>

        {/* <nav>
          <Image src="/icon.png" width={18} height={12} alt="menu" />
        </nav> */}
      </header>
      <section className="flex justify-center gap-x-8 items-center w-full">
        <div className="w-[610px] flex flex-col items-center ">
          <form className="max-w-[372px]">
            <h2 className="font-semibold  text-4xl text-[#101828] leading-[44px] -tracking-[0.02em] mb-2">
              Sign in
            </h2>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#374050] mt-3"
              >
                Email address?
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="text-gray-600 border-[1px] border-[#B3BBC8] focus:ring-0 focus:outline-none py-2 px-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#374050] mt-3"
              >
                Password
              </label>
              <div className="flex justify-between items-center text-gray-600 border-[1px] border-[#B3BBC8] focus:ring-0 focus:outline-none py-2 px-3 rounded-lg">
                <input type="password" placeholder="******" />
                <Image
                  src="/eye-off.png"
                  alt="eye-off"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Link
              href="/"
              className="text-sm underline text-[#0071BC] font-medium"
            >
              I have forgotten my password
            </Link>
            <button className="block text-white w-[372px] px-[18px] py-3 bg-[#0071BC] rounded-lg my-8">
              Log in
            </button>
          </form>
        </div>
        <Image
          src="/image.png"
          alt="image"
          width={610}
          height={590}
          className="rounded-[40px]"
        />
      </section>
    </div>
  );
};

export default page;
