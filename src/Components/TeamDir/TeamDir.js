import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdInsertDriveFile } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { TabularList } from "./../TabularList/TabularList";
import "./TeamDir.css";

var userData = require("./../../Assets/users.json");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export function TeamDir() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="top">
        <Container>
          <Row className="page-title">
            <Col xs="8" className="">
              <div className="icon">
                <MdInsertDriveFile />
              </div>
              <div className="title">Team Directory</div>
            </Col>
            <Col xs="4"></Col>
          </Row>

          <Row className="page-controls">
            <Col xs="8">
              <h2>SafeChain Test Agency</h2>
              <div className="sub-header">
                You are an administrator of this team.
              </div>
            </Col>
            <Col xs="4"></Col>
          </Row>
          <Row>
            <div className={classes.root}>
              <AppBar className="tab-bar-clr" position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Active" />
                  <Tab label="Pending" />
                  <Tab label="Deactivated" />
                  <Tab label="Administrators" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <TabularList rows={userData.active} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TabularList rows={userData.pending} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TabularList rows={userData.deactivated} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <TabularList rows={userData.admins} />
              </TabPanel>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
