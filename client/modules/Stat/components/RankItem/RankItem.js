import React from 'react';
import styles from './RankItem.css';


function RankItem (props){
        return (
            <div className={styles["ranks-wrapper"]} >
                <h5 className={styles["rank-type"]} >{ props.rank.type }</h5>
                <div className={styles["rank-content"]} >
                    <div className={styles["rank-item"]}>
                        <h3 className={styles["rank-item-value"]} >{ props.rank.gamesPlayed }</h3>
                        <h5 className={styles["rank-item-title"]} >Games Played</h5>
                    </div>
                    <div className={styles["rank-item"]}>
                        <h3 className={styles["rank-item-value"]} >{ props.rank.topPercentile }%</h3>
                        <h5 className={styles["rank-item-title"]} >Top Percentile</h5>
                    </div>
                    <div className={styles["rank-item-img"]}>
                        <div className={styles["rank-rating-wrapper"]}>
                            <h3 className={styles["rank-item-value"]} >{ props.rank.rating }</h3>
                            <h5 className={styles["rank-item-title"]} >{ props.rank.rank }</h5>
                        </div>
                        <img className={ styles['rank-image'] } src={props.imgSrc} alt={ props.rank.rank } />
                    </div>
                </div>
            </div>
        )
}

export default RankItem;