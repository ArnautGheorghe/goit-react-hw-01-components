import Profile from "./Profile/Profile";
import user from "./user.json"
import Statistics from "./Statistics/Statistics";
import data from './data.json';
import FriendList from "./FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./transactions.json"

export const App = () => {
  
  return (
    <div>
      <Profile
        user ={user}
      />
      <Statistics comp={true} title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
