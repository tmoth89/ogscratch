import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions/actions';

import ArtUnit from './ArtUnit.jsx';

const mapStateToProps = store => ({
  error: store.userTraffic.error,
  art: store.userTraffic.art,
});

const mapDispatchToProps = dispatch => ({
  getArt: () => {dispatch(actions.getArt())}
});


class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  // console.log('in didmount')
  componentDidMount(){
      this.props.getArt()
  }
    
    
    render() {
      let displayArt = [];
      let art = this.props.art;
      art.forEach((item,i) => {
            displayArt.push(<ArtUnit 
            key={i}
            image={item.image} 
            title={item.title} 
            description={item.description}
            material={item.material}
            price={item.price}
            />)
        })
    
    return (
      <div className="home">
        <h2>Current Art Available</h2>
        {displayArt}
      </div>
    )
  }
}
  
 export default connect(mapStateToProps, mapDispatchToProps)(Home);