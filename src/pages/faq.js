import React from 'react'
import FAQ from '../../components/faq'
import http from "../../helpers/http";
import Text from "../../components/text";

export const getServerSideProps = async (context) => {
  const result = await http
    .get("faq")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Faq_pg({result}) {
  console.log(result)
  const {content, faqs, siteSettings} = result
  return (
    <>
    <main>
      <section id="faq">
        <div className='contain'>
          <div className='content_center'>
            <Text string= {content.description1}/>
          </div>
          < FAQ faqs = {faqs} content = {content}/>
        </div>
      </section>
  
    </main>
    </>
  )
}
