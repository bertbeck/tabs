import React from 'react';
import Dict from './data.json';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

function TabContainer(props) {
    return (      
      <Grid container alignItems='flex-start' justify='space-between' style={{padding: 24, background:'white'}}>
        {props.children.map(c=> <Grid xs item style={{minWidth: 240, textAlign: 'left'}}>{c}</Grid>)}
      </Grid>
    );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,    
    },
    rootScrollable: {       
        overflow: "hidden !important"
    },
    tabsIndicator: {
        backgroundColor: '#1890ff', 
        marginBottom: 6,
    },
    appBar: {
        backgroundColor: '#00b0ff',
        color: 'black',
    }
});

const tabStyle = {
    default_tab:{
        color: '#ffffff'        
    },
    active_tab:{
      textColor: '#eeeeee'
    }
};
  

class ScrollableTabsButtonAuto extends React.Component {

  state = {
    value: 0,
    data:Dict.matchItems,
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

    return (
      <div className={classes.root}>      
         <AppBar position="static" className={classes.appBar}>
          <Tabs
            classes={{ 
              root: classes.rootScrollable,
              selected: classes.tabSelected, 
              indicator: classes.tabsIndicator,               
            }}
            value={value}            
            onChange={this.handleChange2}            
            textColor="primary"            
            scrollable
            scrollButtons='on'
            centered
          >
          {
            labels.map((ele)=>{
              const id = this.getIndex(ele);
             return <Tab label={ele} style={this.getStyle(value === id)}/>
            })
          }
          </Tabs>
        </AppBar>
        <TabContainer >
        {
          this.state.data[labels[value]].map(ele => {
            return <Checkbox label={ele} value={true} name={ele}/>
          })
        }        
        </TabContainer>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);