// @ts-nocheck
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left text-white font-semibold"
      >
        {title}
        {open ? <FaMinus /> : <FaPlus />}
      </button>

      {open && (
        <div className="mt-3 text-slate-400 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
