import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-lg mx-auto py-10 flex gap-8">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "linkedIn"].map((item, index) => (
              <a className="block mt-3 text-sm text-zinc-500 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
            {["Home", "Work", "Career", "Contact"].map((item, index) => (
              <a className="block mt-3 text-sm text-zinc-500 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right text-sm">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
