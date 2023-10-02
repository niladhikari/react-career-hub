import useAuth from "./../../hooks/useAuth";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" text-center mb-3">
        <button
          onClick={() => handleSocialLogin(googleSignIn)}
          className="btn bg-gray-500 font-semibold text-white"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
