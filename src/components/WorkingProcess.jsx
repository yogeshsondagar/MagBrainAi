import React from 'react'

const processData = [
  {
    step: "01",
    title: "Train Your Agent",
    description: "Upload your FAQs, product information, documents, and tone preferences. Our system will build an AI agent trained just for you."
  },
  {
    step: "02",
    title: "Deploy via API or Widget",
    description: "Embed your custom agent on your website, product, or platform using your unique API key or JavaScript snippet."
  },
  {
    step: "03",
    title: "Track & Improve with Insights",
    description: "Access real-time analytics to understand customer behavior, improve your services, and retrain your agent as needed."
  }
];

function WorkingProcess() {
  return (
    <div className="process-wrap pt-50 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="process-content" data-aos="fade-up" data-aos-delay="100">
                            <div className="content-title">
                                <div className="sub-title-2">
                                    <p>Working Process</p>
                                </div>
                                <h2>From Idea to Intelligent Agent — In Minutes.</h2>
                                <p>MagBrain AI makes it effortless to build, train, and launch your own AI assistant. 
                                    Whether you're solving support queries or engaging website visitors, our process is designed to be simple, 
                                    fast, and scalable for every business.</p>
                            </div>
                            <div className='process-item-wrap'>
                                {processData.map((item, index) => (
                                    <div className="process-item" key={index}>
                                        <span>{item.step}</span>
                                        <div className="process-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="img-wrapper" data-aos="fade-zoom-in" data-aos-delay="100">
                            <div className="img-box">
                                <img className="image-box-item" src="assets/img/all-img/pricing-image-3.png" alt="Demo"/>
                                <img className="image-box-item" src="assets/img/all-img/pricing-image-2.png" alt="Demo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WorkingProcess   