import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  PapperBlock  from '../../components/PapperBlock/PapperBlock';
import styles from './helpSupport-jss';

class Company extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <PapperBlock title="PRIME LEAD CONSULTANCY" icon="ios-help-circle-outline" whiteBg desc="STUDY ABROAD WITH PRIME LEAD CONSULTANCY.">
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PRIME LEAD CORE VALUES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                  (1) TOLERANCE <br/>
                  (2) INTEGRITY <br/>
                  (3) INNOVATION <br/>
                  (4) OPEN COMMUNICATION <br/>
                  (5) LOVE <br/>
                  (6) TEAMWORK <br/>
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PRIME LEAD VISION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Introduce more options of courses with practical attachment offered by various foreign institutions.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PRIME LEAD MISSION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Operate according to the highest standards to guide students who are planning to study abroad in line with the laws of Zimbabwe.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PRIME LEAD POLICIES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                  The organization is governed by a Board of Trustees. On daily basis the organization is run by the 
                  Executive Director assisted by the Finance and Administration personnel. Programme implementation is conducted by programs 
                  officers, interns and community volunteers as well as other stakeholders at large.For effective management, the organization
                  has the following policies:
                  <br/>
                  Human Resource Manual Policy<br/>
                  Finance and Procurement  Procedures manual <br/>
                  Child Protection Policy <br/>
                  Gender Policy <br/>
                  Sexual Harassment Policy <br/>
                  Vehicle Policy <br/>
                  Per diem Policy
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PRIME LEAD ADMINISTRATION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                The organization is governed by a board of Trustees with with several members and has a management structure headed by a Director. 
                Currently the organization has 13 members of staff. Since PRIME LEAD was founded, it has been funded by a number of partners. 
                So far PRIME LEAD has invested more time in getting scholarships to different countries such as India, Poland, Germany, Turkey and Russia.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </PapperBlock>
    );
  }
}

Company.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Company);
