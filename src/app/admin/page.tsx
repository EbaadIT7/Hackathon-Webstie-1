
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden md:flex w-[25%] lg:w-[20%]">
        <Image src="/Nav Bar.png" alt="Navigation Bar" width={360} height={1600} />
      </div>

      {/* Main Content */}
      <div className="hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center">
        {Array(2)
          .fill("")
          .map((_, i) => (
            <Image
              key={i}
              src="/Details Rental.png"
              alt={`Details Rental ${i + 1}`}
              width={534}
              height={836}
              className="w-full md:w-[45%] lg:w-[534px]"
            />
          ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        {["Detail Rental.png", "Top 5.png", "Recent Transaction.png"].map(
          (src, i) => (
            <Image
              key={i}
              src={`/${src}`}
              alt={`Image ${i + 1}`}
              width={327}
              height={src === "Recent Transaction.png" ? 352 : 508}
              className="w-full"
            />
          )
        )}
      </div>
    </div>
  );
}
