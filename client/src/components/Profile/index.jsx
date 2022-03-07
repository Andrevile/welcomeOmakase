import { Link } from 'react-router-dom';
import './styles.scss';
function Profile({ profile, handler }) {
  return (
    <>
      <Link to='/dining' className='tiles-card' onClick={handler(profile.name)}>
        <li>
          <div className='tiles-profile-picture'>
            <img src={'img/youtuber/' + profile.name + '.jpeg'} alt={profile}></img>
            <p className='tiles-profile-title'>{profile.name}</p>
            <p className='tiles-profile-intro'>{'(' + profile.intro + ')'}</p>
            <p className='tiles-profile-sub' style={{ marginTop: '10px' }}>
              구독자: <span>{profile.sub}</span>
            </p>
          </div>
        </li>
      </Link>
    </>
  );
}

export default Profile;
