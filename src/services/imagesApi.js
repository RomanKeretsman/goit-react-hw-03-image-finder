/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '20726897-5533683f6552092b306b2e1ad';

const fetchGetImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) =>
  axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(responce => responce.data);

export default { fetchGetImages };
