import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-gray-500 py-28 px-6 lg:px-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10 bg-white shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold">Customers Privacy Policy</h2>
          <p>
            We at Vsource Admissions recognize your right to confidentiality and
            are committed to protecting your privacy. Vsource Admissions does
            not furnish any identifiable information at the individual level
            regarding its customers to any third party. The information you give
            to us is held with the utmost care and security. This information is
            collected primarily to ensure that we are able to fulfill your
            requirements and to deliver you a truly personalized experience.
            When navigating our website, personal information about you is not
            collected automatically or without your knowledge.
          </p>

          <p>
            We are also bound to cooperate fully should a situation arise where
            we are required by law or legal process to provide information about
            a customer. We may share non-personal, non-individual statistical or
            demographic information in aggregate form with our marketing
            partners, advertisers or third parties for research and advertising
            purposes. This means we will never disclose your identity or items
            purchased, only overall usage data.
          </p>

          <h2 className="text-xl font-semibold mt-8">Cookies</h2>
          <p>
            When you use our website, certain data may be stored as cookies.
            Cookies are small pieces of information stored by your browser on
            your computer's hard drive.
          </p>

          <p>
            We do not store personal information, passwords or credit card
            details in cookies. Cookies simply allow our system to identify that
            you have visited before and to store items in your shopping cart
            between visits. Most browsers automatically accept cookies, but you
            can change your browser settings to disable them.
          </p>

          <p>
            Our website uses JavaScript and cookies to function. If you disable
            either, some features and ordering functions will not work. These
            files do not allow access to your hard drive or personal files.
          </p>

          <p>
            We at Vsource Admissions do not make customers uncomfortable by
            frequently sending promotional emails. You will receive emails only
            regarding your orders or necessary communication.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
