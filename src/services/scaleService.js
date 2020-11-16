import ScaleStatus from '../constants/scaleStatus';

const buildStatus = scale => {
  if(scale.LastMinutes > 60)
  {
    return ScaleStatus.offline;
  }
  
  if(scale.ScaleTotal == 0)
  {
    return ScaleStatus.stop;
  }

  if(scale.ScaleTotal < scale.ZeroSpeed)
  {
    return ScaleStatus.blackBelt;
  }

  if(scale.ScaleTotal < scale.LowRate)
  {
    return ScaleStatus.low;
  }

  if(scale.ScaleTotal < scale.HighRate)
  {
    return ScaleStatus.optimum;
  }

  return ScaleStatus.avobe;
}

export default {
  BuildStatus: buildStatus
}