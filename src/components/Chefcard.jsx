// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Chefcard = ({ chef }) => {
  // Function to get the image URL based on chef's name
  const getImageUrl = (name) => {
    switch (name) {
      case "Juan Perez":
        return "images/avg.png";
      case "David Smith":
        return "images/avg1.png";
      case "Santiago Rodriguez":
        return "images/avg2.png";
      case "Rafael Gonzalez":
        return "images/avg3.png";
      case "Wei Chen":
        return "images/avg4.png";
      case "Ajay Patel":
        return "images/avg5.png";
      default:
        return "images/avg6.png"; // Default image in case name doesn't match
    }
  };

  return (
    <main>
      <div className='chef-container'>
        <div className='chef-img'>
          <img src={getImageUrl(chef.name)} alt="chef-img" />
        </div>
        <div className='chef-text'>
          <h3 className='chef-name'>{chef.name}</h3>
          <p className='recipe'>Recipes : {chef.recipes}</p>
          <p className='cuisines'> Specialties : {chef.cuisines}</p>
          <div className='chef-icons'>
            <FaFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <FaTwitter className='icon' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chefcard;
