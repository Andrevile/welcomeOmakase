function SignLogo({ text }) {
  return (
    <>
      <div className='auth-logo'>
        <p>이랏샤이</p>
        <p>오마카세</p>
      </div>
      <div className='auth-description'>
        <p>{text}</p>
      </div>
    </>
  );
}

export default SignLogo;
