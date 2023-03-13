import React from "react";
import Stroke from "./Stroke";

const TicTaeToe = () => {
  // seq는 O 또는 X가 오게되는 순서이다.
  const [seq, setSeq] = React.useState('X');

  // values로 보드판의 요소 상태를 제어한다.
  const [values, setValues] = React.useState(Array(9).fill(''));

  // 순서를 제어하는 함수
  const toggleSeq = () => {
    setSeq(seq === 'X' ? 'O' : 'X');
  }

  // 클릭하면 보드판의 요소를 변경하게 하는 핸들러이다.
  const handleClick = (idx) => {
    const newValues = [...values];
    newValues[idx] = seq;
    setValues(newValues);
    toggleSeq();
  }

  return (
    <div className="TicTaeToe">
      {
        values.map((value, idx) =>
          <Stroke onClick={() => { handleClick(idx) }} key={idx} value={value} />
        )
      }
    </div>
  )
}

export default TicTaeToe;
