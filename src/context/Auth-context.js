import React, { createContext, useContext, useState } from 'react';
// import jwt from 'jsonwebtoken';

const AuthContext = createContext();
// const SECRET_KEY = 'your_secret_key'; // 替换为实际的密钥

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = (username, password) => {
        // 这里可以替换为实际的注册逻辑
        alert('注册用户: ' + username);
        console.log('注册用户:', username);
        return true; // 模拟注册成功
    };
    const SECRET_KEY = 'your_secret_key'; // 确保与 Dashboard.js 中的密钥一致
    const login = (username, password) => {
        if (username === 'test' && password === 'password') {
            // 模拟 JWT 结构
            const header = {
                alg: "HS256",
                typ: "JWT"
            };
            
            const payload = {
                username: "test",
                exp: Math.floor(Date.now() / 1000) + 3600 // 1小时过期
            };
            
            // Base64 URL 编码函数
            const base64UrlEncode = (obj) => {
                return btoa(JSON.stringify(obj))
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=+$/, '');
            };
            
            // 生成 JWT
            const token = `${base64UrlEncode(header)}.${base64UrlEncode(payload)}.signature_example`;
            localStorage.setItem('token', token); // 存储在 localStorage 中
            
            setUser({ username });
            return true; // 模拟登录成功
        }
        return false; // 登录失败
    };
    
    const logout = () => {
        localStorage.removeItem('token'); // 清除 token
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
