import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clickYoutuberProfile } from "../module/filteringPlace";
import { Axios } from "../module/axiosmodule";
const Main = ({ mode, placeData, set_default, data_filter }) => {
  const profileList = [
    { name: "먹적", intro: "스시에 대출 박는 놈", sub: "19.2만명" },
    { name: "더들리", intro: "더들리의 하루한끼", sub: "25.8만명" },
    {
      name: "마리아주",
      intro: "맛 칼럼니스트",
      sub: "18.2만명",
    },
  ];
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
                <Link
                  key={idx}
                  to={"/dining?youtuber=" + encodeURI(profile.name)}
                  className="tiles-card"
                >
                  <li>
                    <div className="tiles-profile-picture">
                      <img
                        src={"img/youtuber/" + profile.name + ".jpeg"}
                        alt={profile}
                      ></img>
                      <p className="tiles-profile-title">{profile.name}</p>
                      <p className="tiles-profile-intro">{profile.intro}</p>
                      <p style={{ marginTop: "10px" }}>
                        구독자: <span>{profile.sub}</span>
                      </p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
