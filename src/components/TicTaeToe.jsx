import React from "react";
import Stroke from "./Stroke";

const TicTaeToe = () => {
  // 승리의 경우의 라인
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 가로
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 세로
    [0, 4, 8], [2, 4, 6]  // 대각선
  ];

  // seq는 O 또는 X의 차례이다.
  const [seq, setSeq] = React.useState('X');

  // values로 보드판의 상태를 관리한다.
  const [values, setValues] = React.useState(Array(9).fill(''));

  // 차례를 관리하는 함수
  const toggleSeq = () => {
    setSeq(seq === 'X' ? 'O' : 'X');
  }

  // 승리자를 찾는 함수
  const calculateWinner = (values) => {
    for (const line of lines) {
      const [a, b, c] = line;
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return values[a];
      }
    }
  }

  // 클릭하면 보드판의 요소를 변경하게 하는 핸들러이다.
  const handleClick = (idx) => {
    const newValues = [...values];
    newValues[idx] = seq;
    setValues(newValues);

    const winner = calculateWinner(newValues);
    if (winner) {
      alert(`Winner: ${winner}`);
    }

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
