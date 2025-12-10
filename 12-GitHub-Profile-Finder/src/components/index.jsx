import { useEffect, useState } from "react";
import User from './user';


export default function GithubProfileFinder() {

  const [userName, setUserName] = useState("KrishKorat");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);

  async function findGithubData() {
    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();

    if(data) {
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
  }

  function handleSubmit() {
    findGithubData();
  }

  console.log(userData);

  useEffect(() => {
    findGithubData();
  }, []);

  if(loading) {
    return <h1>Loading! please wait.</h1>
  }

  return(
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input 
          name="search-by-username"
          type="text"
          placeholder="Search GitHub users..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  );
}