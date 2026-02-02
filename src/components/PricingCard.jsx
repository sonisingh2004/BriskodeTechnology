// @ts-nocheck
import React from "react";

const PricingCard = ({ title, price, duration }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-4xl font-extrabold text-blue-500">{price}</p>
      <p className="mt-2 text-slate-400">{duration}</p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfxKkwmyNSVtEsrNn1bB11l2fu9nWjfes0wUcGetM13cSRi3Q/viewform"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500"
      >
        Apply Now
      </a>
    </div>
  );
};

export default PricingCard;
