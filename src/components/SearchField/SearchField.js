import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import { fetchMemeses } from '../../actions';

const styles = theme => ({
  wrapper: {
    width: '80%',
    color: '#fff'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '80%',
    color: '#fff',
    '& label': {
      color: '#fff'
    },
    '& .MuiFormLabel-root-89.MuiInputLabel-root-82': {
      color: '#fff'
    },
    '& > div:after': {
      borderBottom: '2px solid #fff'
    },
    '& .MuiInput-underline-100:before': {
      borderBottom: '2px solid #ddd'
    },
    '& .MuiInput-underline-100:after': {
      borderBottom: '2px solid #ddd'
    },
    '& > div > input': {
      color: '#fff'
    }
  },
});

class SearchField extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchedValue: ''
    };

    props.fetchMemeses({ prevQuery: null, query: '', scrollId: null });
  }

  handleChange(event) {
    this.setState({
      searchedValue: event.target.value,
    });
  };

  onKeyPress(event) {
    if (event.key === 'Enter') {
      const { query, scrollId } = this.props;
      this.props.fetchMemeses({ prevQuery: query, query: this.state.searchedValue, scrollId });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <TextField
          id="searchedValue"
          label="Search for memes..."
          className={classes.textField}
          value={this.state.searchedValue}
          onChange={$event => this.handleChange($event)}
          onKeyPress={$event => this.onKeyPress($event)}
          margin="normal"
        />
      </div>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchMemeses: PropTypes.func
};

export default compose(
  withStyles(styles),
  connect(
    () => ({}),
    { fetchMemeses }
  )
)(SearchField);
