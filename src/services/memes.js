import api from './';

const mapUrl = (query, scrollId) => `api/feed/search?query=${query || ''}&scrollId=${scrollId || ''}`;

export const getMemeses = ({ scrollId, query }) => api.get(mapUrl(query, scrollId));
