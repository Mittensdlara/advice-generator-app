"use client";

import Image from "next/image";
import divider from "../images/pattern-divider-desktop.svg";
import disc from "../images/icon-dice.svg";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data.slip);
      setAdvices([data.slip]);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card rounded-xl">
        {advices.map((advice) => (
          <>
            <p className="pb-5 text-xs space-x-2" key={advice.id}>
              ADVICE # {advice.id}
            </p>
            <h1 className="font-bold text-cneter p-5 text-lg ">"{advice.advice}" </h1>
          </>
        ))}
        <div className="flex justify-center flex-col items-center">
          <Image src={divider} className="mt-4"/>
          <div className="disc  rounded-full  p-3">
            <Image src={disc} className=" " />
          </div>
        </div>
      </div>
    </div>
  );
}
