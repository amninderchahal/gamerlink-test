import React, { PropTypes, Component } from 'react';
import styles from './components.css';
import StatItem from './StatItem/StatItem';
import RankItem from './RankItem/RankItem';

class UserDetails extends Component {
  componentWillMount(){
    this.images = this.importImages(require.context('./images/ranks/', false, /\.(png|jpe?g|svg)$/));
  }

  importImages(source) {
    let images = {};
    source.keys().map((item, index) => { images[item.replace('./', '')] = source(item); });
    return images;
  }

  getImgSrc(name){
    return this.images[name+".png"];
  }

  getLastUpdated(input){
    let date = new Date(parseInt(input));
    let minutes = date.getMinutes()+" mins";
    return minutes;
  }

  renderStats(stats){
    let statsArray = [];
    Object.keys(stats).forEach((key, index)=>{
      statsArray.push(<StatItem key={index} title={ key } value={ stats[key] } />);
    });
    return statsArray;
  }
  
  renderRanks(ranks){
    let ranksArray = ranks.map((rank, index)=>{
      return (<RankItem 
                  key={index} 
                  rank={ rank } 
                  imgSrc = { this.getImgSrc(rank.rankImage) }
              />);
    });
    return ranksArray;
  }

  render(){
    return (
      <div className={styles['user-details-wrapper']}>
        <h3 className={styles['display-name']} >
          {this.props.user.displayName}
        </h3>
        <h5 className={ styles['last-updated']} >
          Last Updated: {this.getLastUpdated(this.props.user.lastUpdated)}
        </h5>
        <div >
          {this.renderStats(this.props.user.stats)}
          {this.renderRanks(this.props.user.rankings)}
        </div>
      </div>
    );
  }
}

export default UserDetails;
