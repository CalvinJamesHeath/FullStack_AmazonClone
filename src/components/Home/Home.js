import React from "react";
import Product from "../Products/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt="home"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="SAMSUNG 55-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in (QN55Q80TAFXZA, 2021 Model)"
            price={459.99}
            img="https://m.media-amazon.com/images/I/61DIUfDxBtL._AC_UY218_.jpg"
            rating={4}
            id="90829331"
          />
          <Product
            title="Hisense 55-Inch Class H8 Quantum Series Android 4K ULED Smart TV with Voice Remote (55H8G, 2020 Model)"
            price={479.99}
            img="https://m.media-amazon.com/images/I/91vqwjenGsL._AC_UY218_.jpg"
            rating={5}
            id="90829332"
          />
        </div>
        <div className="home__row">
          <Product
            title="Native Instruments Maschine Mikro Mk3 Drum Controller"
            price={260}
            img="https://m.media-amazon.com/images/I/81r1tsETapL._AC_UL320_.jpg"
            rating={3}
            id="90829333"
          />
          <Product
            title="Edifier R1280T Powered Bookshelf Speakers - 2.0 Stereo Active Near Field Monitors - Studio Monitor Speaker - Wooden Enclosure - 42 Watts RMS"
            price={99.99}
            img="https://m.media-amazon.com/images/I/71o5w0ZfptL._AC_UL320_.jpg"
            rating={2}
            id="90829334"
          />{" "}
          <Product
            title="DJI Mini 2 Fly More Combo – Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera"
            price={586.79}
            img="https://m.media-amazon.com/images/I/71wfsfmD-UL._AC_UL320_.jpg"
            rating={3}
            id="90829335"
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
            id="90829336"
          />
        </div>
        <div className="home__row">
          <Product
            title="Iphone 12 Pro Max Unlocked 256gb memory + Apple Care | 5G Smartphone"
            price={1299.99}
            img="https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_12ProMax.png"
            rating={5}
            id="90829337"
          />
          <Product
            title="Samsung Galaxy S21 Ultra 5G, Factory Unlocked Cell Phone, 8K Video 128GB"
            price={999.99}
            img="https://m.media-amazon.com/images/I/61bLefD79-L._AC_UY218_.jpg"
            rating={4}
            id="90829338"
          />
          <Product
            title="Xiaomi Redmi Note 9 Pro 64GB + 6GB RAM, 6.67, 64MP AI Quad Camera"
            price={254}
            img="https://m.media-amazon.com/images/I/61EE6j8GHvL._AC_UY218_.jpg"
            rating={3}
            id="90829339"
          />
          <Product
            title="Nokia 225 Unlocked 4G Cell Phone, Black (AT&T/T-Mobile/Cricket/Tracfone/Simple Mobile)"
            price={49.99}
            img="https://m.media-amazon.com/images/I/71V7nMArbIL._AC_UY218_.jpg"
            rating={1}
            id="90829330"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
