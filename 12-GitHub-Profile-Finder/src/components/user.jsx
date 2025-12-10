import './styles.css';


export default function User({user}) {
  const {
    avatar_url,
    followers,
    following,
    public_repo,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return(
    <div className="user">
      <div className='avatar-container'>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repo}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
      </div>
    </div>
  );
}