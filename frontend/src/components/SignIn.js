const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="auth-logo">
        <p>이랏샤이</p>
        <p>오마카세</p>
      </div>
      <div className="auth-description">
        <p>아이디와 비밀번호를 입력해주세요.</p>
      </div>

      <div className="signin-form-container">
        <div className="signin-form">
          <form>
            <div className="signData">
              <div className="signIn-border">
                <i className="fa-solid fa-user"></i>
                <input
                  name="id"
                  pattern="[a-zA-Z0-9]{6,}$"
                  type="text"
                  id="signIn-ID"
                  required
                  autoFocus
                  placeholder="아이디를 입력하세요."
                  autoComplete="off"
                ></input>
              </div>
              <div className="signIn-border">
                <i className="fa-solid fa-key"></i>
                <input
                  name="pw"
                  minLength={7}
                  type="password"
                  id="signIn-PW"
                  required
                  placeholder="비밀번호를 입력하세요."
                  autoComplete="off"
                ></input>
              </div>
            </div>

            <button className="signIn-btn">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
