import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import GeneralFooter from "../../layouts/footer/general-footer.component";
import HeroSectionContainer from "../HeroSectionContainer";
import DescriptionSectionContainer from "../DescriptionSectionContainer";
import OurTeamsSectionContainer from "../OurTeamsSectionContainer";
import RecreationalEventsSectionContainer from "../RecreationalEventsSectionContainer";
import ContactUsSectionContainer from "../ContactUsSectionContainer";
import NewsSectionContainer from "../NewsSectionContainer";

const LandingComponent: FC = () => {
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
