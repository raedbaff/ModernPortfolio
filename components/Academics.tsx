import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {  Academic } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="aca-experiences">
      <h1 className="heading mb-4">
        My academic <span className="text-purple">Experiences</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={Academic}
          direction="right"
          speed="fast"
        />
        
      </div>
    </div>
  );
};

export default Clients;
