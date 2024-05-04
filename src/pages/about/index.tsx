import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [list, setList] = useState([] as string[]);

  const onSearch = () => {
    let tempList: string[] = [];

    for (let i = 0; i < 10; i++) {
      tempList.push(`사용자 ${i}`);
    }

    setList(tempList);
  };
  return (
    <>
      <h3>About</h3>
      <Link href="/">Home</Link>
      <hr></hr>
      <button onClick={onSearch}>리스트</button>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}
