import { getMemeses as getMemesesFunc } from '../services/memes';

export const getMemeses = ({ memeses, scrollId, query }) => ({
  type: 'GET_MEMESES',
  memeses,
  scrollId,
  query
});

export const addNewMemeses = ({ memeses, scrollId, query }) => ({
  type: 'ADD_MEMESES',
  memeses,
  scrollId,
  query
});

export const fetchMemeses = ({ prevQuery, scrollId, query }) => dispatch =>
  getMemesesFunc({ scrollId, query })
    .then(payload => dispatch(query !== prevQuery ? addNewMemeses(payload.data) : getMemeses(payload.data)))
    .catch(() => dispatch(addNewMemeses({ memeses: [], scrollId: null, query })));
