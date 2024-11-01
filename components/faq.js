import { useState } from 'react';
import { cmsFileUrl } from '../helpers/helpers';
// import upArrow from '/public/images/up.svg';
// import downArrow from '/public/images/down.svg';

const FAQ = ({ faqs, content }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqSection">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faqItem ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="question" onClick={() => toggleFAQ(index)}>
            {faq.ques}
            <span className="icon">
            {faq.faq_image && (
                <img src={cmsFileUrl(faq.faq_image)} alt="FAQ Related" />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="answer">
              <p>{faq.ans}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
