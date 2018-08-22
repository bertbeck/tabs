
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppData from '../services/AppData';


export default class RLM_Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {formValues: props.formValues || AppData.formValues , value: props.value};
    this.state.formValues[props.name] = props.value;
  }

  onChange() {
    this.setState ({value: !this.state.value});
  }

  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.value}
            onChange={this.onChange}
            value="checkedB"
            color="primary"
          />
        }
        label={this.props.label}
      />
    );
  }
}

