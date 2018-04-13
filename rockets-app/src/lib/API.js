const API_URL = 'https://rockets.now.sh/';

export default {
  async getRockets() {
    const res = await fetch(API_URL);
    return res.json();
  },
};
