import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clickYoutuberProfile } from "../module/filteringPlace";
import { Axios } from "../module/axiosmodule";
import { connect } from "react-redux";
import { datafilter } from "../module/redux/filtering";
const Main = ({ data_filter }) => {
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
                <Link key={idx} to="/dining" className="tiles-card">
                  <li
                    onClick={() => {
                      data_filter({
                        place_name: "",
                        youtuber: profile.name,
                        place_position: "",
                      });
                    }}
                  >
                    <div className="tiles-profile-picture">
                      <img
                        src={"img/youtuber/" + profile.name + ".jpeg"}
                        alt={profile}
                      ></img>
                      <p className="tiles-profile-title">{profile.name}</p>
                      <p className="tiles-profile-intro">
                        {"(" + profile.intro + ")"}
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        구독자: <span>{profile.sub}</span>
                      </p>
                    </div>
                  </li>
                  {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/joBuDahQc4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

// export default Main;
export default connect(
  (state) => ({
    place_name: state.places.place_name,
    youtuber: state.places.youtuber,
    place_position: state.places.place_position,
  }),
  (dispatch) => ({
    data_filter: (data) => dispatch(datafilter(data)),
  })
)(Main);
