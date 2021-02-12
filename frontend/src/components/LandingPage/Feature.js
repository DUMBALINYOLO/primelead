import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import styles from './landingStyle-jss';


let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

class Feature extends React.Component {
  state = {
    featureList: [
      createFeatureData('ion-ios-infinite-outline', 'Vision', 'Introduce more options of courses with practical attachment offered by various foreign institutions.'),
      createFeatureData('ion-ios-flower-outline', 'Mission', 'Operate according to the highest standards to guide students who are planning to study abroad in line with the laws of Zimbabwe.'),
      createFeatureData('ion-ios-ionic-outline', 'Lorem ipsum dolor', 'Nulla lobortis nunc vitae nisi semper semper. Sed mi neque, convallis at ipsum at, blandit pretium enim.')
    ]
  }

  render() {
    const { classes, slideMode } = this.props;
    const { featureList } = this.state;
    return (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="PRIMELEAD" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            { featureList.map(item => (
              <Grid key={item.id.toString()} item xs={12} md={4}>
                <Typography component="h4" variant="h6">
                  <span className={classes.icon}>
                    <i className={item.icon} />
                  </span>
                  {item.title}
                </Typography>
                <Typography className={slideMode ? classes.colorWhite : ''}>
                  {item.desc}
                </Typography>
              </Grid>
            )) }
          </Grid>
        </div>
      </div>
    );
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);
