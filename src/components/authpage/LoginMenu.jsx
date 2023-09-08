import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import { RequestLogin, RequestProfile } from '../../api/auth';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUser, setUserTask } from '../../redux/userSlice';
import { setBooth_id } from '../../redux/boothSlice';
// style.js & fonts
import * as S from './LoginReigster.style';
import { BiUser, BiLockOpen } from 'react-icons/bi';
// components
import TopBar from '../_common/topbar/TopBar';
import LoadingModal from './LoadingModal';
const LoginMenu = () => {
  const navigate = useNavigate();
  // redux
  const dispatch = useAppDispatch();
  const { ID, PW } = useAppSelector(state => state.user);

  // input 상태 관리
  const [id, setID] = useState(ID);
  const [password, setPW] = useState(PW);

  // loading
  const [loading, setLoading] = useState(false);

  // Submit
  const onSubmitAccount = e => {
    setLoading(true);
    e.preventDefault();
    RequestLogin(id, password)
      .then(res => {
        //아이디 비밀번호 닉네임 저장
        dispatch(
          setUser({
            ID: id,
            PW: password,
            nickname: res.data.data.nickname,
          }),
        );
        // 프로필 저장
        RequestProfile(res.data.data.access_token).then(res => {
          dispatch(
            setUserTask({
              isBooth: res.data.data.is_booth,
              isTF: res.data.data.is_tf,
            }),
          );
          // 부스 유저인경우 부스 아이디 저장
          if (res.data.data.is_booth) {
            // test
            dispatch(
              setBooth_id({
                booth_id: res.data.data.booth_id,
              }),
            );
            window.localStorage.setItem('booth_id', res.data.data.booth_id);
          }
        });
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .then(() => {
        alert('로그인에 성공했습니다.');
        navigate('/');
        window.location.reload();
      })
      .catch(error => {
        setLoading(false);
        alert('아이디와 비밀번호를 확인해주세요.');
      });
  };

  return (
    <>
      <S.Container>
        {loading ? <LoadingModal /> : null}
        <TopBar title='로그인' />
        <S.LogoBox />
        <S.InputForm onSubmit={onSubmitAccount}>
          <S.InputWrapper marginTop='15px'>
            <BiUser />
            <S.Input
              placeholder='아이디'
              defaultValue={ID}
              onChange={e => setID(e.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper marginTop='15px'>
            <BiLockOpen />
            <S.Input
              type='password'
              placeholder='비밀번호'
              defaultValue={PW}
              onChange={e => setPW(e.target.value)}
            />
          </S.InputWrapper>
          <S.Button type='submit'>로그인</S.Button>
          <S.GoRegister>
            <a href='/auth/register'>회원가입</a>
          </S.GoRegister>
        </S.InputForm>
      </S.Container>
    </>
  );
};

export default LoginMenu;
