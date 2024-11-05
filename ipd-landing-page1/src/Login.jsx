// // frontend/src/components/Login.jsx
// import React, { useState } from 'react';
// import './App.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:5000/api/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         });
//         const data = await response.json();
        
//         if (response.ok) {
//             window.location.href = 'https://www.google.com'; // Redirect to external URL
//         } else {
//             alert(data.error || 'Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit" className="action-button">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// frontend/src/components/Login.jsx
// frontend/src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false); // State to track successful login

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (response.ok) {
            setLoginSuccess(true); // Show success message
            setTimeout(() => {
                window.location.href = 'https://www.google.com'; // Redirect to external URL
            }, 1000); // 3-second delay
        } else {
            alert(data.error || 'Login failed');
        }
    };

    return (
        <div className="login-container">
             <h1 className="page-title">Vastra-View</h1>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="action-button">Login</button>
            </form>
            {loginSuccess && <p>Login done successfully! Redirecting...</p>}
        </div>
    );
};

export default Login;
