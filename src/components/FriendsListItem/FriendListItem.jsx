import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.box}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;