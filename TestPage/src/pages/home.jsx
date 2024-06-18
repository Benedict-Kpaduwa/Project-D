import { useState } from "react";
import smileylogo from "../components/assets/icomoon-free_happy.svg";
import fuellogo from "../components/assets/Group.svg";
import moneylogo from "../components/assets/Vector.svg";
import image1 from "../components/assets/image1.svg";
import image2 from "../components/assets/image2.svg";
import image3 from "../components/assets/image3.svg";
import image4 from "../components/assets/image4.svg";
import image5 from "../components/assets/image5.svg";
import iconimg1 from "../components/assets/Group34449.svg";
import iconimg2 from "../components/assets/Group34450.svg";
import iconimg3 from "../components/assets/Group34448.svg";
import phonebg from "../components/assets/Phonebackground.svg";
import Accordion from "./../components/Dropdown";

const Home = () => {
  const [selectedFaq, setSelectedFaq] = useState("price");

  const handleFaqClick = (Faq) => {
    setSelectedFaq(Faq);
  };

  const items = [
    {
      title: "WHAT IS THE PRICE FOR DIESEL ORDERED?",
      content:
        "Diesel is delivered at the day running price including taxes applicable in the state",
    },
    {
      title: "ARE THERE ANY HIDDEN CHARGES?",
      content: "this is text for charges",
    },
    {
      title: "WHERE DO YOU DELIVER?",
      content: "this is text for where",
    },
    {
      title: "WHEN DO YOU DELIVER?",
      content: "this is text for when",
    },
    {
      title: "WHERE DO YOU GET THE FUEL FROM?",
      content: "this is text for where it is from",
    },
    {
      title: "WHAT IF THERE IS AN EXCESS ORDER?",
      content: "this is text for excess",
    },
    {
      title: "HOW CAN WE PAY?",
      content: "this is text for how",
    },
    {
      title: "HOW SAFE IS GOFUEL DELIVERY?",
      content: "this is text for safe",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-[url('src/assets/Framebackground.svg')] w-full">
        <div className="flex flex-col gap-y-6 py-20 px-16">
          <h1 className="text-4xl text-white max-w-[26rem] font-bold">
            Be a part of the future- A Diesel Evolution{" "}
          </h1>
          <p className="text-2xl text-white">Now Operating across Nigeria...</p>
          <div className="border border- p-4 w-64 rounded-lg">
            <div className="text-left">
              <p className="mb-2 text-white">
                Display of fuel price measured per litre
              </p>
              <div className="flex flex-row justify-between text-white">
                <p className="mb-2 ">Fuel: </p> <p>Petrol</p>
              </div>
              <div className="flex flex-row justify-between text-white">
                <p>Fuel Price:</p> <p> 670</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 pb-5 font-bold text-lg text-green-800 bg-white opacity-60">
          GoFuel - Nigeria Leading Door to Door Fuel Delivery Service
        </div>
      </section>

      <section></section>
      <div className="bg-[#03390C] flex lg:flex-row md:flex-row sm:flex-col justify-between sm:py-8 lg:py-5 lg:space-x-8 lg:space-y-0 sm:space-y-8 items-center px-16">
        <div>
          <div>
            <img src={smileylogo} alt="logo" className="mx-10 w-8 h-8" />
          </div>
          <div className="text-white font-bold text-3xl flex justify-center ">
            28 +
          </div>
          <div className="text-white font-semibold justify-center">
            Happy Customers
          </div>
        </div>
        <div>
          <div>
            <img src={fuellogo} alt="logo" className="mx-14 w-8 h-8" />
          </div>
          <div className="text-white font-bold text-3xl flex justify-center">
            1,200,000
          </div>
          <div className="text-white font-semibold justify-center">
            Litres Dispensed
          </div>
        </div>
        <div>
          <div>
            <img src={moneylogo} alt="logo" className="mx-10 w-8 h-8" />
          </div>
          <div className="text-white font-bold text-3xl flex justify-center">
            80,989,00
          </div>
          <div className="text-white font-semibold justify-center">
            Revenue in 12 Months
          </div>
        </div>
      </div>
      <div className="pt-20 pb-16 flex justify-center text-[#1FBA4A] text-2xl font-bold">
        Why GoFuel..?
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col w-full">
        <div className="bg-green-200 h-[800px] lg:w-1/2 md:w-1/2 sm:w-full text-center pt-96 ">
          <div className="font-bold text-2xl font-serif text-green-900">
            <p className="text-center pl-5 text-[#03390C]">
              SIMPLE, STRESS-FREE
            </p>
            <p className="text-center pr-16 text-[#03390C]">TRANSACTIONS</p>
          </div>
          <div>
            <p className="pt-8 font-semibold text-center pl-7">
              Order your diesel through our mobile app
            </p>
            <p className="pt-8 font-semibold text-center pr-[72px]">
              Monitor your diesel delivery
            </p>
            <p className="pt-8 font-semibold text-center pr-12">
              Enjoy a seamless diesel delivery
            </p>
            <p className="pt-8 font-semibold text-center pr-[72px]">
              Limited manual interference
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full">
          <div className="bg-[#00290B38] h-[400px]   pt-24">
            <p className="mx-36 font-serif text-[#03390C] left w-100 font-bold text-2xl">
              SAFE, SECURE AND GUARANTEED DELIVERY
            </p>
            <p className="text-left mx-36 font-semibold pt-8">
              OTP-based transactions
            </p>
            <p className="text-left mx-36 font-semibold pt-8">
              Our smart trucks avoid actions that go against national policy and
              security
            </p>
          </div>

          <div className="bg-[#00FF47B8] h-[400px] text-center pt-24">
            <p className="mx-36 font-serif text-[#03390C] text-left w-80 font-bold text-2xl">
              EASY DIGITAL TRANSACTIONS
            </p>
            {/* <p className="text-left pl-5">TRANSACTIONS</p> */}
            <p className="text-left mx-36 font-semibold pt-8 text-[#000000]">
              Efficiently recorded with no scope for error
            </p>
            <p className="text-left mx-36 font-semibold pt-8 text-[#000000]">
              Online invoice and dashboard for easy record keeping
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1FBA4AE8] h-[400px] w-full">
        <p className="font-bold text-2xl font-serif mx-36 text-green-900 pt-20 lg:w-80 md:w-80 sm:w-72">
          SAVE TIME, ENERGY AND MONEY!
        </p>
        <p className="text-left mx-36 font-semibold pt-6 text-white">
          Uninterrupted diesel delivery to your door step
        </p>
        <p className="text-left mx-36 font-semibold pt-6 text-white">
          Order desired quantity in bulk with little or no effort
        </p>
      </div>
      <div>
        <p className="pt-20 flex justify-center text-green-500 text-2xl font-bold">
          How to GoFuel?
        </p>
      </div>
      <div className="flex justify-center max-h-[1000px]">
        <img src={phonebg} className="p-20" />
      </div>
      <div>
        <p className=" flex justify-center text-green-500 text-2xl font-bold">
          FAQs
        </p>
        <p className="flex justify-center font-semibold">
          Most frequent questions and answers
        </p>
      </div>

      <div className="lg:block sm:hidden md:block">
        <div className="grid grid-cols-7 p-3 max-w-[1400px] gap-4 px-36">
          <div className="grid gap-5 col-span-4">
            <div
              className={`px-3 ${
                selectedFaq === "price"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("price")}
            >
              WHAT IS THE PRICE FOR DIESEL ORDERED?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "charges"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("charges")}
            >
              ARE THERE ANY HIDDEN CHARGES?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "where"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("where")}
            >
              WHERE DO YOU DELIVER?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "when"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("when")}
            >
              WHEN DO YOU DELIVER?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "wherefrom"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("wherefrom")}
            >
              WHERE DO YOU GET THE FUEL FROM?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "excess"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("excess")}
            >
              WHAT IF THERE IS AN EXCESS ORDER?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "how"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("how")}
            >
              HOW CAN WE PAY?
            </div>
            <div
              className={`px-3 ${
                selectedFaq === "safe"
                  ? "bg-[#1FBA4A] text-white"
                  : "bg-gray-200 text-black"
              } font-semibold text-lg py-4 cursor-pointer`}
              onClick={() => handleFaqClick("safe")}
            >
              HOW SAFE IS GOFUEL DELIVERY?
            </div>
          </div>
          <div className="bg-gray-200 text-center flex items-center justify-center p-3 font-semibold text-lg col-span-3 ">
            {selectedFaq === "price" && (
              <p className="mx-20 text-left text-xl">
                Diesel is delivered at the day's running price including taxes
                applicable in the state
              </p>
            )}
            {selectedFaq === "charges" && (
              <p className="mx-20 text-left text-xl">
                this is text for charges
              </p>
            )}
            {selectedFaq === "where" && (
              <p className="mx-20 text-left text-xl">this is text for where</p>
            )}
            {selectedFaq === "when" && (
              <p className="mx-20 text-left text-xl">this is text for when</p>
            )}
            {selectedFaq === "wherefrom" && (
              <p className="mx-20 text-left text-xl">
                this is text for where it is from
              </p>
            )}
            {selectedFaq === "excess" && (
              <p className="mx-20 text-left text-xl">this is text for excess</p>
            )}
            {selectedFaq === "how" && (
              <p className="mx-20 text-left text-xl">this is text for how</p>
            )}
            {selectedFaq === "safe" && (
              <p className="mx-20 text-left text-xl">this is text for safe</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 lg:hidden md:hidden sm:block">
        <Accordion items={items} />
      </div>

      <div className="pb-10">
        <p className="pt-20 flex justify-center text-green-500 text-2xl font-bold">
          Our Clients
        </p>
        <p className="flex justify-center font-semibold">
          Brands that trust us{" "}
        </p>
      </div>
      <div className="px-20 flex lg:flex-row md:flex-row sm:flex-col justify-between w-full">
        <div>
          <img src={image1} alt="logo" className="mx-10 w-24 h-24" />
        </div>
        <div>
          <img src={image2} alt="logo" className="mx-10 w-20 h-20" />
        </div>
        <div>
          <img src={image3} alt="logo" className="mx-10 w-20 h-20" />
        </div>
        <div>
          <img src={image5} alt="logo" className="mx-10 w-20 h-20" />
        </div>
        <div>
          <img src={image4} alt="logo" className="mx-10 w-20 h-20" />
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between px-44 pt-48 pb-56 w-full">
        <div>
          <div className="pb-4">
            <img src={iconimg1} className="w-24 h-24" />
          </div>
          <div className="font-semibold">info@gofuel.in</div>
        </div>
        <div className="flex flex-col">
          <div className="pb-4">
            <img src={iconimg2} className="w-24 h-24" />
          </div>
          <div className="font-semibold">info@gofuel.in</div>
        </div>
        <div>
          <div className="pb-4">
            <img src={iconimg3} className="w-24 h-24" />
          </div>
          <div className="font-semibold ">+91-9706 101010</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
