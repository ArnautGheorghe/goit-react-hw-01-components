import Profile from "./Profile/Profile";
import user from "./user.json"
import Statistics from "./Statistics/Statistics";

export const App = () => {
  console.log(user)
  return (
    <div>
      <Profile />
      <Statistics />
      
    </div>
  );
};
