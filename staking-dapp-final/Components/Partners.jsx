import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Team dNexus",
      image: "img/partners/logo.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo2.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo3.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo4.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo5.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo6.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo7.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
    {
      name: "Team dNexus",
      image: "img/partners/logo8.svg",
      url: "https://www.Team dNexus/pro-nft-marketplace",
    },
  ];
  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
            <div className="section__title">
              <h2>Our partners</h2>
              <p>
                We take pride in collaborating with our partners who help us
                provide the best services to our clients. If you'd like to
                become our partner, please
                <a href="#ask">contact us.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-lg-3">
              <a href={partner.link} className="partner">
                <img src={partner.image} alt="" />
                <p>{partner.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
