function Footer() {
  return (
    <footer className="relative bg-[#b4b1d0] pb-[3px] text-center text-black">
      <div className="h-[7px] w-full border-t-[4px] border-dashed border-white/90" />

      <div className="mx-auto mt-[13px] flex h-[55px] items-center justify-center gap-[8px]">
        <div className="flex h-[48px] w-[50px] items-center justify-center border border-[#9d8f59] bg-[#c8b268] text-[9px] font-bold uppercase leading-tight text-[#8d2b2b]">
          ISO
        </div>
        <div className="flex h-[55px] w-[61px] flex-col items-center justify-center border border-gray-300 bg-white">
          <div className="h-0 w-0 border-x-[16px] border-b-[30px] border-x-transparent border-b-[#d71920]" />
          <span className="mt-[-20px] text-[10px] font-extrabold text-[#285c2c]">
            DAC
          </span>
        </div>
        <div className="flex h-[42px] w-[92px] flex-col items-center justify-center bg-white px-1">
          <span className="text-[22px] font-black leading-[18px] tracking-[-2px]">
            MSME
          </span>
          <span className="mt-[2px] text-[5px] font-bold">
            Ministry of MSME, Govt. of India
          </span>
        </div>
      </div>

      <p className="mt-[8px] text-[14px]">
        © 2016 Starcon Infra Projects (I) Pvt. Ltd. | All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
