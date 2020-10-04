import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./role-panel.scss";

const RolePanel = ({ title, roles }) => {
  return (
    <div>
      <Accordion id="expansion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="expansion-heading">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expansion-p">
            {roles.map(rol => {
              return (
                <React.Fragment>{rol} <br /></React.Fragment>
                ) 
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RolePanel;
