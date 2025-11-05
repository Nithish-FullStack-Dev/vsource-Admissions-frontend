import React from "react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className=" bg-gray-500 py-28 px-6 lg:px-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10 bg-white shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Disclaimer
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The information contained on this website is for general
            informational purposes only. The information is provided by Vsource
            Admissions and while we strive to keep the content updated and
            accurate, we make no representations or warranties of any kind,
            express or implied, regarding the completeness, accuracy,
            reliability, suitability, or availability of the information,
            services, or related graphics on the website for any purpose. Any
            reliance you place on such information is strictly at your own risk.
          </p>

          <p>
            In no event shall we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>

          <p>
            Through this website you may be able to link to other websites which
            are not controlled by Vsource Admissions. We have no control over
            the nature, content, and availability of those sites. The inclusion
            of any links does not imply a recommendation or endorsement of the
            views expressed within them.
          </p>

          <p>
            Every effort is made to keep the website running smoothly. However,
            Vsource Admissions does not take responsibility for, and will not be
            liable for, the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
