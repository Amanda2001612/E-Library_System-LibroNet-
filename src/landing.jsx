import './Landing.css';

const Landing = () => {
  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="landing-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">Welcome to LibroNet<span> !</span></h1>
        <h2 className="subtitle">Your Digital Reading Companion.</h2>

        <div className="features">
          <p>Read Anytime, Anywhere</p>
          <p>Explore Thousands of Books with Just a Click</p>
        </div>

        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>

        <div className="login-container">
          <p>If you have an account ? <span onClick={handleLogin}>Login</span></p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
