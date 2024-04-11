// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero2 from "./Hero2";

const Hero = () => {
  return (
    <main>
      <div className="body-section">
        <div className="text-content">
          <h1>Hungry for Something New?</h1>
          <p>
            🍔🍜🍰 Craving delicious recipes from around the world? Look no
            further than FlavorFusion! Our culinary haven offers a diverse range
            of mouthwatering dishes to satisfy every craving. From comforting
            classics to adventurous creations, we have got it all. And the best
            part? Its all free! So why wait? Start exploring now and treat your
            taste buds to a world of flavor! 🌎🍽️
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="img-content">
          <img src="/images/img_1.jpg" alt="image" />
          <img src="/images/img_2.jpg" alt="image" />
          <img src="/images/img_3.jpg" alt="image" />
          <img src="/images/img_4.jpg" alt="image" />
          
        </div>
      </div>
      <Hero2 />
    </main>
  );
};

export default Hero;
