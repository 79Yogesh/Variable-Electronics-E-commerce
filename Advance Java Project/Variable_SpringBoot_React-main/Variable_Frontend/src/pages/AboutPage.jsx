
import React from "react";
import { Footer } from "../components";
import "./About.css"; // Import CSS file for custom styles

const About = () => {
    const contacts = [
      {
          name: "Purnendu Bhattacharjee",
          image: "https://i.postimg.cc/3Rn1K90Q/251a67c6-18f4-4935-ae3e-42d46c83956a.jpg",
          socialMedia: {
            linkedin: "https://www.linkedin.com/in/purnendubhattacharjee/",
          },
        },
        {
          name: "Yogesh Patel",
          image: "https://i.postimg.cc/cLSFBKSj/49d8ed9c-b936-4c1d-bf96-4fd2d3775226.jpg",
          socialMedia: {
            linkedin: "https://www.linkedin.com/in/yogesh-patel-8b426b229/",
          },
        },
        {
          name: "Shouvik Dey",
          image: "https://i.postimg.cc/rpL6V5wn/230940320107-Shouvik-Dey-KH.jpg",
          socialMedia: {
            linkedin: "https://www.linkedin.com/in/shouvik-dey-91841122a/",
          },
        },
        {
          name: "Aniket Tawade",
          image: "https://i.postimg.cc/PxgWfcfc/DSC-0087-1.jpg",
          socialMedia: {
            linkedin: "https://www.linkedin.com/in/aniket-tawade-2007b521b/",
          },
        },
        {
          name: "Anshul Massey",
          image: "https://i.postimg.cc/RZSc0w9M/f65a7a70-b8cf-4069-b66c-bc11840446af.jpg",
          socialMedia: {
            linkedin: "https://www.linkedin.com/in/anshul-d-massey-898747239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4w9KQW%2BjQg24F1Tfbi3lCQ%3D%3D",
          },
        },
      ];
    
      return (
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-8 text-center">
                <img src="https://i.postimg.cc/mkVgpznw/Tech-No01-1.jpg" alt="Tech Image" className="img-fluid mb-2 mt-2" style={{ width: '400px', height: '100px' }}  />
                <p className="font-weight-bold fs-18">
                  Welcome to Variable, your tech haven for bespoke electronics! Dive into our e-commerce realm, a haven for enthusiasts seeking tailor-made computers and smartphones. Empowering your journey is our state-of-the-art chatbot, meticulously designed to navigate the intricacies of PC customization. Harness the power of RazerPay for seamless, tech-driven transactions, ensuring swift and secure payments. At Variable, we transcend traditional limits, bringing innovation to the forefront of your shopping experience. Immerse yourself in the future of electronics, where cutting-edge technology meets personalized craftsmanship. Unleash your tech desires with Variable—a realm where every click unlocks a world of limitless possibilities.
                </p>
              </div>
            </div>
            <h1 className="text-center mb-4">Team Variable</h1>
            <div className="row">
              {contacts.map((contact, index) => (
                <div key={index} className={`col-md-4 mb-3 ${index === contacts.length - 1 ? 'offset-md-4' : ''}`}>
                  <div className="card text-center">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="card-img-top custom-img" // Added custom class for image styling
                    />
                    <div className="card-body">
                      <h2 className="card-title">{contact.name}</h2>
                      <div className="social-media-links">
                        {contact.socialMedia.linkedin && (
                          <a
                            href={contact.socialMedia.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted"
                          >
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Footer/>
          </div>
        );
  };

export default About;
