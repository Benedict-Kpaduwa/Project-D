import React from "react";
import emptybox from "../components/assets/Emptybox.svg";


const Gofuelprogram = () => {
  return (
    <>
      <div className="bg-[#1FBA4A] text-white text-center h-[400px] pt-36">
        <p className="font-bold text-3xl">GoFuel invites GoFuelers</p>
        <div className=" mx-auto w-[400px] text-lg">
          <p className="pt-4">
            GoFueler Program Is a Unique Investment Opportunity Designed for
            Energetic Entrepreneurs Willing To Join Hands With GoFuel To Create
            A World-Class Professional Organization
          </p>
        </div>
      </div>
      <div className="flex flex-row pt-32 pb-32  justify-center ">
        <div>
          <img src={emptybox} className="h-[500px] w-[500px]" />
        </div>
        <div className="pl-8 pt-32">
          <p className="font-bold text-2xl">What's GoFueler program?</p>
          <p className="w-96 pt-5">
            GoFueler Program Follows Franchisee Operated Company Owned (FOCO)
            Model, Where The Franchisee Will Be Allocated A Specific Territory
            Along With Infrastructure To Perform The Operations.
          </p>
        </div>
      </div>

      <div className="bg-[#1FBA4A] mx-32 my-32 relative pb-32">
        <div className="bg-white absolute top-0 left-0">
          <p className="text-[#1FBA4A] font-bold text-4xl p-12">
            THE INVESTMENT PLAN
          </p>
        </div>
        <div className="flex flex-row justify-between pt-52 pl-12 pr-32 text-2xl text-white">
          <p>Total Investment</p>
          <p>35 Lakhs</p>
        </div>

        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Agreement Tenure</p>
          <p>60 Months</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>GoFueler Commission</p>
          <p>1.2 Re/Litre</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Interest Free Refundable Deposit</p>
          <p>10 Lakhs</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Commission Disbursal</p>
          <p>30 Days</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Average Returns</p>
          <p>42%*</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Minimal Capacity Daily Operations</p>
          <p>6000 Litres/day</p>
        </div>
        <div className="flex flex-row justify-between pt-10 pl-12 pr-32 text-2xl text-white">
          <p>Operational Infrastructure</p>
          <p>GoFuel Provided</p>
        </div>
      </div>
    </>
  );
};

export default Gofuelprogram;
