import styles from './Login.module.css';
import { useEffect, useRef, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase'


const Login = () => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState();

    const userNameRef = useRef();
    const passwordeRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        }
        const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));

        return unsubscribe
    }, []);
    

    // login/signin using firebase
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth,userNameRef.current.value, passwordeRef.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            navigate('/home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

    // signup using firebase
    // const handleSignup = () => {
    // const handleSubmit = (event) =>{
    // event.preventDefault();
    // auth.createUserWithEmailAndPassword(userNameRef.current.value, passwordeRef.current.value)
    // };
    // on Setting new user
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));

    //     return unsubscribe
    // },[])


    // login using google OAuth
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            if (tokenResponse.access_token) {
                localStorage.setItem('token', tokenResponse.access_token)
                navigate('/home')
            } else {
                navigate('/')
            }
        }
    });


    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>

                <form onSubmit={handleSubmit}>
                    <div className={styles.userName}>
                        <label>Username </label>
                        <input name='username' ref={userNameRef} type="text" required />
                    </div>
                    <div className={styles.password}>
                        <label>Password </label>
                        <input name='password' ref={passwordeRef} type="password" required />
                    </div>
                    <button
                        className={styles.loginButton}
                        type='submit'
                    >
                        Login
                    </button>
                </form>
                <button className={styles.loginButton} onClick={() => login()}>
                    <img src='/google.png' alt='google' width='20' style={{ marginRight: '5px' }} />
                    Login with Google
                </button>

            </div>
        </div>
    )
};

export default Login;