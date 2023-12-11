import { FC, useEffect } from "react";
import GeneralFooter from "../../layouts/footer/general-footer.component";
import HeroSectionContainer from "../HeroSectionContainer";
import DescriptionSectionContainer from "../DescriptionSectionContainer";
import OurTeamsSectionContainer from "../OurTeamsSectionContainer";
import RecreationalEventsSectionContainer from "../RecreationalEventsSectionContainer";
import ContactUsSectionContainer from "../ContactUsSectionContainer";
import NewsSectionContainer from "../NewsSectionContainer";

const LandingComponent: FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');

        if (targetId !== null) {
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);
  return (
    <>
      <HeroSectionContainer/>
      <DescriptionSectionContainer/>
      <OurTeamsSectionContainer/>
      <RecreationalEventsSectionContainer/>
      <ContactUsSectionContainer/>
      <NewsSectionContainer/>
      <GeneralFooter />
    </>
  );
};

export default LandingComponent;
