import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  // const {
  //   name,
  //   type,
  //   avatar_url,
  //   location,
  //   bio,
  //   blog,
  //   twitter_username,
  //   login,
  //   html_url,
  //   followers,
  //   following,
  //   public_repos,
  //   public_gists,
  //   hireable,
  // } = user

  if (loading) {
    <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
       
      </div>
    </>
  );
}

export default User;
