import React from 'react';
import JsLogo from "../images/js.png"
import WebDev from "../images/webDev.png"
import multimedia from "../images/multimedia.png"
import MobileDev from "../images/mobileDev.png"
import marketing from "../images/marketing.png"
import graphicsDesign from "../images/graphicsDesign.png"

function Services() {
    return (
        <div className="container" >
            <div className="row flex-reverse margin-top-50">
                <div className='col'>
                    <h4>Software Development</h4>
                    <p>
                        Any business profits when it makes it presence online.
                        For any brand or business, a website is very crucial and important.
                        A website is a platform to show the best of a business without actually interacting with the clients/customers.
                    </p>
                </div>
                <div className='col'>
                    <img src={WebDev} alt="our_services" />
                    {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
                </div>
            </div>
            <div className="row margin-top-50">
                <div className='col'>
                    <h4>Mobile App Development</h4>
                    <p>
                        Extending to mobile-based services will help your business streamline operations,
                        bring value to the demanding modern customers, and help you reach more customers.
                        We develop mobile apps at the most reasonable costs probably because we know how to do it right.
              </p>
                </div>
                <div className='col'>
                    <img src={MobileDev} alt="our_services" />
                    {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
                </div>
            </div>
            <div className="row flex-reverse margin-top-50">
                <div className='col'>
                    <h4>Digital Marketing</h4>
                    <p>
                        Quit counting fans, followers, and blog subscribers like bottle caps.
                        Think instead about what you’re hoping to achieve with and through the community
                        that actually cares about what you’re doing.
              </p>
                </div>
                <div className='col'>
                    <img src={marketing} alt="our_services" />
                    {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
                </div>
            </div>
            <div className="row margin-top-50">
                <div className='col'>
                    <h4>Graphics Designing</h4>
                    <p>
                        Create a Banner, Advertisement video poster that suits your company and can increase your business profits.
                        Good design's not about what medium you're working in. Its'about thinking hard about what you want to do and what you have
                        to work with before you start
              </p>
                </div>
                <div className='col'>
                    <img src={graphicsDesign} alt="our_services" />
                    {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
                </div>
            </div>
            {/* <div className="row flex-reverse margin-top-50">
            <div className='col'>
              <h4>Multimedia Production</h4>
              <p>
                Multimedia production–the use of various digital canvases such as text, audio, animation, photography, video,
                etc.–allows business owners to present their companies in an engaging and modern light,
                helping them to stand out from competitors and make a more powerful impact when attracting their prospective clients.
              </p>
            </div>
            <div className='col'>
              <img src={multimedia} alt="our_services" />
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div> */}
        </div>

    );
};

export default Services;