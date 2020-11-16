import client from '../helpers/httpClient';

const getCapitolHeights = () =>
{
    const jwt = 'Bearer '.concat('8HRGTXO9yB6hhZj9llcCrroPRnZZssZchKFRYV2vSpAdfuFXOxlTfu-1RixGTTxpIBVGjp_OSZpjElW5JMU167VeMBHDE2A6LhKCWuzQENly3VtS72s5UiuQFpwufI22nBqjUMlH8Z_2_hNpHhEtkLavHpmW4sL2udfWoZBkgtG6tirgyWoSausnpykw-0IjzXuM20_Y_HTlWF1grbn3njRjcA-K-jU-X5HCrSPcbmEVrOLB9U82PCDSHAUu13taOJ53E36c8lcWCdRB6gOp7s2_Mr0H1hPTHuJNmNkBwGOHErtWdLWpFDSDfRDb3PLJlm91d6W7-MhQU_H33RdeatoFQGy5ZBJnqo0Mk3UDf15cm9N2'); 
    return client.get('/Customer/174/locations/dashboard_v3?LocationId=206&CurrentTime=13:11&CurrentDate=2020-11-16', { headers: { Authorization: jwt }});
}

export default {
  getCapitolHeights
}