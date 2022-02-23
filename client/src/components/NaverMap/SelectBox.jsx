function SelectBox({ name, text, data, changeHandler }) {
  return (
    <>
      <select name={name} onChange={changeHandler}>
        <option value=''>{text}</option>
        {data.map((person, idx) => {
          return (
            <option key={idx} value={person}>
              {person}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectBox;
