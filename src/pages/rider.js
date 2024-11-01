import React from 'react'
import http from "../../helpers/http";
import Text from "../../components/text";
import { cmsFileUrl } from "../../helpers/helpers";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("rider")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Rider({result}) {
    console.log(result)
    const {content, siteSettings}=result
    const data = [
        { text: content.sec3_text_0, image: content.sec3_rider_image_0  },
        { text: content.sec3_text_1, image: content.sec3_rider_image_1  },
        { text: content.sec3_text_2, image: content.sec3_rider_image_2  },
        { text: content.sec3_text_3, image: content.sec3_rider_image_3  },
      ];

      const data1 = [
        { text: content.sec4_text_0, image: content.sec4_rider_image_0  },
        { text: content.sec4_text_1, image: content.sec4_rider_image_1  },
        { text: content.sec4_text_2, image: content.sec4_rider_image_2  },
        { text: content.sec4_text_3, image: content.sec4_rider_image_3  },
      ];

  return (
    <div>
        <main>
            <section id="rider">
                <div className='contain'>
                    <div className='flex'>
                        <div className='col col1'>
                            <div className='image'>
                            <img src={cmsFileUrl(content.rider_image1)} />
                            </div>
                        </div>
                        <div className='col col2'>
                            <Text string={content.description1} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="choose1">
            <div className="contain">
                <div className="content_center">
                <Text string={content.description2} />                    
                </div>
                <div className="outer">
                {content.sec_text && content.sec_text.map((item, index) => (

                    <div className="coll">
                        <div className="inner">
                        {item}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        <section id="rider">
                <div className='contain'>
                    <div className='flex'>
                    <div className='col col1 '>
                            <Text string={content.description3} />
                        </div>
                        <div className='col col2'>
                            <div className='image'>
                            <img src= {cmsFileUrl(content.rider_image2)} />
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>

        <section id="perks">
            <div className='contain'>
                <div className='content_center'>
                <Text string={content.description4} />

                </div>
                <div className='flex'>
                    {data.map((item, index) => (
                        <div className='coll'>
                        <div className='inner'>
                            <div className='icon'>
                                <img src={cmsFileUrl(item.image)}/>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    </div>

                    ))}
                    
                    
                </div>
            </div>
        </section>

        <section id="discover">
            <div className="contain">
                <div className="outer">
                    <div className="text">
                        <Text string={content.description5} />
                        <div className="flex">
                            {data1.map((item, index) => (
                                 <div className="coll" key={index}>
                                 <div className="inner">
                                     <div className="icon">
                                         <img src={cmsFileUrl(item.image)} alt="" />
                                     </div>
                                     <h4>{item.text}</h4>
                                 </div>
                             </div>
                            ))}                                                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    </div>
  )
}
