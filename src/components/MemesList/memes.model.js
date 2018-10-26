import PropTypes from 'prop-types';

export class Memes {
  constructor(memes) {
    this.url = memes.url || null;
    this.permalink = memes.permalink || null;
    this.title = memes.title || null;
    this.likes = memes.likes || 0;
    this.published = memes.published || null;
    this.media = memes.media || [];
    this.source = memes.source || null;
    this.originalId = memes.originalId || null;
    this.originalType = memes.originalType || null;
    this.commentsCount = memes.commentsCount || 0;
    this.tags = memes.tags || [];
    this.id = memes.id || null;
  }
}

export const MemesShape = {
  url: PropTypes.string,
  permalink: PropTypes.string,
  title: PropTypes.string,
  likes: PropTypes.number,
  published: PropTypes.string,
  media: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  })),
  source: PropTypes.string,
  originalId: PropTypes.string,
  originalType: PropTypes.string,
  commentsCount: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string
};
