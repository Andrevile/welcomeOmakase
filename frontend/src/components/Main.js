import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clickYoutuberProfile } from "../module/filteringPlace";
const Main = () => {
  const profileList = ["먹적", "더들리", "마리아주"];
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
            {profileList.map((profile, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    clickYoutuberProfile(profile);
                  }}
                >
                  {/* <Link to="/dining" className="tiles-card"> */}
                  <div className="tiles-profile-picture">
                    <img
                      src={"img/youtuber/" + profile + ".jpeg"}
                      alt={profile}
                    ></img>
                    <p className="tiles-profile-title">{profile}</p>
                  </div>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
