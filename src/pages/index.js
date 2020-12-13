import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"
import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"
import JsLogo from "../images/js.png"
import WebDev from "../images/webDev.png"
import multimedia from "../images/multimedia.png"
import MobileDev from "../images/mobileDev.png"
import marketing from "../images/marketing.png"
import graphicsDesign from "../images/graphicsDesign.png"
import '../app.css';

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query Images{
  //       image: file(relativePath: { eq: "service_image.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  //   `);

  return (
    <>
      <Layout>
        <Banner />
        <TextBlock
          id="about"
          title="Developing a new business is never easy, but we are here to help"
          paragraph="With a super-fast & tallented experts in Empty-Glass you have the perfect platform to get your idea off the ground. Its the perfect place to help turn your idea into a reality."
        >
          <Link to="perks" smooth={true} duration={500}>
            <Button label="Tell Me More" cta="Tell Me More!" />
          </Link>
        </TextBlock>
        <TextBlockImg
          id="perks"
          title="We have the tools to help you suceed"
          subtitle="Empty-Glass is perfect for helping to to start and grow your business. As
          you begin to gain new clients and expand you will see the benefits of
          a super-fast Gatsby website"
        >
          <div className="flex-container trio-block">
            <Perk
              img={perk1Img}
              alt="Super fast speed increases"
              title="Speedy"
              content="Super-fast delivery times ensure your business is not affected"
            />
            <Perk
              img={perk2Img}
              alt="Great savings to be made"
              title="Affordable"
              content="A choice of packages to suit every business type and size"
            />
            <Perk
              img={perk3Img}
              alt="Super fast speed increases"
              title="Friendly"
              content="Advisors who are available 24/7, all with exprt knowledge"
            />
          </div>
        </TextBlockImg>
        <Packages
          title="Our Services"
          para="Choose the perfect solution for you. With benefits to suit all budgets Empty-Glass can offer amazing value and expert advice"
        />
        {/* <IconContext.Provider
            value={{
              color: "#7FFF00",
              size: "1.2em",
              style: { verticalAlign: "middle", marginRight: "5px" },
            }}
          > */}
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
        {/* <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package> */}
        {/* </IconContext.Provider> */}
        {/* </Packages> */}
        <div>

        </div>
        <Contact
          id="contact"
          title="Contact us today and see how we can help your business grow"
          subtitle="Every second counts when you're looking to get your new business started. Drop us a message and one of our representatives will be in contact"
        />
      </Layout>
    </>
  )
};
export default Index;