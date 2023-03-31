import "./styles.css";
import { useState } from "react";

export default function App() {
  const [login_flg, setLoginFlg] = useState(false);

  const Login = (props) => {
    const { toggleLogin_flg } = props;
    return <button onClick={toggleLogin_flg}>ログイン</button>;
  };

  const Logout = (props) => {
    const { toggleLogin_flg } = props;
    return <button onClick={toggleLogin_flg}>ログアウト</button>;
  };

  const toggleLogin_flg = () => {
    setLoginFlg(!login_flg);
  };

  const Top = (props) => {
    const { login_flg } = props;
    if (login_flg) {
      return <Logout toggleLogin_flg={toggleLogin_flg} />;
    } else {
      return <Login toggleLogin_flg={toggleLogin_flg} />;
    }
  };

  return (
    <div className="App">
      <Top login_flg={login_flg} />
    </div>
  );
}
