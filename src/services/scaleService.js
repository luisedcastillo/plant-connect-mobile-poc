import ScaleStatus from '../constants/scaleStatus';

const buildStatus = scale => {
  if(scale.LastMinutes > 60)
  {
    return ScaleStatus.offline;
  }
  
  if(scale.LastMeasurementRate === 0 && scale.LastMeasurementSpeed === 0)
  {
    return ScaleStatus.stop;
  }

  if(scale.LastMeasurementRate < scale.ZeroSpeed)
  {
    return ScaleStatus.blackBelt;
  }

  if(scale.LastMeasurementRate < scale.LowRate)
  {
    return ScaleStatus.belowRange;
  }

  if(scale.LastMeasurementRate < scale.HighRate)
  {
    return ScaleStatus.optimum;
  }

  return ScaleStatus.avobe;
}

const cleanPercentage = percentage => 
{
  let cleanPercentage = percentage
  ? Math.abs(percentage.toFixed(1))
  : 0;
  
  cleanPercentage = cleanPercentage > 100
  ? '+100'
  : cleanPercentage;

  return cleanPercentage + '%'
}

export default {
  buildStatus,
  cleanPercentage
}