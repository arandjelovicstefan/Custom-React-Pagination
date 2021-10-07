import axios from 'axios';

const BASE = 'https://api.spacexdata.com';
const VERSION = '/v4';
const LAUNCHES = '/launches';
const ROCKETS = '/rockets';

const getAllLaunches = () => axios.get(`${BASE}${VERSION}${LAUNCHES}`);
const getRocketById = id => axios.get(`${BASE}${VERSION}${ROCKETS}/${id}`);

export { getAllLaunches, getRocketById };
