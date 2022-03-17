import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Mypage/Header';
import Switch from '../components/Mypage/Switch';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {actionCreators as userActions} from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/ConfigureStore';




const MyPage = (props) => {

    const dispatch = useDispatch();
    const checkUser = useSelector(state => state.user.user);

    // console.log('checkUser !! ',checkUser);

    

    React.useEffect(() => {
        dispatch(userActions.checkUserDB());
    }, [dispatch]);

    return (
        <MypageCon>
            <Header />
            <UserCon >
                <div>
                    <UserImg userImg={checkUser.userImg}/>
                    <NickName>{checkUser.nickname}</NickName>
                </div>
            </UserCon>
            
            <ListCon>
                <ListItem onClick={() => history.push('/mypageproup')} >프로필 수정<ArrowForwardIosIcon/></ListItem>
                <ListItem onClick={() => history.push('/mypageset')}>계정 설정<ArrowForwardIosIcon/></ListItem>
                <ListItem3>알림 설정<Switch _onClick={() => console.log('test')}/></ListItem3>
            </ListCon>
            
            
        </MypageCon>
    );
};

const MypageCon = styled.div`
    width: 100%;
    height: 92%;
    /* background-color: orange; */
    padding: 25px 0;
    box-sizing: border-box;
`;

const UserCon = styled.div`
    /* background-color: orange; */
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserImg = styled.div`
    background-image: url(${(props) => (props.userImg ? props.userImg : "https://opgg-com-image.akamaized.net/attach/images/20200225141203.297146.jpg?image=w_200")});
    background-position: center;
    background-size: cover;
    /* box-shadow: 0 7px 5px 0 #BFBFBF; */
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const NickName = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const ListCon = styled.div`
    /* background-color: red; */
    width: 100%;
    height: 50vh;
    padding: 0 15px;
    box-sizing: border-box;
`;

const ListItem = styled.div`
    border-top: 1px solid #E5E5E5;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    &:hover {
        background-color: #F5F5F5;
    }
`;

const ListItem3 = styled.div`
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    align-items: center;
`;

export default MyPage;