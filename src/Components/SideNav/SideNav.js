import React from "react";
import { NavLink } from "react-router-dom";
import { MdInsertDriveFile, MdSettings, MdHelp } from "react-icons/md";
import { Support } from "./../Support/Support";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { MdExpandMore } from "react-icons/md";
import "./Sidenav.css";

export const SideNav = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="nav-box">
      <div className="title">MENU</div>
      <ul className="un-list">
        <li className="value">
          <NavLink to="/orders" activeClassName="selected">
            <div className="icon-sn">
              <MdInsertDriveFile />
            </div>
            Orders
          </NavLink>
        </li>

        <li className="value">
          <a onClick={handleClickOpen}>
            <div className="icon-sn">
              <MdHelp />
            </div>
            Support
          </a>

          <Support open={open} closeDialog={() => handleClose()} />
        </li>

        <li className="value">
          <div className="ex" to="/admin">
            <ExpansionPanel defaultExpanded={true} className="exp-pnl">
              <ExpansionPanelSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="exp-summary"
              >
                <Typography>
                  <span className="icon-sn">
                    <MdSettings />
                  </span>
                  Administration
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="exp-details">
                <div className="sub-route">
                  <NavLink
                    className="value-sub"
                    to="/admin/users"
                    activeClassName="selected"
                  >
                    <div className="icon-sn">
                      <MdInsertDriveFile />
                    </div>
                    Team Directory
                  </NavLink>
                </div>
                <div className="sub-route">
                  <NavLink
                    className="value-sub"
                    to="/admin/escrow"
                    activeClassName="selected"
                  >
                    <div className="icon-sn">
                      <MdInsertDriveFile />
                    </div>
                    Escrow Accounts
                  </NavLink>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </li>
      </ul>
    </div>
  );
};
