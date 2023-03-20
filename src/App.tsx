import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import styles from "./App.module.css";
import Post from "./Post";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return <Post />;
}

export default App;
