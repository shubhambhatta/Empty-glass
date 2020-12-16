import React from "react"
import { FaEnvelope, FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="credit">
        <a href="mailto:info@emptyglass.com"><span><FaEnvelopeOpen color="#fff" /></span> info@emptyglass.com </a>
        <a href=": "><span><FaMapMarkerAlt color="#fff" /></span> 2194, NSW, Australia</a>
        <a href="tel: +61 0451070133"><span><FaPhoneAlt color="#fff" /></span> +61 0451070133 </a>
      </div>
      <div className="credit">
        <p>
          © 2020 Empty Glass
        </p>
      </div>
      <div className="social">
        {/* {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          )
        })} */}
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: left;
  display: flex;
  justify-content:space-between;
  align-items:center;

  .credit {
    display:flex;
    flex-direction: column;
    gap:0.35rem;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    margin-left: 3rem;

    svg{
      margin-right:0.3rem;
    }
    p{
      font-size: 1rem;
      padding:4px;
      margin:0
    }
    span{
      padding: 0.25rem;
    }
    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
    }
  }
  .social{
    margin-right:3rem;
  }
  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
