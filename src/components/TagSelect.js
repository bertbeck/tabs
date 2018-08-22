import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from './Checkbox';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 600,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    // borderBottom: '1px solid #e8e8e8',
    borderTop: '1px solid red',
    borderBottom: '1px solid red',
    height: 25,
    fontSize: 12,
    padding: 0,
    margin: 0,
    width: 600,
    backgroundColor: '#5393ff',
    color: 'white',
    typography: {
      padding: theme.spacing.unit * 1,
      color: 'red'
    },
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    height: 100,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 1,
    typography: {
      padding: theme.spacing.unit * 1,
      color: 'red'
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: 'red',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 1,
    color: 'red'
  },
});

class ScrollableTabsButtonAuto extends React.Component {

  state = {
    value: 0,
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange2 = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div style={{width:'80%'}}>
    <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            value={value}
            onChange={this.handleChange2}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
            style={{ minHeight: '25px'  }}
          >
            <Tab label="Property2" style={{ color: 'white', minHeight: '25px'  }} />
            <Tab label="Location" style={{ color: 'white', minHeight: '25px'  }} />
            <Tab label="House Style"  style={{ color: 'white', minHeight: '25px'  }} />
            <Tab label="Schools" style={{ color: 'white', minHeight: '25px'  }} />
            <Tab label="Special Features"  style={{ color: 'white', minHeight: '25px'  }} />
            <Tab label="History" style={{ color: 'white', minHeight: '25px' }}/>
          </Tabs>
        </AppBar>
        {value === 0 &&
        <TabContainer style={{height:20}}>
          <Checkbox label="Estatexx" value={true} name="Estate" />
          <Checkbox label="Penthouse" value={true} name="Penthouse" />
          <Checkbox label="Ranch" value={true} name="Ranchh" />
          <Checkbox label="Colonial" value={true} name="Colonial" />
        </TabContainer>}

        {value === 1 &&
        <TabContainer>
          <Checkbox label="USA North East" value={true} name="North East" />
          <Checkbox label="USA South East" value={true} name="South East" />
          <Checkbox label="USA Midwest" value={true} name="Midwesth" />
          <Checkbox label="USA West Coast" value={true} name="West Coast" />
          <Checkbox label="Europe" value={true} name="West Coast" />
          <Checkbox label="Middle East" value={true} name="West Coast" />
          <Checkbox label="China" value={true} name="West Coast" />

        </TabContainer>}
        {value === 2 &&
        <TabContainer>
            <Checkbox label="Colonial" value={true} name="Colonial" />
            <Checkbox label="Ranch" value={true} name="Ranch" />
            <Checkbox label="Walkout Ranch" value={true} name="Walkout Ranch" />
            <Checkbox label="Colonial" value={true} name="Colonial" />
        </TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
