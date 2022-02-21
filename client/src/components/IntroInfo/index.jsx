function IntroInfo({ placeIntro }) {
  return (
    <div className='default-intro-container'>
      {placeIntro ? (
        <div className='place-intro-box'>
          <div className='place-intro-title'>
            <h1>{placeIntro.place_name}</h1>
          </div>
          <div className='place-intro-description'>
            <div className='place-img'>
              <img src={placeIntro.place_imgPath} alt={placeIntro.place_name}></img>
            </div>
            <div className='intro-description'>
              <div>
                <span>주소:</span>
                <span>{placeIntro.place_position}</span>
              </div>
              <div>
                <span>전화번호:</span>
                <span>{placeIntro.place_number}</span>
              </div>
            </div>

            <div className='place-video'>
              <iframe
                width='1280'
                height='720'
                src={'https://www.youtube.com/embed/' + placeIntro.place_youtubeURL}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <div className='default-intro-box'>
          <div className='default-intro-title'>
            <h1>음식점을 Click!</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntroInfo;
