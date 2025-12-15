import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAssetPath } from "../utils/assetPath";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={getAssetPath("/images/Brandghar.png")} alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
A multi-vendor eCommerce app offering a smooth online shopping experience for a wide range of products across Nepal.
              </h2>
              <p className="text-white-50 md:text-xl">
                An eCommerce app built with Flutter, Laravel, Firebase, and MySQL for a fast and smooth shopping experience
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={getAssetPath("/images/Roamify.png")}
                  alt="Roamify- Your Personalize Travel Assistant"
                />
              </div>
              <h2>Roamify - Your Personalize Travel Assistant</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={getAssetPath("/images/SkillXchange.png")} alt="SkillXchange" />
              </div>
              <h2>SkillXchange - A peer to peer skill sharing platform </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
