import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../module/axiosmodule";

const SignUp = () => {
  const [Warning, setWarning] = useState("");
  let navigate = useNavigate();
  const signUpform = useRef();
  async function dataSubmit(e) {
    e.preventDefault();
    setWarning("");
    const registerUser = {
      user_ID: this.id.value,
      user_PW: this.pw.value,
      email: this.email.value,
      auth: "user",
    };
    const PW = this.pw.value;
    const PW_compare = this.pw_compare.value;
    console.log(PW);
    if (PW !== PW_compare) {
      setWarning("비밀번호가 일치하지 않습니다.");
    } else {
      let res = await Axios("/api/users/signup", "POST", registerUser);
      console.log(res);
      if (res.status === 200) {
        alert(res.message);
        navigate("/signin");
      } else {
        setWarning(res.message);
      }
    }
  }
  useEffect(() => {
    console.log(signUpform.current);
    signUpform.current.addEventListener("submit", dataSubmit);

    return () => {
      if (signUpform.current) {
        signUpform.current.removeEventListner("submit", dataSubmit);
      }
    };
  }, []);

  return (
    <div className="signUp-container">
      <div className="auth-logo">
        <p>이랏샤이</p>
        <p>오마카세</p>
      </div>
      <div className="auth-description">
        <p>회원가입 양식을 작성해주세요.</p>
      </div>

      <div className="signUp-form-container">
        <form className="signUp-form" ref={signUpform}>
          <div className="formData">
            <label htmlFor="signUp-ID">
              아이디 (6자이상 영문,숫자만 가능){" "}
            </label>
            <input
              name="id"
              pattern="[a-zA-Z0-9]{6,}$"
              type="text"
              id="signUp-ID"
              required
              autoFocus
              placeholder="아이디를 입력하세요."
              autoComplete="off"
            ></input>
          </div>
          <div className="formData">
            <label htmlFor="signUp-email">이메일 </label>
            <input
              name="email"
              type="email"
              id="signUp-email"
              required
              placeholder="이메일을 입력하세요."
              autoComplete="off"
            ></input>
          </div>
          <div className="formData">
            <label htmlFor="signUp-PW">비밀번호 (7자 이상) </label>
            <input
              name="pw"
              minLength={7}
              type="password"
              id="signUp-PW"
              required
              placeholder="비밀번호를 입력하세요."
              autoComplete="off"
            ></input>
          </div>
          <div className="formData">
            <label htmlFor="signUp-PW-compare">비밀번호 재확인 </label>
            <input
              name="pw_compare"
              type="password"
              id="signUp-PW-compare"
              required
              placeholder="비밀번호를 다시 입력하세요."
              autoComplete="off"
            ></input>
          </div>
          <div className="formSubmit">
            <button>가입하기</button>
          </div>
        </form>
      </div>
      {Warning.length === 0 ? null : (
        <div className="signUp-warning">
          <p>{Warning}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
