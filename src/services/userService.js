import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

const fetchUsers = async (results, filters = {}) => {
    try {
        const params = { results, ...filters };
        const response = await axios.get(API_URL, { params });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export { fetchUsers };
