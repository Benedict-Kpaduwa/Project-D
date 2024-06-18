import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1FBA4A] flex lg:flex-row md:flex-row sm:flex-col justify-between w-full">
        <div className="mx-24 w-1/3 pt-20">
          <div className="flex lg:flex-col md:flex-col sm:flex-row">
            <p className="font-bold text-xl text-white">GO-</p>
            <p className="font-bold text-xl text-white">FUEL</p>
          </div>
          <p className="text-white pt-4">9051 Mira Mesa Blvd P.O, Box</p>
          <p className="text-white">261229</p>
          <p className="text-white">San Diego, CA 92126</p>
          <p className="text-white pt-4 font-semibold">CONNECT WITH GO-FUEL</p>
        </div>
        <div className="w-1/3 mx-24">
          <p className="pt-36 text-white">About Us</p>
          <p className="text-white">GO-FUEL Service</p>
          <p className="text-white">Insurance</p>
          <p className="text-white">Media</p>
          <p className="text-white">Contact</p>
        </div>
        <div className="mx-24 w-1/3 pt-20">
          <p className="font-bold text-[#03390C]">MEDIA ENQUIRIES</p>
          <p className="pt-4 text-white">
            Robbins Research International, Inc. has adedicated media
            department. Members of the press are welcome to contact us re...
          </p>
          <p className="font-bold text-[#03390C] pt-4">CUSTOMER SUPPORT</p>
          <p className="text-white pt-4">
            Contact Customer Support for questions on your products, coaching or
            events...
          </p>
          {/* <div className="flex flex-row">
            <div><img src={instagramicon} /></div>
          </div> */}
        </div>
      </div>
      <div className="bg-[#1FBA4A] text-center font-semibold text-white pt-10 pb-4">
        GO-FUEL © 2022 All rights reserved
      </div>
    </>
  );
};

export default Footer;
