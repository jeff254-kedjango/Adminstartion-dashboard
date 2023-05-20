import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I use this app on desktop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! We have a desktop version that can be delivered and intergrated upon contact. 
            Let us know when to deliver on the portfolio contact page. Or email: kwemangenyagrowa@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can this app work with a server?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! This app can connect and work with any form of server / api or database.
            Our company is willing to help with any form of integration needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What other third party capabilities can be intergrated on the app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently we are working on a wholistic staff management system that will have other features like, 
            confrence call, departmental chatroom and many others. Updates coming soon. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I give access to other team members?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Upon intergration of the server, a login / signup page can be included upon the users request. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How many users can this app accomodate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This largely depends on the type/capability of server integrated on the system.
            It's upon the user to decide the upper limit of this app.
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
