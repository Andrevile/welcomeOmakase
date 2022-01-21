import { useNavigate } from "react-router-dom";
const Modal = ({ modalOn }) => {
  let navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal-body">
        <header className="modal-header">
          <button
            className="modal-close"
            onClick={() => {
              modalOn(false);
            }}
          >
            닫기
          </button>
        </header>
        <section className="modal-contents">
          <p>로그인이 필요한 페이지 입니다.</p>
        </section>
        <footer className="modal-footer">
          <button
            onClick={() => {
              modalOn(false);
              navigate("/signin");
            }}
          >
            로그인
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
