import styles from "./Statistics.module.css";

import PropTypes from "prop-types"

const Statistics = ({comp, title, stats}) => {
  
    return (
      <div className={styles.black}>
        

        <section className="statistics">
                {comp && <h2 className="title">{title}</h2>}

          <ul className="stat-list">
            <li className="item">
                        <span className="label">.docx</span>
              <span className="percentage">4%</span>
            </li>
            <li className="item">
              <span className="label">.mp3</span>
              <span className="percentage">14%</span>
            </li>
            <li className="item">
              <span className="label">.pdf</span>
              <span className="percentage">41%</span>
            </li>
            <li className="item">
              <span className="label">.mp4</span>
              <span className="percentage">12%</span>
            </li>
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
