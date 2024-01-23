
import styles from "./Statistics.module.css";

import PropTypes from "prop-types"

const Statistics = ({comp, title, stats}) => {
  
    return (
      <div className={styles.black}>
        <section className="statistics">
          {comp && <h2 className="title">{title}</h2>}

          <ul className="stat-list">
            {stats.map(stats => {
              return (
                <li className="item" key={stats.id}>
                  <span className="label">{stats.label} -- </span>
                  <span className="percentage">{stats.percentage}</span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    ); 
};

Statistics.propTypes = {
    comp: PropTypes.bool,
    title: PropTypes.string,
    stats: PropTypes.array
}

export default Statistics;
