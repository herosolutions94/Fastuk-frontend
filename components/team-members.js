import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export const getServerSideProps = async (context) => {
  const result = await http
    .get("about")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function TeamMembers({teamMembers, content}) {
  console.log(teamMembers)



  return (
    <>
      <section id="team">
          <div className="contain">
            <div className="content_center">
              < Text string = {content.description3} />
            </div>
            <div className="flex">
            {teamMembers?.map((teamMember,index) =>(

              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src={cmsFileUrl(teamMember.team_mem_image)} />
                  </div>
                  <div className="text">
                    <h4>{teamMember.title}</h4>
                    <p>{teamMember.designation}</p>
                  </div>
                  <div className="share">
                    <div className="social">
                      <img src="/images/li.svg" />
                      <img src="/images/in.svg" />
                      <img src="/images/fb.svg" />
                    </div>
                    <div className="social">
                      <img src="/images/ph.svg" />
                      <img src="/images/en.svg" />
                    </div>
                  </div>
                </div>
              </div>
                      ))}

              
            </div>
          </div>
        </section>
    </>
  );
}
