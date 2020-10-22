import React from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import { withStyles } from '@material-ui/styles';

const useStyles = theme => ({
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 55,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 55
  }
});
function  ForecastItem(props)  {
const classes = useStyles

  return (
    
    
      <>

        <Card.Img top width="0.5%" src={props.icon} alt="Card image cap" style={classes.cardImage} />
        <Card.Body>
          <Card.Text style={classes.cardText}>{props.weatherCode}</Card.Text>
          <Card.Text style={classes.cardText}>{props.high}</Card.Text>
          <Card.Text style={classes.cardText}>{props.low}</Card.Text>
          <Card.Text style={classes.cardText}>{props.main}</Card.Text>
          <Card.Text style={classes.cardText}>{props.day}</Card.Text>
        </Card.Body>
      </>      
      
  );
};

export default ForecastItem;