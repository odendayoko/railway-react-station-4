import React, { useState } from "react";
import { FC } from "react";

export interface AppPresenterProps {
  groups: string[];
}

export const AppPresenter: FC<AppPresenterProps> = ({ groups }) => {
  const [showWinner, setShowWinner] = useState<boolean>(false);

  return (
    <>
      <h1>M-1グランプリ2023</h1>
      <h2>12月24日(日)午後6時30分～</h2>
      <h1>優勝するのは誰だ！？！？</h1>
      <p>
        今年は応募者数<b>8540組</b>と、<b>過去最多記録</b>を更新しています。
      </p>
      <p>
        準決勝では、ワイルドカードで勝ち上がった<b>ダブルヒガシ</b>をはじめ、
        <b>ママタルト、トム・ブラウン、オズワルド、真空ジェシカ、さや香</b>
        らが火花を散らしました。
      </p>
      <p>
        <b>ダンビラムーチョ、くらげ、マユリカ、令和ロマン、ヤーレンズ</b>は初、
        <b>モグライダー</b>は2年ぶり2度目、<b>カベポスター</b>は2年連続2度目、
        <b>さや香</b>は2年連続3度目、<b>真空ジェシカ</b>は3年連続3度目です。
      </p>
      <h3>🎉今年の決勝出場者</h3>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
      <h3
        onClick={() => {
          setShowWinner(!showWinner);
        }}
        style={{ cursor: "pointer" }}
      >
        🏆優勝は…
      </h3>
      {showWinner && <h2>令和ロマン！！！</h2>}
    </>
  );
};
