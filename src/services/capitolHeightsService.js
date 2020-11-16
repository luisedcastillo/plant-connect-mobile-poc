import client from '../helpers/httpClient';

const getCapitolHeights = () =>
{
    const jwt = 'Bearer '.concat('n5m1xWVbJbCzbJ93E5xADBGSdgufpRyw85FkxRHm8H5F8SgFyU6SIw9xL--lMqfIpQ_wx-nOYqaK2MhdZ2MTy8n_nIUht4kv32OtUSDTBAm0Lfk9rZpRTMoAecpoFs4UHB_LaELAuQgU3rDTSJdi7IeHPNJxGAuVgiuSJmBLUOHdGWlQGmDcWuTamuVNlBC4hPjtgd3zO4LCfu9E4eN7PW5EMEqBI83jCHCijFCByxyrXriRyg6Rm5Zhu0ZTie_Jk6IqCrNfzGo0EjXpO_qAwPAAf5Go_1joeAoZHSX7N6z96VPy4Kb8ATYds_tpQRQ9o9xUDxDdzk3jgNjLDqCq1EHmTQ0RcSi8I7b0z6bAVBqJ-sXo'); 
    return client.get('/Customer/174/locations/dashboard_v3?LocationId=206&CurrentTime=13:11&CurrentDate=2020-11-16', { headers: { Authorization: jwt }});
}

export default {
  getCapitolHeights
}