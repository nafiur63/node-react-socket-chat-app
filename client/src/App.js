import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import ChatScreen from "./screens/ChatScreen";
import LoginPage from "./screens/LoginPage";

function App() {

  const [id,setId] = useLocalStorage('key')

  return (
    <>
    {id ? <ChatScreen id={id}/> :<LoginPage onIdSubmit={setId}/>}
    </>
  );
}

export default App;
