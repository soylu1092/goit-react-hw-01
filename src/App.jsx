import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transtactions.json';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>GoIT React HW-01</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Profile</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Friend List</h2>
        <FriendList friends={friends} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Transaction History</h2>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}
