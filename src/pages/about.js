import React, { useState } from "react";
import Link from "next/link";
import TeamMembers from "../../components/team-members";
import Text from "../../components/text";


import http from "../../helpers/http";
import { cmsFileUrl } from "../../helpers/helpers";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("about")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function About({result}) {
  const {content, teamMembers, siteSettings}=result
  const data = [
    { number: content.sec4_number_0, heading: content.sec4_heading_0, image: content.sec4_abt_image_0  },
    { number: content.sec4_number_1, heading: content.sec4_heading_1, image: content.sec4_abt_image_1  },
    { number: content.sec4_number_2, heading: content.sec4_heading_2, image: content.sec4_abt_image_2  },
    { number: content.sec4_number_3, heading: content.sec4_heading_3, image: content.sec4_abt_image_3  },
  ];


  console.log(result)
  return (
    <>
      <main>
        <section id="whoweare">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                <img src={cmsFileUrl(content.abt_image1)} />
                </div>
              </div>
              <div className="col">
                <Text string = {content.description1}/>
                <div className="btn_blk">
                  <Link href={content.link_url1} className="site_btn color">
                    {content.link_text1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shipment">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
              <Text string ={content.description2} />
                <div className="box">
                  <img src={cmsFileUrl(content.abt_image2)}></img>
                  <p>
                    {content.text}
                  </p>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src={cmsFileUrl(content.abt_image3)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TeamMembers teamMembers = {teamMembers} content = {content} />


        <section id="bg">
          <div className="contain">
            <div className="content_center">
              <div className="icon">
                <img src={cmsFileUrl(content.abt_image4)} />
              </div>
              <Text string ={content.description4} />
            </div>
          </div>
        </section>

        <section id="counts">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                  <img src={cmsFileUrl(content.abt_image5)} />
                </div>
              </div>
              <div className="col">
                <div className="flex">
                  {data.map((item, index) => (
                    <div className="coll" key={index}>
                    <div className="inner">
                      <div className="icon">
                        <img src={cmsFileUrl(item.image)} />
                      </div>
                      <h3>{item.number}</h3>
                      <h5>{item.heading}</h5>
                    </div>
                  </div>

                  ))}
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="benefit">
        <div className="contain">
          <div className="flex">
            <div className="col col1">
            <Text string = {content.description5} />
              <div className="btn_blk">
                  <Link href={content.link_url2} className="site_btn color">
                  {content.link_text2}
                  </Link>
                </div>
            </div>
            <div className="col col2">
              <div className="image">
            <img src={cmsFileUrl(content.abt_image10)} />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
