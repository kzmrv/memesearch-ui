import React from 'react';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';

import debounce from '../../utils/debounce';

import { fetchMemeses } from '../../actions';

export default (Component) => {
  class WithInfiniteScroll extends React.PureComponent {
    constructor(props) {
      super(props);
      this.onScroll = debounce(this.onScroll, 300);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const { scrollId, fetchMemeses, isScrollable, query } = this.props;
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (isScrollable && scrolledToBottom && scrollId) {
        fetchMemeses({ scrollId, prevQuery: query, query });
      }
    }

    render() {
      const { fetchMemeses, scrollId, isScrollable, query } = this.props;

      return (
        <div>
          <Component {...this.props} />

          {isScrollable &&
            <Typography
              align="center"
              onClick={() => fetchMemeses({ prevQuery: query, query, scrollId })}
            >
              ...
            </Typography>
          }
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    scrollId: state.scrollId,
    isScrollable: state.isScrollable,
    query: state.query
  });

  return connect(
    mapStateToProps,
    { fetchMemeses }
  )(WithInfiniteScroll);
}
