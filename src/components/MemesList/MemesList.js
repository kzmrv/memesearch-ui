import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { MemesShape } from './memes.model';
import withInfiniteScroll from '../../hoc/with-infinite-scroll';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '500px',
    margin: '50px auto'
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '80%',
    height: 'auto'
  },
  title: {
    color: 'black'
  },
  link: {
    textDecoration: 'none',
    color: 'grey'
  },
  btn: {
    color: 'grey'
  },
  statistics: {
    padding: '0 12px',
    textAlign: 'left'
  },
  comments: {
    paddingLeft: '10px'
  }
};

const MemesList = ({ classes, memeses }) => (
  <div>
    {memeses.map(memes => (
      <div key={memes.id}>
        <Card className={classes.card}>
          <CardContent>
            <a className={classes.link + ' ' + classes.title} href={memes.Url}>
              <h2>{memes.title}</h2>
            </a>
            {memes.media && memes.media.length &&
              <a href={memes.url}>
                <img className={classes.img} src={memes.media[0].url} alt={memes.title} title={memes.title} />
              </a>}
          </CardContent>
          <CardActions>
            <a href={memes.url} className={classes.link + ' ' + classes.btn}>
              Learn More
            </a>
          </CardActions>
          <Typography component="p" className={classes.statistics}>
              <a className={classes.link} href={memes.url}>
                {memes.likes} Points
              </a>
              <a className={classes.link + ' ' + classes.comments} href={memes.url + '#comments'}>
                {memes.commentsCount} comments
              </a>
          </Typography>
        </Card>
      </div>
    ))}
  </div>
);

MemesList.propTypes = {
  memeses: PropTypes.arrayOf(PropTypes.shape({...MemesShape})).isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  memeses: state.memeses
});

export default compose(
  withInfiniteScroll,
  withStyles(styles),
  connect(
    mapStateToProps
  )
)(MemesList);
