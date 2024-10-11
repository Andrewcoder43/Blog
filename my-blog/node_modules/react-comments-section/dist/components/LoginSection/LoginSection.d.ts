import React from 'react';
import './LoginSection.scss';
interface LoginSectionProps {
    loginLink?: string | (() => void);
    signUpLink?: string | (() => void);
    onLogin?: string | (() => void);
    onSignUp?: string | (() => void);
}
declare const LoginSection: ({ loginLink, signUpLink, onLogin, onSignUp }: LoginSectionProps) => React.JSX.Element;
export default LoginSection;
