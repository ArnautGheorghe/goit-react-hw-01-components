import styles from "./FriendList.module.css"
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
    return (
      <div className={styles.black}>
       

        <ul className="friend-list">
          {friends.map(friends => {
            return (
              <li className="item" key={friends.id}>
                {friends.isOnline ? (
                  <span className={styles.statusOnline}>Online</span>
                ) : (
                  <span className={styles.statusOffline}>Offline</span>
                )}
                <img
                  className="avatar"
                  src={friends.avatar}
                  alt="User avatar"
                  width="48"
                />
                <p className="name">{friends.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );

}

FriendList.propTypes = {
  friends: PropTypes.array,
};
const FriendsListItem = {
}
    FriendsListItem.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,

    }

    


export default FriendList;