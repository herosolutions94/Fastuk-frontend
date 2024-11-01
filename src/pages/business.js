import Link from "next/link";
import React from "react";
import http from "../../helpers/http";
import Text from "../../components/text";
import { cmsFileUrl } from "../../helpers/helpers";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("business")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Business({result}) {
  console.log(result)
  const {content, siteSettings}=result
  const data = [
    { text: content.sec1_text_0, heading: content.sec1_heading_0, image: content.sec1_business_image_0  },
    { text: content.sec1_text_1, heading: content.sec1_heading_1, image: content.sec1_business_image_1  },
    { text: content.sec1_text_2, heading: content.sec1_heading_2, image: content.sec1_business_image_2  },
    { text: content.sec1_text_3, heading: content.sec1_heading_3, image: content.sec1_business_image_3  },
  ];

  const data1 = [
    { text: content.sec3_text_0, image: content.sec3_business_image_0  },
    { text: content.sec3_text_1, image: content.sec3_business_image_1  },
    { text: content.sec3_text_2, image: content.sec3_business_image_2  },
    { text: content.sec3_text_3, image: content.sec3_business_image_3  },
  ];

  return (
    <div>
      <main>
        <section id="rider">
          <div className="contain">
            <div className="flex">
              <div className="col col1 ">
                <Text string={content.description1} />
                <div className="btn_blk">
                  <Link href={content.link_url1} className="site_btn color">
                    {content.link_text1}
                  </Link>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src={cmsFileUrl(content.business_image1)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process1" className="pl mtl">
          <div className="contain">
            <div className="outer">
              <div className="head">
                <div className="text">
                  <Text string={content.heading1} />
                  <h2><Text string={content.heading2} /></h2>
                </div>
                <Link href={content.link_url2} className="site_btn">
                {content.link_text2}
                </Link>
              </div>
              <div className="flex">
                {data.map((item, index) => (
                  <div className="coll" key={index}>
                  <div className="inner">
                    <div className="icon">
                      <img src={cmsFileUrl(item.image)} alt="" />
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
          </div>
        </section>

        <section id="rider" className="p0">
                <div className='contain'>
                    <div className='flex'>
                        <div className='col col3 '>
                            <div className='image uncover'>
                            <img src="/images/bui.png" />
                            </div>
                        </div>
                        <div className='col '>
                            <Text string={content.description2}/>
                            <div className="btn_blk">
                  <Link href={content.link_url3} className="site_btn color">
                   {content.link_text3}
                  </Link>
                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="operations">
            <div className="contain">
                <div className="content_center">
                    <Text string={content.description3}/>
                
                </div>
                <div className="flex">
                  {data1.map((item, index) => (
                    <div className="coll">
                    <div className="inner">
                        <div className="image">
                            <img src={cmsFileUrl(item.image)} alt="" />
                        </div>
                        <div className="text">
                            <Text string={item.text}/>
                        </div>
                    </div>
                </div>

                  ))}
                    
                    
                </div>
            </div>
        </section>

        
        <section id="shipment" className="busines mb">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <Text string={content.description8}/>
                    <div className="btn_blk">
                  <Link href={content.link_url4} className="site_btn">
                    {content.link_text4}
                  </Link>
                </div>
          
              </div>
              <div className="col col2">
                <div className="image">
                  <img src={cmsFileUrl(content.business_image11)} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
