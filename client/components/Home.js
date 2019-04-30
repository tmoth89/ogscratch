import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';

let displayArt;

const mapStateToProps = store => ({
  error: store.userTraffic.error,
  art: store.userTraffic.art,
});

const mapDispatchToProps = dispatch => ({
  getArt: () => {
    dispatch(actions.getArt())
  }
});


class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    // console.log('in didmount')
    // this.props.getArt();
    fetch('http://localhost:3000/api/getallart')
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log('this is res in componened did mount ',res)
      return displayArt = res.map(el => {
        return (
        <div className="artUnit">
        <img src={el.image} style={{height: 100 }}></img>
        <p className="unitTitle">{el.title}</p>
        <p>Artist: {el.artist}</p>
        <p>Description: {el.description}</p>
        <p>Material: {el.material}</p>
        <p>Price: {el.price}</p>
        </div>
        )
    })
  })
}

  // shouldComponentUpdate () {
  //   console.log('in component did update')
  //   displayArt = this.props.art;
  // }
  
  render() {
    console.log(this.props.art)
    return (
      <div>
      <h2>HOMEPAGE GET ART TEST</h2>
      {displayArt}
      </div>
    )
  }
}
  
 export default connect(mapStateToProps, mapDispatchToProps)(Home);