import axios from 'axios';
import youtubeConfiguration from './youtubeConfiguration.json';

export default axios.create({
  baseURL: youtubeConfiguration.url,
});
