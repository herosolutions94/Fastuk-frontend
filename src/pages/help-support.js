import React from "react";
import http from "../../helpers/http";
import Text from "../../components/text";

export const getServerSideProps = async (context) => {
  const result = await http
    .get("help-support")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Help_support({result}) {
  console.log(result)
  const {content, siteSettings}=result

  return (
    <div>
      <main>
        <section id="policy">
          <div className="contain">
            <div className="outer">
              <div className="content_center">
                <div className="title">{content.heading1}</div>
                <h2>{content.heading2}</h2>
              </div>
              <Text string = {content.description1}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
