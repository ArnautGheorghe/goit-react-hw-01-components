import styles from "./FriendList.module.css"
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
    return (
      <div className={styles.black}>
          <ul className="friend-list">
            <li className="item">
              <span className="status"></span>
              <img className="avatar" src="" alt="User avatar" width="48" />
                    <p className="name">Nme</p>
            </li>
          </ul>
        
      </div>
    );

}

FriendList.propTypes = {
  friends: PropTypes.array,
};
const FriendsListItem = {}
FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool

    
}

export default FriendList;