function InputBox({ props, changeHandler }) {
  return (
    <>
      <input {...props} onChange={changeHandler}></input>
    </>
  );
}
export default InputBox;
