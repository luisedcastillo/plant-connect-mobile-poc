import client from '../helpers/httpClient';

const getCapitolHeights = () =>
{
    const jwt = 'Bearer '.concat('kqrk6-dAMeEyuQ7eBpgUnj3lqdjI1jD0nkEgY-3jUSt7OLjiv8tcQ8vsvKFk6-Z68rPDxpvbCpBKNnRyy7KJjXH5RIocuGlBJhUEiwxm6eO7V0sdWzjdZW4Mb3YzQ7z0USZ3orkyigRxNNhibxAVuRvkN5H-zYiC6vSEk0kRn_zB02qixCOmBPhjJJMY6YUPApXD1Pb56OY_BeyEDqEl5qnZOjlqWcsTHgjkjNq7XKA9_5A_QQh4z9BH4RfnGY9W2sPW1iOtVCpagn0bqcvn8VnaRaYP-2KGzHSN4kX0tBeP5csx91sX3_WdPbWSL3B1NJ4dBzp0q36g7T3ySy8YiH4tRTU4-Rc_LRg1nkCRXskZPCyR'); 
    return client.get('/Customer/174/locations/dashboard_v3?LocationId=206&CurrentTime=13:11&CurrentDate=2020-11-16', { headers: { Authorization: jwt }});
}

export default {
  getCapitolHeights
}