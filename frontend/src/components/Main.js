import axios from "axios";
import { React, useEffect } from "react";

const Main = () => {
  return (
    <>
      <div className="Jumbo">
        <div className="Jumbo-description">
          <h1>이랏샤이 おまかせ</h1>
          <p>먹을거에 목숨 건 유튜버들 추천 리스트...</p>
        </div>
      </div>

      <div className="Youtuber">
        <div className="tiles">
          <div className="tiles-title">LIST</div>
          <ul>
            <li>
              <div className="tiles-profile-picture">
                <img src="img/youtuber/먹적.jpeg"></img>
                <p className="tiles-profile-title">먹적</p>
              </div>
            </li>
            <li>
              <div className="tiles-profile-picture">
                <img src="img/youtuber/더들리.jpeg"></img>
                <p className="tiles-profile-title">더들리</p>
              </div>
            </li>
            <li>
              <div className="tiles-profile-picture">
                <img src="img/youtuber/마리아주.jpeg"></img>
                <p className="tiles-profile-title">마리아주</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
