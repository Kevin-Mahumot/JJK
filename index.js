const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=one+day&type=track', {
    headers: {
    'Authorization': 'Bearer BQBPQ44674kFDHz-5RL4OeCW4iey6idV-KhH1L7j0tprlxrnlmEQH4IInB8wIGRQjfRJJfR9-Q9mRo45Tywn7u5Uz4KNCuM5F0e6OgWIzsgKidZn15h4WhdVqCxVVilWfBPxrGIKJV85UPuc75oc_8RMW1lSttoQgvA0wb8tNvmlwZ0Rv4haUfdDRxRWRVDrK0A8LFP495d4N59Z-ck'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})