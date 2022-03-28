import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/ConfigureStore";

import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../shared/Auth";

import Mypage from "./MyPage";

const Login = (props) => {
  const is_token = localStorage.getItem("token") ? true : false;

  const dispatch = useDispatch();

  if (is_token) {
    return <Mypage />;
  } else {
    return (
      <LoginCon>
        <BtnBox>
          <div>
          <svg width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62 120.426C95.1371 120.426 122 93.5629 122 60.4258C122 27.2887 95.1371 0.425781 62 0.425781C28.8629 0.425781 2 27.2887 2 60.4258C2 93.5629 28.8629 120.426 62 120.426Z" fill="#E0E0FC" />
            <path d="M13.2398 109.048C13.2398 109.048 5.84344 111.098 5.4289 113.106C4.7198 116.553 6.54162 135.131 8.47253 137.258C10.4034 139.386 16.5889 140.302 19.8398 139.997C23.0907 139.691 51.1925 133.811 52.6216 132.382C54.0507 130.953 53.7344 120.404 53.538 116.957C53.3416 113.509 51.8144 108.229 49.2725 105.993C46.7307 103.757 44.9089 102.851 41.9634 103.157C39.018 103.462 13.2398 109.048 13.2398 109.048Z" fill="#E0AA53" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round" />
            <path d="M7.95996 112.8C7.95996 112.8 13.6436 115.538 15.5745 115.233C17.5054 114.927 36.0727 109.855 43.6872 109.047" stroke="#4E49E2" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.7666 115.342C14.7666 115.342 16.0866 133.506 16.8939 136.146" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M46.8692 116.048L37.8457 120.238L41.0667 127.174L50.0902 122.984L46.8692 116.048Z" fill="#7EE0BD" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.0399 120.84L20.1562 131.488L33.509 124.299L24.0399 120.84Z" fill="#EF65C1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            <path d="M46.9507 128.747C47.7834 126.783 47.1094 124.619 45.4454 123.914C43.7813 123.208 41.7574 124.228 40.9247 126.191C40.092 128.155 40.766 130.319 42.43 131.024C44.094 131.73 46.118 130.71 46.9507 128.747Z" fill="#B7E26D" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36.3234 104.051C36.3234 104.051 41.5707 108.088 42.0289 109.528C42.487 110.968 45.6834 133.582 45.3016 135.251C45.3016 135.251 49.338 135.862 50.3961 133.124C50.3961 133.124 48.8252 110.455 47.047 108.317C45.2689 106.178 42.858 103.298 40.7307 102.993C39.6725 102.84 36.9998 102 36.3125 104.062L36.3234 104.051Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.6144 108.698L26.0471 110.597C26.0471 110.597 27.269 110.597 26.9635 109.604C26.6581 108.611 25.2944 107.477 25.2944 107.477L24.989 104.738L33.5853 102.535C33.5853 102.535 33.8908 106.342 35.3308 107.477C36.7708 108.611 38.2981 108.622 38.909 108.317L37.3053 106.113C37.3053 106.113 36.7708 100.255 34.7199 99.873C32.669 99.4912 23.0035 100.942 22.6217 103.069C22.2399 105.197 23.6144 108.698 23.6144 108.698Z" fill="#D8D8D8" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.2396 109.048C13.2396 109.048 20.6469 112.299 21.5632 114.022C22.4796 115.746 25.0105 137.259 24.3996 139.593C24.3996 139.593 24.4869 140.051 26.3196 139.702C28.1523 139.353 28.676 139.168 28.796 138.404C28.916 137.64 27.5742 115.266 26.1342 112.484C24.6942 109.702 19.2505 107.269 17.5705 107.193C15.8905 107.117 12.116 108.437 13.2396 109.037V109.048Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M110.941 140.822C112.748 140.836 114.225 139.382 114.239 137.575C114.253 135.767 112.8 134.291 110.992 134.276C109.185 134.262 107.708 135.716 107.694 137.523C107.68 139.331 109.133 140.807 110.941 140.822Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M98.4213 138.54C99.9275 138.552 101.158 137.341 101.17 135.835C101.182 134.329 99.9707 133.098 98.4645 133.086C96.9583 133.074 95.7276 134.285 95.7157 135.792C95.7038 137.298 96.9151 138.528 98.4213 138.54Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M87.6886 107.997C87.6886 107.997 82.2539 110.608 81.7313 112.248C81.2086 113.887 90.4978 132.511 93.9725 133.858C97.4472 135.206 108.87 138.395 110.738 137.319C112.606 136.242 117.044 132.559 116.41 130.843C115.776 129.127 108.028 110.677 105.748 109.892C103.467 109.106 90.833 107.564 87.6748 107.997L87.6886 107.997Z" fill="#B8F16F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            <path d="M99.2256 115.637C98.4292 115.631 97.6782 115.183 97.335 114.422L94.2717 107.775L87.5849 107.018L89.8019 111.134C90.3388 112.145 89.9516 113.397 88.9274 113.927C87.9032 114.457 86.6348 114.075 86.0979 113.063L82.0221 105.47C81.6502 104.791 81.6987 103.964 82.1368 103.333C82.5749 102.702 83.3322 102.349 84.114 102.438L95.938 103.787C96.6639 103.876 97.3031 104.322 97.6052 104.987L101.149 112.7C101.63 113.738 101.159 114.962 100.107 115.437C99.827 115.559 99.5191 115.626 99.2257 115.623L99.2256 115.637Z" fill="#4E49E2" />
            <path d="M83.8777 114.249L99.8887 116.733L104.62 112.407" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M100.222 116.736L107.72 134.25" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M53.6536 135.595C53.6536 135.595 49.8042 137.67 50.9372 139.335C52.0702 141 65.652 139.471 65.652 139.471L65.7885 135.595H53.6536Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M82.8654 136.427C82.8654 136.427 86.7148 138.502 85.5818 140.167C84.4352 141.833 70.867 140.304 70.867 140.304L70.7305 136.427H82.8654Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.3809 114.969L54.0902 135.171L65.802 135.444C65.802 135.444 66.6619 126.858 68.6548 126.858C70.6478 126.858 70.6478 135.444 70.6478 135.444H81.4996L86.6457 115.788L49.3809 114.956V114.969Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.1352 95.8589C49.1352 95.8589 42.0235 96.7462 39.6074 100.05L50.6504 108.554L49.3809 118.204L86.9597 117.699C86.9597 117.699 88.4886 107.421 88.4886 98.7801L96.1053 94.2073L86.0725 86.0854C86.0725 86.0854 61.1883 92.5556 49.1216 95.8589H49.1352Z" fill="#B8F16F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.1357 95.859C49.1357 95.859 52.1797 106.015 51.1696 113.386C51.1696 113.386 55.4831 104.117 54.4729 94.0845L49.1357 95.859Z" fill="#E2257F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M80.8721 87.0959C80.8721 87.0959 86.9737 104.118 88.4889 106.779C88.4889 106.779 86.8372 89.007 85.5677 84.1748L80.8721 87.0959Z" fill="#E2257F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.599 102.33C38.599 102.33 36.3194 104.364 36.9473 108.8C37.5752 113.236 44.059 121.631 49.014 120.102C53.969 118.574 52.6996 112.991 51.6758 111.093C50.6657 109.182 49.7648 108.677 49.7648 108.677L50.7749 108.036L40.6192 100.037L38.5853 102.316L38.599 102.33Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M66.6757 34.1202C66.6757 34.1202 70.525 25.4523 77.0225 28.9877C83.5336 32.5231 79.9846 38.8568 79.9846 38.8568C79.9846 38.8568 88.0791 40.0989 93.3207 57.2435C94.3036 60.4649 98.5487 65.0377 97.1564 72.1085C95.4092 81.022 86.6185 88.0655 67.6039 93.2252C50.6504 97.8253 38.4609 96.3238 33.0827 89.5124C28.6191 83.8476 30.2435 78.019 29.3016 74.7839C25.7253 62.4442 30.5028 51.8517 30.5028 51.8517C30.5028 51.8517 23.2956 47.2652 27.1176 40.9179C30.9396 34.5706 39.5938 41.0271 39.5938 41.0271C39.5938 41.0271 43.3067 37.2597 51.9881 34.8982C60.6696 32.5367 66.662 34.1202 66.662 34.1202H66.6757Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.6067 36.2906C43.6067 36.2906 38.406 39.512 39.7028 42.4468C40.9995 45.3816 51.906 39.6485 54.0354 38.5292C56.1648 37.4099 62.1026 34.4068 64.819 33.9291C64.819 33.9291 63.4267 25.6981 59.9869 23.7188C56.547 21.7395 52.4247 21.0707 48.7255 23.3639C45.0263 25.6571 42.2963 28.237 42.4055 31.6086C42.5147 34.9802 43.6067 36.3042 43.6067 36.3042V36.2906Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.3133 26.2168C49.3133 26.2168 47.1703 29.6566 47.9893 32.373" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52.0293 25.9707C52.0293 25.9707 54.6774 28.5369 55.2917 30.1203" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M56.1641 24.7153C56.1641 24.7153 59.1807 25.9029 59.8223 28.6193" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M46.2686 35.7176C46.2686 35.7176 51.988 33.7111 58.7311 33.4927" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.7937 79.1821C52.6667 78.5939 54.6525 76.4407 54.2292 74.3727C53.8058 72.3048 51.1336 71.1051 48.2606 71.6933C45.3876 72.2815 43.4018 74.4347 43.8252 76.5027C44.2485 78.5706 46.9207 79.7703 49.7937 79.1821Z" fill="#FFE9E9" />
            <path d="M76.3289 71.7094C79.1047 70.7634 80.8029 68.3768 80.1219 66.3788C79.441 64.3808 76.6387 63.528 73.8629 64.4741C71.0871 65.4201 69.3889 67.8067 70.0699 69.8047C70.7508 71.8027 73.5531 72.6555 76.3289 71.7094Z" fill="#FFE9E9" />
            <path d="M50.2272 61.9392C50.2272 61.9392 47.7975 62.2941 48.5483 65.5565C49.299 68.8326 50.2955 69.1465 51.6196 68.8462C52.9436 68.5459 53.9947 67.1536 53.0119 64.2598C52.0291 61.3659 50.2272 61.9392 50.2272 61.9392Z" fill="#4E49E2" />
            <path d="M69.2282 56.7791C69.2282 56.7791 66.7985 57.134 67.5493 60.3964C68.3 63.6724 69.2965 63.9863 70.6205 63.686C71.9446 63.3857 72.9957 61.9934 72.0129 59.0996C71.03 56.2058 69.2282 56.7791 69.2282 56.7791Z" fill="#4E49E2" />
            <path d="M60.7387 65.9927C60.1654 66.1701 59.1007 66.4704 59.401 67.7808C59.7013 69.0912 61.0117 69.8147 61.8444 69.5007C62.7316 69.1731 63.5097 67.6034 62.718 66.1428C62.3494 65.4603 61.4485 65.7606 60.7387 65.979V65.9927Z" fill="#4E49E2" />
            <path d="M61.8438 69.5146L63.3316 75.4934" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M58.1582 76.8179C58.1582 76.8179 63.9732 76.777 68.5323 73.1597C68.5323 73.1597 71.2487 79.5206 65.188 81.6501C61.5161 82.9468 58.8271 78.9064 58.1582 76.8179Z" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.95" d="M45.5186 67.3711L74.1429 59.0991C74.1429 59.0991 77.5145 67.0708 70.5802 68.8317C63.6459 70.5925 61.8987 63.7265 61.8987 63.7265L58.377 64.8049C58.377 64.8049 61.0934 71.7118 54.7187 73.541C48.3441 75.3837 45.7097 67.9717 45.5186 67.3575V67.3711Z" fill="#6D6EE4" stroke="#4E49E2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M95.2183 93.8247C95.2183 93.8247 100.419 91.9137 100.173 86.9723C99.9276 82.031 97.1293 76.5573 83.6702 77.8268C83.6702 77.8268 84.4347 72.3667 82.2779 72.3667C80.1212 72.3667 79.0975 73.6362 78.3467 77.9496C78.3467 77.9496 71.6172 77.5674 71.6172 82.0173C71.6172 86.4673 73.8968 89.1291 78.606 89.8935C83.3153 90.6579 84.8305 89.8935 88.516 90.6579C92.2016 91.4223 95.2456 93.8384 95.2456 93.8384L95.2183 93.8247Z" fill="white" stroke="#4E49E2" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </div>
          <div style={{marginTop:"24px"}}>
          <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9987 12.2474C16.2764 12.2474 18.1224 10.4014 18.1224 8.12368C18.1224 5.84601 16.2764 4 13.9987 4C11.721 4 9.875 5.84601 9.875 8.12368C9.875 10.4014 11.721 12.2474 13.9987 12.2474Z" fill="#B8F16F" />
            <path d="M32.8844 12.2474C35.1621 12.2474 37.0081 10.4014 37.0081 8.12368C37.0081 5.84601 35.1621 4 32.8844 4C30.6068 4 28.7607 5.84601 28.7607 8.12368C28.7607 10.4014 30.6068 12.2474 32.8844 12.2474Z" fill="#B8F16F" />
            <path d="M37.1178 34.1424V22.878H41.7512C44.0335 22.878 45.8841 21.0274 45.8841 18.7452C45.8841 16.4629 44.0335 14.6123 41.7512 14.6123H5.13402C2.85175 14.6123 1.00115 16.4629 1.00115 18.7452C1.00115 21.0274 2.85175 22.878 5.13402 22.878H9.86385V34.046L2.20886 41.701C0.597045 43.3128 0.597045 45.9303 2.20886 47.5467C3.82068 49.1585 6.43817 49.1585 8.05458 47.5467L13.9967 41.6045L18.3959 46.0037L19.5761 47.1839C21.7114 49.3192 25.1692 49.3192 27.3046 47.1839L29.0312 45.4573L32.8839 41.6045L38.8261 47.5421C40.4379 49.1539 43.0554 49.1539 44.6718 47.5421C46.2836 45.9303 46.2882 43.3128 44.6718 41.6964L37.1178 34.1424ZM28.7511 34.046L23.438 39.3544L18.1296 34.046V22.878H28.7511V34.046Z" fill="#5244EB" />
            <path d="M66.5199 31.1578C66.5199 33.2931 64.7887 35.0197 62.658 35.0197H57.8639V52.3548H49.4512V14.1717C49.4512 11.8481 51.3339 9.96533 53.6575 9.96533C55.9811 9.96533 57.8639 11.8481 57.8639 14.1717V27.2958H62.658C64.7887 27.2958 66.5153 29.0224 66.5199 31.1578Z" fill="#5244EB" />
            <path d="M119.812 9.96094C117.493 9.96094 115.615 11.8391 115.615 14.1489V19.641H102.481C99.1935 15.4209 94.1285 12.7162 88.4481 12.7162C78.5384 12.7162 70.5068 20.9406 70.5068 31.0845C70.5068 41.2284 78.5384 49.4528 88.4481 49.4528C94.1331 49.4528 99.1981 46.7481 102.486 42.5233H115.619V52.2907H124V14.1489C124 11.8345 122.126 9.96094 119.812 9.96094ZM97.0582 35.2816C96.599 36.5812 95.9561 37.72 95.1433 38.6568C94.3397 39.589 93.3478 40.3329 92.1906 40.8932C91.0426 41.4396 89.7706 41.7197 88.4159 41.7197C87.0613 41.7197 85.803 41.4396 84.6918 40.8977C83.5575 40.3421 82.5748 39.5936 81.7712 38.6614C80.963 37.7292 80.3201 36.5904 79.8563 35.2862C79.3925 33.9729 79.1583 32.5448 79.1583 31.0432C79.1583 29.5415 79.3925 28.2144 79.8517 26.9287C80.3109 25.6475 80.9584 24.5086 81.7758 23.5397C82.5748 22.5937 83.5529 21.8452 84.6734 21.3217C85.7939 20.7936 87.0521 20.5319 88.4159 20.5319C89.7798 20.5319 91.0472 20.7982 92.2044 21.3263C93.3478 21.8498 94.3351 22.5937 95.1341 23.5397C95.9515 24.5132 96.599 25.6521 97.0582 26.9287C97.522 28.2098 97.7562 29.5921 97.7562 31.0386C97.7562 32.4851 97.522 33.9683 97.0582 35.2816ZM115.619 34.7949H106.027C106.265 33.5963 106.389 32.3565 106.389 31.0845C106.389 29.8125 106.261 28.568 106.022 27.3695H115.619V34.7949Z" fill="#5244EB" />
          </svg>
          </div>
          <div>
          <svg width="126" height="16" viewBox="0 0 126 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.888436 8.896V10.608H14.3124V8.896H0.888436ZM6.48844 10V15.44H8.60044V10H6.48844ZM7.56044 1.104C4.40844 1.104 2.21644 2.416 2.21644 4.448C2.21644 6.464 4.40844 7.76 7.56044 7.76C10.7284 7.76 12.9204 6.464 12.9204 4.448C12.9204 2.416 10.7284 1.104 7.56044 1.104ZM7.56044 2.8C9.51244 2.8 10.7284 3.376 10.7284 4.448C10.7284 5.504 9.51244 6.08 7.56044 6.08C5.62444 6.08 4.39244 5.504 4.39244 4.448C4.39244 3.376 5.62444 2.8 7.56044 2.8ZM25.4952 0.591999V15.456H27.6232V0.591999H25.4952ZM16.0872 10.272V12H17.3992C20.1032 12 22.2792 11.92 24.6792 11.488L24.4712 9.776C22.1192 10.176 20.0232 10.272 17.3992 10.272H16.0872ZM16.0712 1.856V3.552H20.8872V5.904H16.0872V10.912H18.2472V7.584H23.0632V1.856H16.0712ZM42.8863 0.608V9.536H45.0143V0.608H42.8863ZM44.4223 4.256V6H46.9823V4.256H44.4223ZM35.3823 10.176V15.264H45.0143V10.176H35.3823ZM42.9343 11.856V13.584H37.4783V11.856H42.9343ZM33.3503 1.936V3.616H42.0703V1.936H33.3503ZM37.7183 4.048C35.5583 4.048 34.0703 5.136 34.0703 6.72C34.0703 8.32 35.5583 9.376 37.7183 9.376C39.8623 9.376 41.3503 8.32 41.3503 6.72C41.3503 5.136 39.8623 4.048 37.7183 4.048ZM37.7183 5.632C38.6623 5.632 39.3183 6 39.3183 6.72C39.3183 7.44 38.6623 7.824 37.7183 7.824C36.7583 7.824 36.1183 7.44 36.1183 6.72C36.1183 6 36.7583 5.632 37.7183 5.632ZM36.6463 0.511999V2.848H38.7743V0.511999H36.6463ZM49.5571 2.288V2.464C49.5571 6.128 49.2531 8.704 47.5251 11.424L49.1571 12.304C50.9971 9.36 51.3491 6.048 51.3491 2.288H49.5571ZM48.0051 2.288V4H50.6931V2.288H48.0051ZM52.8691 2.288V2.48C52.8691 6.176 52.7091 9.184 50.8211 12.128L52.4531 13.024C54.4371 9.856 54.6611 6.16 54.6611 2.288H52.8691ZM51.7971 2.288V4H54.0691V2.288H51.7971ZM58.5811 0.608V15.424H60.6131V0.608H58.5811ZM53.9411 6.16V7.872H56.0371V6.16H53.9411ZM55.7171 0.927999V14.768H57.7011V0.927999H55.7171ZM72.4362 3.632V5.344H76.4682V3.632H72.4362ZM72.4362 8.224V9.936H76.4682V8.224H72.4362ZM69.8762 1.632C67.6522 1.632 66.0522 3.68 66.0522 6.912C66.0522 10.176 67.6522 12.224 69.8762 12.224C72.0842 12.224 73.7002 10.176 73.7002 6.912C73.7002 3.68 72.0842 1.632 69.8762 1.632ZM69.8762 3.568C70.9642 3.568 71.6842 4.736 71.6842 6.912C71.6842 9.12 70.9642 10.304 69.8762 10.304C68.8042 10.304 68.0682 9.12 68.0682 6.912C68.0682 4.736 68.8042 3.568 69.8762 3.568ZM76.1322 0.591999V15.456H78.2442V0.591999H76.1322ZM90.8189 0.608V9.888H92.8349V0.608H90.8189ZM89.0109 4.256V5.984H91.3789V4.256H89.0109ZM87.7469 0.895999V9.408H89.7309V0.895999H87.7469ZM80.1469 2.128V3.76H87.3309V2.128H80.1469ZM83.7629 4.24C81.9069 4.24 80.5629 5.296 80.5629 6.832C80.5629 8.368 81.9069 9.408 83.7629 9.408C85.6189 9.408 86.9629 8.368 86.9629 6.832C86.9629 5.296 85.6189 4.24 83.7629 4.24ZM83.7629 5.76C84.5309 5.76 85.0589 6.144 85.0589 6.832C85.0589 7.52 84.5309 7.904 83.7629 7.904C82.9789 7.904 82.4509 7.52 82.4509 6.832C82.4509 6.144 82.9789 5.76 83.7629 5.76ZM82.6909 0.751999V3.248H84.7869V0.751999H82.6909ZM87.8269 10.048C84.6429 10.048 82.7229 11.008 82.7229 12.736C82.7229 14.448 84.6429 15.424 87.8269 15.424C90.9949 15.424 92.9149 14.448 92.9149 12.736C92.9149 11.008 90.9949 10.048 87.8269 10.048ZM87.8269 11.632C89.7949 11.632 90.7869 11.968 90.7869 12.736C90.7869 13.488 89.7949 13.84 87.8269 13.84C85.8429 13.84 84.8509 13.488 84.8509 12.736C84.8509 11.968 85.8429 11.632 87.8269 11.632ZM108.258 0.608V15.424H110.386V0.608H108.258ZM109.378 6.176V7.936H111.986V6.176H109.378ZM100.034 3.04V4.256C100.034 6.72 99.7781 9.328 97.9381 10.736L99.2501 12.272C101.266 10.704 101.586 7.456 101.586 4.256V3.04H100.034ZM100.53 3.04V4.256C100.53 7.232 100.898 10.768 103.122 12.416L104.242 10.848C102.29 9.296 102.034 6.544 102.034 4.256V3.04H100.53ZM104.21 3.04V4.256C104.21 6.576 103.938 9.312 102.002 10.848L103.122 12.416C105.33 10.784 105.714 7.28 105.714 4.256V3.04H104.21ZM104.674 3.04V4.256C104.674 7.488 105.01 10.704 107.026 12.272L108.338 10.736C106.498 9.344 106.242 6.752 106.242 4.256V3.04H104.674ZM98.4981 1.872V3.584H102.882V1.872H98.4981ZM103.378 1.872V3.584H107.522V1.872H103.378ZM119.297 3.632V5.344H123.329V3.632H119.297ZM119.297 8.224V9.936H123.329V8.224H119.297ZM116.737 1.632C114.513 1.632 112.913 3.68 112.913 6.912C112.913 10.176 114.513 12.224 116.737 12.224C118.945 12.224 120.561 10.176 120.561 6.912C120.561 3.68 118.945 1.632 116.737 1.632ZM116.737 3.568C117.825 3.568 118.545 4.736 118.545 6.912C118.545 9.12 117.825 10.304 116.737 10.304C115.665 10.304 114.929 9.12 114.929 6.912C114.929 4.736 115.665 3.568 116.737 3.568ZM122.993 0.591999V15.456H125.105V0.591999H122.993Z" fill="#5244EB" />
          </svg>
          </div>

          <KaKaoBtn>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="20" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_551_573"
                    transform="translate(0.0434783 0.05) scale(0.00310559 0.00326087)"
                  />
                </pattern>
                <image
                  id="image0_551_573"
                  width="294"
                  height="276"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <a href={KAKAO_AUTH_URL}>카카오로 시작하기</a>
          </KaKaoBtn>
          <LookBtn
            onClick={() => {
              window.location.replace("/");
            }}
          >
            <p>짜여 둘러보기</p>
          </LookBtn>
        </BtnBox>
      </LoginCon>
    );
  }
};

const LoginCon = styled.div`
  width: 100%;
  padding: 0px 24px;
  height: 93.7%;
  display: flex;
  align-items: center;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`;

const KaKaoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  /* margin-top: 100%; */
  margin-top: 48px;
  margin-bottom: 16px;
  box-sizing: border-box;
  background-color: #fee500;
  border-radius: 8px;
  cursor: pointer;

  a {
    margin-left: 5px;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 23.17px;
    letter-spacing: -2%;
    text-decoration-line: none;
  }
`;

const LookBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  background-color: #4E49E2;
  border-radius: 8px;
  cursor: pointer;

  p {
    margin-left: 5px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 23.17px;
    letter-spacing: -2%;
    
  }
`;

export default Login;
