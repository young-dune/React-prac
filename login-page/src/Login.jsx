import React, { useEffect, useState } from 'react';

const User = {
    email: 'test123@naver.com',
    pw: "test123123@@@"
};
/* 더미데이터 생성 */

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value);
    }

    useEffect(() => {
        const emailRegex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const pwRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        setEmailValid(emailRegex.test(email));
        setPwValid(pwRegex.test(pw));
    }, [email, pw]);  // 이메일과 비밀번호가 변경될 때마다 유효성 검사

    useEffect(() => {
        setNotAllow(!(emailValid && pwValid));  // 이메일과 비밀번호가 모두 유효하면 버튼 활성화
    }, [emailValid, pwValid]);

    const onClickConfirmBtn = () => {
        if (email === User.email && pw === User.pw) {
            alert("로그인에 성공하셨습니다.");
        } else {
            alert("등록되지 않은 아이디입니다.");
        }
    }

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail} />
                </div>
                <div className="errorMsgWrap">
                    {!emailValid && email.length > 0 && (
                        <div style={{ color: 'red' }}>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type='password'
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePw} />
                </div>
                <div className="errorMsgWrap">
                    {!pwValid && pw.length > 0 && (
                        <div style={{ color: 'red' }}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                <button onClick={onClickConfirmBtn} disabled={notAllow} className='bottomBtn'>
                    확인
                </button>
            </div>
        </div>
    );
}
