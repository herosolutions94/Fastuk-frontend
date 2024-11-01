import { useState } from 'react';
import http from '../../helpers/http';
import Text from "../../components/text";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("contact")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Contact({result}) {
  console.log(result)
  const {content, siteSettings}=result

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        subject: '',
        message: ''
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (API call or other logic)
        console.log('Form Data Submitted: ', formData);
      };
  return (
  <>
  <main>

    <section className="contact-form">
      <div className="contain">
        <div className="content_center">
          <Text string = {content.description1} />
        </div>
        <div className="flex">
          <div className="col col1">
          <Text string ={content.description2} />
          </div>
          <div className="col col2">
            <div className="inner">
              <div className="sec_heading">
                <h3>{content.heading1}</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="email"
                        className="input"
                        required
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="password"
                        className="input"
                        required
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <textarea
                        className="txtArea"
                        rows="4"
                        required
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="btn-box text-center btn_blk">
                      <button className="site_btn color" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact_sec">
      <div className="contain">
        <div className="flex">
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/pin.svg" alt="Map Location" />
              </div>
              <div className="cntnt">
                <h5>{content.sec1_heading_0}</h5>
                <p>Lorance Road 542B, Tailstoi Town 5248 MT, Country</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/envelope.svg" alt="Email Icon"  />
              </div>
              <div className="cntnt">
                <h5>{content.sec1_heading_1}</h5>
                <a href="mailto:abcinfo@gmail.com">abcinfo@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/Phone.svg" alt="Phone Icon" />
              </div>
              <div className="cntnt">
                <h5>{content.sec1_heading_2}</h5>
                <a href="tel:(734) 219-86796">(734) 219-86796</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}
