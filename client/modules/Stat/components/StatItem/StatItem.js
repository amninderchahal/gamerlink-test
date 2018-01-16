import React from 'react';
import styles from './StatItem.css';

function StatItem (props){
        return (
            <div className={styles["stat-wrapper"]} >
                <h3 className={styles["stat-value"]} >{ props.value }</h3>
                <h5 className={styles["stat-title"]} >{ props.title }</h5>
            </div>
        )
}

export default StatItem;