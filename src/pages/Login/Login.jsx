import React, { useState } from "react"
import "./Login.css"
import logo from "../../images/logo.png"
import { useNavigation } from "../../utils/useNavigation";
import { useAuth } from "../../context/Auth-context";

export default function Login() {
    const handleNavigationToAbout = useNavigation();
    const { login } = useAuth();
    const { register } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit_login = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
            handleNavigationToAbout("Package",0)
        } else {
            setError("登录失败，请检查用户名和密码");
        }
    };
    const handleSubmit_register = (e) => {
        e.preventDefault();
        register(username, password);
    };
    return (
        <div className={"login-page"}>
        <div className={"login-section"}>
            <div className={"login-logo-section"}>
                <img
                className="logo_image"
                src={logo}
                />
            </div>
            <form onSubmit={handleSubmit_login}>
                <div className="flex-col">
                    <span className={"login-title2 mt-20"}>用户名</span>
                    <input 
                        type="text" 
                        className={"login-input"}
                        placeholder="用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex-col">
                    <span className={"login-title2 mt-20"}>密码</span>
                    <input 
                        type="password" 
                        className={"login-input"}
                        placeholder="密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="login-buttons-section">
                    <button className={"Login-button1"} onClick={handleSubmit_register}>
                    <span className={"button-text1"}>注册</span>
                    </button>
                    <button type="submit" className={"Login-button2"}>
                    <span className={"button-text2"}>登录</span>
                    </button>
                </div>
            </form>
            {error && <p>{error}</p>}
            
            
            
            <span className={"login-mention-text"}
            onClick={() => handleNavigationToAbout("Package",0)}
            >返回主页</span>
        </div>
        </div>

    )
}
