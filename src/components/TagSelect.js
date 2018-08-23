import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from './Checkbox';
import Dict from './data.json';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ textAlign: 'left', padding: 8 * 3 }}>
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
    color: 'white',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    // borderBottom: '1px solid #e8e8e8',
    //borderTop: '1px solid red',
    //borderBottom: '1px solid red',
    height: 25,
    fontSize: 12,
    padding: 0,
    margin: 0,
    width: 600,
    backgroundColor: '#00b0ff',
    color: 'black',
    typography: {
      padding: theme.spacing.unit * 1,
      color: 'red'
    },
  },
  tabsIndicator: {
    //backgroundColor: '#1890ff',
    color:"#eeeeee"
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    height: 100,
    backgroundColor:"red",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 1,
    typography: {
      padding: theme.spacing.unit * 1,
      //color: 'red'
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
      color: '#eeeeee',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {
    color: 'red'
  },
  typography: {
    padding: theme.spacing.unit * 1,
    color: 'red'
  },
});

const tabStyle = {
  default_tab:{
      color: '#ffffff',
      minHeight:'25px'
  },
  active_tab:{
    textColor: '#eeeeee',
    minHeight:'25px'

  }
};

class ScrollableTabsButtonAuto extends React.Component {

  state = {
    value: 0,
    id:0,
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    data:Dict.data,
    };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  getStyle (isActive) {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab
  }

  handleChange2 = (event, value) => {
    this.setState({ value });
  };
  getIndex(ele){
    const labels = Object.keys(this.state.data);
    for(let i = 0; i < labels.length; i++) {
      if(labels[i] == ele) {
        return i;
      }
    }
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const labels = Object.keys(this.state.data);
    let count = 0;
    console.log(this.state.id);
    console.log(value);
    return (
      <div style={{width:'80%'}}>
    <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            classes={{ root: classes.tabsRoot,  selected: classes.tabSelected, indicator: classes.tabsIndicator }}
            value={value}
            onChange={this.handleChange2}
            indicatorColor="primary"
            textColor="primary"
            style={{ minHeight: '35px' }}
            scrollable
            scrollButtons="off"
          >
          {
            labels.map((ele)=>{
              const id = this.getIndex(ele);
             return <Tab label={ele} style={this.getStyle(value === id)}/>
            })
          }
          </Tabs>
        </AppBar>

        <TabContainer style={{height:20}}>
        {
          this.state.data[labels[value]].map(ele => {
            return <Checkbox label={ele} value={true} name={ele}/>
          })
        }
        </TabContainer>

        {/* {value === 1 &&
        <TabContainer>
          <Checkbox label="Beach Living" value={true} name="Beach Living" />
          <Checkbox label="Castle Living" value={true} name="Castle Living" />
          <Checkbox label="Country Living" value={true} name="Country Living" />
          <Checkbox label="Desert Living" value={true} name="Desert Living" />
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
        {value === 6 && <TabContainer>Item Seven</TabContainer>} */}
      </div>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
