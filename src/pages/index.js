import React, { useState } from "react";
import Link from "next/link";
import Testimonials from "../../components/testimonials";
import http from "../../helpers/http";
import Text from "../../components/text";
import { cmsFileUrl } from "../../helpers/helpers";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("home")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};



export default function Home({result}) {
  console.log(result)
  const {content, testimonials, siteSettings}=result
  const data = content
  ? [
    { number: content.sec1_number_0, heading: content.sec1_heading_0, image: content.sec1_image_0  },
    { number: content.sec1_number_1, heading: content.sec1_heading_1, image: content.sec1_image_1  },
    { number: content.sec1_number_2, heading: content.sec1_heading_2, image: content.sec1_image_2  },
    { number: content.sec1_number_3, heading: content.sec1_heading_3, image: content.sec1_image_3  },
  ]
  :[];
  const data1 = [
    { text: content.sec2_text_0, heading: content.sec2_heading_0, image: content.sec2_image_0  },
    { text: content.sec2_text_1, heading: content.sec2_heading_1, image: content.sec2_image_1  },
    { text: content.sec2_text_2, heading: content.sec2_heading_2, image: content.sec2_image_2  },
    { text: content.sec2_text_3, heading: content.sec2_heading_3, image: content.sec2_image_3  },
  ];
  const data2 = [
    { text: content.sec5_text_0, heading: content.sec5_heading_0, image: content.sec5_image_0  },
    { text: content.sec5_text_1, heading: content.sec5_heading_1, image: content.sec5_image_1  },
    { text: content.sec5_text_2, heading: content.sec5_heading_2, image: content.sec5_image_2  },
    { text: content.sec5_text_3, heading: content.sec5_heading_3, image: content.sec5_image_3  },
  ];
  const data3 = [
    { text: content.sec6_text_0, heading: content.sec6_heading_0, image: content.sec6_image_0  },
    { text: content.sec6_text_1, heading: content.sec6_heading_1, image: content.sec6_image_1  },
    { text: content.sec6_text_2, heading: content.sec6_heading_2, image: content.sec6_image_2  },
    { text: content.sec6_text_3, heading: content.sec6_heading_3, image: content.sec6_image_3  },
  ];
  const data4 = [
    { text: content.sec7_text_0, heading: content.sec7_heading_0, image: content.sec7_image_0  },
    { text: content.sec7_text_1, heading: content.sec7_heading_1, image: content.sec7_image_1  },
    { text: content.sec7_text_2, heading: content.sec7_heading_2, image: content.sec7_image_2  },
    { text: content.sec7_text_3, heading: content.sec7_heading_3, image: content.sec7_image_3  },
  ];


  return (
    <>
      <main>
        <section id="banner">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
              <Text string={content.description1} />
                <div className="search_tab">
                  <div className="tabs_top">
                    <button class="tab_btn active" type="button">
                      Shipping Rates
                    </button>
                    <button class="tab_btn" type="button">
                      Tracking
                    </button>
                  </div>
                  <div className="tab_content">
                    <form>
                      <div className="flex_input">
                        <div className="field_col">
                          <label for="location">From:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Manchester"
                            class="input"
                          />
                        </div>
                        <div className="field_col">
                          <label for="location">To:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Birmingham"
                            class="input"
                          />
                        </div>
                        <div className="field_col">
                          <label for="location">Date:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Date"
                            class="input"
                          />
                        </div>
                        <button type="submit" class="site_btn">
                          <img src="/images/search.svg" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src={cmsFileUrl(content.image1)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counter" className="bluebg">
          <div className="contain">
            <div className="flex">
            {data.map((item, index) => (

              <div className="coll" key={index}>
                <div className="inner">
                  <div className="icon">
                    <img src={cmsFileUrl(item.image)} />
                  </div>
                  <div className="text">
                    <h3>{item.number}</h3>
                    <p>{item.heading}</p>
                  </div>
                </div>
              </div>
                        ))}

              
            </div>
          </div>
        </section>

        <section id="company">
          <div className="contain">
            <div className="content_center">
              <Text string={content.description2}/>
            </div>
            <div className="flex">
              {data1.map((item, index) => (

              <div className="coll">
                <div className="inner">
                  <h4>{item.heading}</h4>
                  <p>
                    {item.text}
                  </p>
                  <div className="icon">
                    <img src={cmsFileUrl(item.image)} />
                  </div>
                </div>
              </div>
                            ))}

              
            </div>
          </div>
        </section>

        <section id="about">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                  <img src={cmsFileUrl(content.image10)} />
                </div>
              </div>
              <div className="col col2">
              <Text string={content.description3}/>

                <div className="btn_blk">
                  <Link href={content.link_url1} className="site_btn color">
                    {content.link_text1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bg">
          <div className="contain">
            <div className="content_center">
              <div className="icon">
                <img src={"/images/play.png"} />
              </div>
              <h2><Text string={content.description4}/></h2>
            </div>
          </div>
        </section>

        <section id="choose">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
              <Text string={content.description5}/>
                <div className="btn_blk">
                  <Link href={content.link_url2} className="site_btn color">
                  {content.link_text2}
                  </Link>
                </div>
              </div>
              <div className="col col2">
                <ul>
                  {data2.map((item,index) => (
                    <li>
                    <div className="head">
                      <div className="icon">
                        <img src={cmsFileUrl(item.image)} />
                      </div>
                      <h4>{item.heading}</h4>
                    </div>
                    <p>
                    {item.text}
                    </p>
                  </li>

                  ))}
                  

                  
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="c_points">
          <div className="contain">
            <div className="flex">
              {data3.map((item, index) => (
                <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src={cmsFileUrl(item.image)} />
                  </div>
                  <h4>{item.heading}</h4>
                  <p>
                  {item.text}
                  </p>
                </div>
              </div>

              ))}
              
              
            </div>
          </div>
        </section>

        <section id="work">
          <div className="contain">
            <div className="heading">
              <Text string={content.description6}/>
            </div>
            <div className="flex">
              <div className="col">
                {data4.map((item, index) => (
                  <div className="inner">
                  <div className="icon">
                    <img src={cmsFileUrl(item.image)} />
                  </div>
                  <div className="text">
                    <h4>{item.heading}</h4>
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>

                ))}
                
                
              </div>
              <div className="colr">
                <div className="image">
                  <img src={cmsFileUrl(content.image20)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials testimonials = {testimonials} content = {content} />
      </main>
    </>
  );
}
