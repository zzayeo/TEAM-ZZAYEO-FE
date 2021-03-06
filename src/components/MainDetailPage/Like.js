import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as planActions } from "../../redux/modules/plan";

const Like = (props) => {

  const socket = useSelector((state) => state.chat.instance);


  const dispatch = useDispatch();
  const planId = props.planId;
  const is_like = props.isLike;

  const onLike = () => {
    if (is_like === false) {

      socket?.emit('notice', {
        fromSnsId: localStorage.getItem('snsId'),
        toSnsId: props.userId.snsId,
        noticeType: "Like",
        whereEvent: "plan"
      });

      dispatch(planActions.addLikeDB(planId));
    } else {
      dispatch(planActions.deleteLikeDB(planId));
    }
  };

  return (
    <React.Fragment>
      <LikeBtn onClick={onLike}>
        {is_like ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.89202 5.35673C7.46041 5.12122 8.06963 5 8.68488 5C9.30014 5 9.90936 5.12122 10.4778 5.35673C11.0461 5.59225 11.5626 5.93744 11.9975 6.37259L12.0002 6.37526L12.003 6.37242C12.8815 5.49391 14.0731 5.00036 15.3155 5.00036C16.5579 5.00036 17.7494 5.49391 18.6279 6.37242C19.5065 7.25094 20 8.44247 20 9.68488C20 10.9273 19.5065 12.1188 18.6279 12.9973L12.7073 18.918C12.5197 19.1055 12.2654 19.2109 12.0002 19.2109C11.735 19.2109 11.4806 19.1055 11.2931 18.918L5.37259 12.9975C4.93752 12.5626 4.59222 12.0461 4.35673 11.4778C4.12122 10.9094 4 10.3001 4 9.68488C4 9.06963 4.12122 8.46041 4.35673 7.89202C4.59219 7.32377 4.93726 6.80747 5.37226 6.37259C5.80714 5.9376 6.32377 5.59219 6.89202 5.35673Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.68488 7C8.33235 7 7.98328 7.06946 7.6576 7.2044C7.33192 7.33935 7.03602 7.53714 6.7868 7.78647C6.53747 8.03569 6.33935 8.33192 6.2044 8.6576C6.06946 8.98328 6 9.33236 6 9.68488C6 10.0374 6.06946 10.3865 6.2044 10.7122C6.33935 11.0378 6.53714 11.3337 6.78647 11.583L12.0002 16.7967L17.2137 11.5831C17.7172 11.0797 18 10.3969 18 9.68488C18 8.9729 17.7172 8.29008 17.2137 7.78664C16.7103 7.28319 16.0275 7.00036 15.3155 7.00036C14.6035 7.00036 13.9207 7.28319 13.4172 7.78664L12.7073 8.49658C12.3168 8.8871 11.6836 8.8871 11.2931 8.49658L10.5831 7.78664C10.3339 7.5373 10.0378 7.33935 9.71217 7.2044C9.38649 7.06946 9.03741 7 8.68488 7ZM6.89202 5.35673C7.46041 5.12122 8.06963 5 8.68488 5C9.30014 5 9.90936 5.12122 10.4778 5.35673C11.0461 5.59225 11.5626 5.93744 11.9975 6.37259L12.0002 6.37526L12.003 6.37242C12.8815 5.49391 14.0731 5.00036 15.3155 5.00036C16.5579 5.00036 17.7494 5.49391 18.6279 6.37242C19.5065 7.25094 20 8.44247 20 9.68488C20 10.9273 19.5065 12.1188 18.6279 12.9973L12.7073 18.918C12.5197 19.1055 12.2654 19.2109 12.0002 19.2109C11.735 19.2109 11.4806 19.1055 11.2931 18.918L5.37259 12.9975C5.37253 12.9975 5.37265 12.9976 5.37259 12.9975C4.93752 12.5626 4.59222 12.0461 4.35673 11.4778C4.12122 10.9094 4 10.3001 4 9.68488C4 9.06963 4.12122 8.46041 4.35673 7.89202C4.59219 7.32377 4.93726 6.80747 5.37226 6.37259C5.80714 5.9376 6.32377 5.59219 6.89202 5.35673Z"
              fill="white"
            />
          </svg>
        )}
        <LikeCnt>{props.likeCount}</LikeCnt>
      </LikeBtn>
    </React.Fragment>
  );
};

const LikeBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;

  svg {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const LikeCnt = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
`;

export default Like;
