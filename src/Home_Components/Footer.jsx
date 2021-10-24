// import { useEffect } from "react";
// import { useState } from "react";
import { ReactComponent as Linkedin } from "../images/Icons/linkedin.svg";
import { ReactComponent as GitHub } from "../images/Icons/github.svg";
import { ReactComponent as Facebook } from "../images/Icons/facebook.svg";
import { ReactComponent as Twitter } from "../images/Icons/twitter.svg";
import "./Footer.css";
const Footer = () => {

  const socialLinks = [
    {id:"github",
      link:"https://github.com/Elhamdorudian",
     icon: <GitHub className="sIcon"/>
    },

    {id:"linkedin",
    link:"https://linkedin.com/in/fatemeh-doroodian-7376a683",
   icon: <Linkedin className="sIcon"/>
    },

    {id:"facebook",
     ink:"http://facebook.com",
     icon: <Facebook className="sIcon"/>
    },

    {id:"twitter",
     link:"http://twitter.com",
     icon: <Twitter  className="sIcon" />
    }
  ];


  // const [socialLinks, setSocialLinks] = useState([]);
  // useEffect(() => {
  //   const getLink = async () => {
  //     const res = await fetch("http://localhost:8500/socialLinks");
  //     if (!res.ok) {
  //       throw Error("The resource has not been found!");
  //     } else {
  //       const data = await res.json();
  //       return data;
  //     }
  //   };
  //   getLink()
  //     .then((data) => {
  //       setSocialLinks(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <footer>
      <div>
        <div className="footer row">
          <div className="footer-brand col-md-6 order-md-1">
            <div className="copy-right">
              <h3>Learning is fun</h3>
              <p>
                Copyright &copy; <span id="year"></span>
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center order-md-3">
            <div className="social px-5">
              <div className=" footer-social d-flex justify-content-center">
                {socialLinks
                .map(item => 
                  <div className="p-3" key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                </div>

                  )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
