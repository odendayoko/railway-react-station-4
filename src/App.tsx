import React, { FC } from "react";
import "./App.css";
import { AppPresenter } from "./AppPresenter";

const App: FC = () => {
  const groups: string[] = [
    "ダンビラムーチョ",
    "カベポスター",
    "くらげ",
    "マユリカ",
    "モグライダー",
    "令和ロマン",
    "さや香",
    "真空ジェシカ",
    "ヤーレンズ",
    "ワイルドカード",
  ];

  return <AppPresenter groups={groups} />;
};

export default App;
