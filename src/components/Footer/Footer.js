import React from 'react';
import FooterWrapper from './Footer.style';

import Illustration from '../../assets/svg/illustration.svg';

function FooterLinkBlock({ data }) {
  return (
    <div>
      <p className="footer__headertext">{data.title}</p>
      <p className="footer__text">
        {
          data.links.map((d, index) => {
            return (
              <React.Fragment key={Math.random()}>
                <a  href="#">{d}</a>
                <br/>
              </React.Fragment>
            )
          })
        }
      </p>
    </div>
  )
}

function Ambassadors() {
  return (
    <FooterWrapper id={"preorder"}>
      <img className="footer_illustration" src={Illustration} width="30%" />
      <img className="footer_shoe" src='./assets/images/footer_shoe.png' />

      <div className="footer__preorder">
        <h2>Pre-order</h2>
        <div style={{ position: 'relative' }}>
          <i className="email-icon fas fa-envelope"></i>
          <input className="preorder-email" placeholder="Enter your email" type="email" />
        </div>
      </div>

      <section className="footer__container">
        <div className="footer__content">
          <FooterLinkBlock data={{
            title: 'Nike',
            links: [
              "About", "Help", "Privacy", "Terms"
            ]
          }} />
          <FooterLinkBlock data={{
            title: 'Contact',
            links: [
              "Email", "Phone", "Walk In"
            ]
          }} />
          <FooterLinkBlock data={{
            title: 'Legal',
            links: [
              "License", "Payment", "Legal Notice"
            ]
          }} />
        </div>

        <div className="footer__icons">
          <i className="fab fa-amazon"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-paypal"></i>
        </div>

        <span class="author-info">Created By <a href="https://anuraghazra.github.io">@anuraghazra</a></span>
      </section>

    </FooterWrapper>
  )
}

export default Ambassadors;
