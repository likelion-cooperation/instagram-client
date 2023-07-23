import React from "react";
import Input from "../../components/Input/Input";
import useInput from "../../components/Input/UseInput";
import insta from "../../assets/insta.png"
import facebook from "../../assets/facebook.png"
import "./login.css"

function Login() {

    const [userId, setId, resetId] = useInput("");
    const [password, setPw, resetPw] = useInput("");

    const submitHandler = (event) => {
        event.preventDefault();
        resetId();
        resetPw();
    }

    return (
        <div id="mainContainer">
            <div className="left_container">
                <img className="insta" src={insta} />
            </div>
            <div className="right_container">
                <div className="container_wrap">
                    <header>
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
                    </header>
                    <div className="login_container">
                        <form className="login" onSubmit={submitHandler}>
                            <div className="form_div">
                                <div className="form_wrap">
                                    <label>
                                        <Input
                                            className="userId"
                                            type="text"
                                            value={userId}
                                            onChange={setId}
                                            placeholder="전화번호,사용자 이름 또는 이메일"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="form_div">
                                <div className="form_wrap">
                                    <Input
                                        className="userPw"
                                        type="password"
                                        value={password}
                                        onChange={setPw}
                                        placeholder="비밀번호"
                                    />
                                </div>
                            </div>
                            <button className="loginBtn" type="submit">로그인</button>
                        </form>
                        <div className="text">――――――――</div>
                        <div className="text">또는</div>
                        <div className="text">――――――――</div>
                        <ul>
                            <li><img className="facebook_img" src={facebook} /> </li>
                            <li className="facebook">Facebook으로 로그인</li>
                            <br></br>
                            <li className="findPw">비밀번호를 잊으셨나요?</li>
                        </ul>
                    </div>
                </div>
                <div className="container_wrap">
                    <ul>
                        <li>계정이 없으신가요?</li>
                        <li className="signUp">가입하기</li>
                    </ul>
                </div>
                <div className="'app">
                    <h4>앱을 다운로드하세요.</h4>
                    <img alt=" Google Play에서 다운로드" className="google" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png" />
                    <img alt="Microsoft에서 다운로드" className="microsoft" src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png" />
                </div>
            </div>
        </div>
    );
}


export default Login;