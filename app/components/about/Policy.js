import React from "react";
import sIcon1 from "@/public/images/icons/icon_quote_2.svg";
import sIcon2 from "@/public/images/icons/icon_dart_board_2.svg";
import sIcon3 from "@/public/images/icons/icon_target.svg";
import Image from "next/image";

const Policy = [
  {
    title: "Our Values",
    subTitle:
      "Integrity, Innovation, Passion and Reliability",
    icon: sIcon1,
  },
  {
    title: "Our Mission",
    subTitle:
      "To minimize risk and cyber threats and maximize business value through a culture of continuous improvement.",
    icon: sIcon2,
  },
  {
    title: "Our Vision",
    subTitle:
      "To be part of a global effort in optimizing enterprise risk and reduce cyber threats through services tailored to customer specifications and business objectives in the most cost-effective manner possible.",
    icon: sIcon3,
  },
];

const PolicySection = () => {
  return (
    <section className="policy_section bg-light">
      <div className="container">
        <div className="row">
          {Policy.map((policy, pitem) => (
            <div className="col-4" key={pitem}>
              <div className="iconbox_block">
                <div className="iconbox_icon">
                  <Image src={policy.icon} alt="Dollar SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{policy.title}</h3>
                  <p className="mb-0">{policy.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
