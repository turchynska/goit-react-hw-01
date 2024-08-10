import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.avatar}>
        <img src={image} alt="User avatar" className={css.image} />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.subtitle}>Followers</span>
          <span className={css.count}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Views</span>
          <span className={css.count}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Likes</span>
          <span className={css.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;