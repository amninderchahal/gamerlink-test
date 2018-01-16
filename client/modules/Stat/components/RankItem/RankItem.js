import React from 'react';
import styles from './RankItem.css';


function RankItem (props){
        return (
            <div className={styles["ranks-wrapper"]} >
                <h5 className={styles["rank-type"]} >{ props.rank.type }</h5>
                <div className={styles["rank-content"]} >
                    <div className={styles["rank-item"]}>
                        <h3 className={styles["games-played"]} >{ props.rank.gamesPlayed }</h3>
                        <h5 className={styles["games-played-title"]} >Games Played</h5>
                    </div>
                    <div className={styles["rank-item"]}>
                        <h3 className={styles["top-percentile"]} >{ props.rank.topPercentile }</h3>
                        <h5 className={styles["top-percentile-title"]} >Top Percentile</h5>
                    </div>
                    <div className={styles["rank-item"]}>
                        <div>
                            <h3 className={styles["rank-rating"]} >{ props.rank.rating }</h3>
                            <h5 className={styles["rank-title"]} >{ props.rank.rank }</h5>
                        </div>
                        <img className={ styles['rank-image'] } src={props.imgSrc} alt={ props.rank.rank } />
                    </div>
                </div>
            </div>
        )
}

export default RankItem;