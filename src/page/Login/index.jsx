import React, { useState, useEffect, useCallback } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { inputchange } from '../../utils/inputChange';
import { LoginUser } from './LoginUser';
import { randomImageUser } from '../../utils/randomImage';
import { selectPadlock } from '../../utils/selectPadlock';
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH } from '../../utils/rules';

export default function Login() {
  const [srcImage, setSrcImage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [checkedData, setCheckedData] = useState(true);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setSrcImage(randomImageUser());
  }, []);
  
  const checkFormErrors = useCallback(() => {
    const { email, password } = login;
    const isFormInvalid = !(!!email.match(EMAIL_REGEX)
      && password.length >= MIN_PASSWORD_LENGTH);
      setCheckedData(isFormInvalid);
  }, [login]);

  useEffect(() => {
    checkFormErrors()
  }, [login])

  return (
    <LoginUser>
      <AiFillQuestionCircle className='login__icon-help' />
      <div className='login__container-title'>
        <h1 className='login__mainTitle'>Feeder</h1>
        <h2 className='login__subTitle'>Project</h2>
      </div>

      <form className='login__form-user' autocomplete='off'>
        <img
          alt='Ilustação de um usuário que pode ser uma mulher ou um homem'
          className='login__imagem-user'
          src={srcImage}
        />
        <div className='login__container-input'>
          <BiUser className='login__icon-user' />
          <Input
            placeholder='Email'
            name='email'
            value={login.email}
            onChange={inputchange(login, setLogin)}
          />
          {selectPadlock(showPassword, setShowPassword, 'login__icon-password')}
          <Input
            placeholder='Password'
            type={showPassword ? 'password' : 'text'}
            name='password'
            value={login.password}
            onChange={inputchange(login, setLogin)}
          />
        </div>
      </form>

      <Button className='login__button-signIn' disabled={checkedData}>
        Sign in
      </Button>
    </LoginUser>
  )
}
