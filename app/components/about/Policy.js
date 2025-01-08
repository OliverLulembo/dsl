import {React} from "react";
import sIcon1 from "@/public/images/icons/icon_quote_2.svg";
import sIcon2 from "@/public/images/icons/icon_dart_board_2.svg";
import sIcon3 from "@/public/images/icons/icon_target.svg";
import Image from "next/image";

const Policy = [
  {
    title: "Our Values",
    subTitle:
      "<h6>Integrity</h6> We are honest in all our dealing and uphold strong moral principles when dealing with all our customers. <h6> Innovation </h6> <p> customersWe foster continuous improvement of our people, processes, and technologyto deliver quality and marketleading solutions. </p> <h6>Passion</h6> <p>We are driven by our strong desire to create a digitallysafe business ecosystemin our customers. </p> <h6>Reliability</h6><p> We deliver on our promises consistently to drive value for all the customers we serve </p> ",
    icon: sIcon1,
  },
  {
    title: "Our Mission",
    subTitle:
      "We thrive to create a safer and more secure digital world for all",
    icon: sIcon2,
  },
  {
    title: "Our Vision",
    subTitle:
      "To be the leading expert in cyber security, Risk Management and Digital transformation.We achieve this through our core values of integrity, innovation, Reliability and passion. Our commitment to these values drives us to deliver exceptional value to our clients,stay ahead of the curve, and create a safer and more secure digital world for everyone.",
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
                  <p className="mb-0" dangerouslySetInnerHTML={{ __html: policy.subTitle }} ></p>
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
