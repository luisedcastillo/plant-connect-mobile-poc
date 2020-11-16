import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Subheading, Paragraph, Button, Surface, IconButton } from 'react-native-paper';
import ProgressCircleBar from './ProgressCircleBar';
import ScaleStatus from '../constants/scaleStatus';
import Labels from '../constants/labels';

const LeftContent = props => <Surface {...props} />

const getStatus = scale => {
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

const ScaleCard = ({style, data}) => {
  const scale = data.item;
  const status = getStatus(scale);
  return (
    <View style={style}>
      <Card >
        <Card.Title title={scale.ScaleDesignator} subtitle={status?.DisplayName} right={LeftContent} rightStyle={{...styles.statusLight, backgroundColor: status.DisplayColor }}/>
        <Card.Content>
          <View style={styles.content}>
            <ProgressCircleBar percentage={scale.PercenatageTarget} />
            <View style={styles.textContainer}>
              <View style={styles.content}>
                <Subheading>{Labels.dailyGoal}</Subheading>
                <Paragraph style={styles.label}>{scale.DailyProductionGoal}</Paragraph>
              </View>
              <View style={styles.content}>
                <Subheading>{Labels.daily}</Subheading>
                <Paragraph style={styles.label}>{scale.ProdctionToday}</Paragraph>
              </View>
              <View style={styles.content}>
                <Subheading >{Labels.scale}</Subheading>
                <Paragraph style={styles.label}>{scale.ScaleTotal}</Paragraph>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.content}>
                <Subheading>{Labels.rate}</Subheading>
                <Paragraph style={styles.label}>{scale.ActualRate}</Paragraph>
                <Paragraph style={styles.label}>{Labels.rateMeasure}</Paragraph>
              </View>
              <View style={styles.content}>
                <Subheading>{Labels.speed}</Subheading>
                <Paragraph style={styles.label}>{scale.ActualSpeed}</Paragraph>
                <Paragraph style={styles.label}>{Labels.speedMeasure}</Paragraph>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft:2
  },
  textContainer: {
    marginLeft:10, 
    minWidth:90
  },
  statusLight:{
    marginRight:15, 
    height:20, 
    width:20, 
    borderRadius: 10,
    elevation: 10
  }
})

export default ScaleCard;