import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./panel.scss";

const RolePanel = ({ title, branches }) => {
  return (
    <div>
      <Accordion id="expansion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="expansion-heading">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>          
            {branches.map(branch => {
              return (
                <Typography className="expansion-p">
                  {branch.map(rol => <React.Fragment>{rol} <br/></React.Fragment>)}                  
                </Typography>
                ) 
            })}          
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RolePanel;
