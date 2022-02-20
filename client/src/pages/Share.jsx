import { useEffect, useState, useRef } from 'react';
const Share = () => {
  const [modalOff, modalOn] = useState(false);
  const [postContent, setContent] = useState({});
  useEffect(() => {
    if (modalOff) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOff]);
  return (
    <>
      {modalOff ? <Post modalOn={modalOn}></Post> : null}{' '}
      <div className='share-container'>
        <div className='menu-title-container'>
          <p>
            공유하기
            <span style={{ marginLeft: '5px', fontSize: '15px' }}>-글목록</span>
          </p>
        </div>
        <div className='post-container'>
          <ul className='posts'>
            <li
              className='posts-item'
              onClick={(e) => {
                modalOn(true);
              }}
            >
              <div>
                <h1>
                  아이템1<span style={{ float: 'right' }}>by.gdsag</span>
                </h1>

                <div className='post'>
                  <p className='sub-title'>-오늘은dgasgasdgadsgsd gdsagass-</p>
                  ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ
                  ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독
                  ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독
                </div>
                <div className='thumb-updown'>
                  <i className='fa-solid fa-thumbs-up' style={{ marginRight: '7px' }}>
                    1
                  </i>
                  <i className='fa-solid fa-thumbs-down'>-1</i>
                </div>
              </div>
            </li>
            <li className='posts-item'>
              <div>
                <h1>
                  아이템1<span style={{ float: 'right' }}>by.gdsag</span>
                </h1>

                <div className='post'>
                  <p className='sub-title'>-오늘은dgasgasdgadsgsd gdsagass</p>
                  ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ
                  ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독
                  ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독
                </div>
                <div className='thumb-updown'>
                  <i className='fa-solid fa-thumbs-up' style={{ marginRight: '7px' }}>
                    1
                  </i>
                  <i className='fa-solid fa-thumbs-down'>-1</i>
                </div>
              </div>
            </li>
            <li className='posts-item'>
              <div>
                <h1>
                  아이템1<span style={{ float: 'right' }}>by.gdsag</span>
                </h1>

                <div className='post'>
                  <p className='sub-title'>-오늘은dgasgasdgadsgsd gdsagass-</p>
                </div>
                <div className='thumb-updown'>
                  <i className='fa-solid fa-thumbs-up' style={{ marginRight: '7px' }}>
                    1
                  </i>
                  <i className='fa-solid fa-thumbs-down'>-1</i>
                </div>
              </div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
            <li className='posts-item'>
              <div>아이템1</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Post = ({ modalOn }) => {
  const postRef = useRef();
  return (
    <div
      className='modal'
      onClick={(e) => {
        return postRef.current === e.target ? modalOn(false) : null;
      }}
      ref={postRef}
    >
      <div className='post-modal'>
        <header className='modal-header post-header'>
          <h1>아이템1</h1>
          <span style={{ float: 'right' }}>by.gdsag</span>
        </header>
        <section style={{ padding: '20px', boxSizing: 'border-box' }}>
          <h1 style={{ textAlign: 'center' }}>제목</h1>
          <p style={{ marginTop: '20px' }}>
            ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ
            ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독 ㄴㅇㅁㅎㅁㅇㅀ
            gagw g rqgerh ㄷㅂㄱ ㅎㅁㄶㄱㄷ ㅎㄷㄱ ㅎㄷ곧보독
          </p>
        </section>
        <footer style={{ padding: '30px', bottom: '0', position: 'absolute' }}>
          <div className='thumb-updown'>
            <i className='fa-solid fa-thumbs-up' style={{ marginRight: '10px' }}>
              1
            </i>
            <i className='fa-solid fa-thumbs-down'>-1</i>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Share;
