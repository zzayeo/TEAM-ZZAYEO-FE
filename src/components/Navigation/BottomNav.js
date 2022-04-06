import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

// 사용할 아이콘 import

const BottomNav = () => {
  const location = useLocation();

  const takes =
    window.location.pathname === "/search" ||
    window.location.pathname === "/noticepage" ||
    window.location.pathname === "/mypageproup" ||
    window.location.pathname === "/mypageset" ||
    window.location.pathname === "/addplan";

  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

  const socket = useSelector((state) => state.chat.instance);

  const [newChatState, setChatState] = useState(false);

  const newChatSt = localStorage.getItem("newChat");
  const is_token = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (newChatSt === "false") {
      setChatState(false);
    } else {
      setChatState(true);
    }
  }, [newChatSt]);

  React.useEffect(() => {
    socket?.on("chatNotice", (data) => {
      setChatState(data.newChat);
      localStorage.setItem("newChat", "true");
    });
  }, [socket]);

  if (takes) {
    return null;
  }
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <svg
          width="60"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="56" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.0671 13.8072C28.5729 13.3013 29.2615 13 29.9999 13C30.7383 13 31.4269 13.3013 31.9327 13.8072L31.9402 13.8147L37.4285 19.4206L37.4284 28.2857C37.4284 29.7809 36.2093 31 34.7141 31H25.2856C23.7904 31 22.5713 29.7809 22.5713 28.2857L22.5713 19.4206L28.0671 13.8072ZM29.4843 15.2184L24.5713 20.2366L24.5713 28.2857C24.5713 28.6763 24.895 29 25.2856 29H34.7141C35.1047 29 35.4284 28.6763 35.4284 28.2857L35.4285 20.2366L30.5155 15.2184C30.3703 15.0748 30.1859 15 29.9999 15C29.8138 15 29.6294 15.0748 29.4843 15.2184Z"
            fill={activeNav === 1 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.0672 13.8072C28.573 13.3013 29.2616 13 30 13C30.7384 13 31.427 13.3013 31.9328 13.8072L31.9402 13.8145L39.7144 21.7517C40.1009 22.1462 40.0943 22.7794 39.6997 23.1658C39.3052 23.5523 38.6721 23.5457 38.2856 23.1512L30.5156 15.2184C30.3705 15.0748 30.1861 15 30 15C29.8139 15 29.6295 15.0748 29.4844 15.2184L21.7144 23.1512C21.3279 23.5457 20.6948 23.5523 20.3003 23.1658C19.9057 22.7794 19.8991 22.1462 20.2856 21.7517L28.0672 13.8072Z"
            fill={activeNav === 1 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            d="M33.5704 37.51H30.4004V36.65H29.5804V37.51H26.3504V38.15H33.5704V37.51ZM27.7304 43.69H32.2504V45H27.7304V43.69ZM26.9304 45.62H33.0504V43.07H26.9304V45.62ZM27.9504 39.77C27.9504 39.33 28.6804 39.08 29.9904 39.08C31.2804 39.08 32.0104 39.33 32.0104 39.77C32.0104 40.22 31.2804 40.47 29.9904 40.47C28.6804 40.47 27.9504 40.22 27.9504 39.77ZM30.4004 41.72V41.04C31.9804 40.98 32.8804 40.54 32.8804 39.77C32.8804 38.94 31.8304 38.5 29.9904 38.5C28.1304 38.5 27.0904 38.94 27.0904 39.77C27.0904 40.54 27.9804 40.98 29.5804 41.04V41.72H25.9304V42.37H34.0304V41.72H30.4004Z"
            fill={activeNav === 1 ? "#4E49E2" : "#BDBDBD"}
          />
        </svg>
      </Link>
      <Link to="/allplan" className="nav-link" onClick={() => setActiveNav(2)}>
        <svg
          width="60"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="56" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 16H24V20H28V16ZM24 14C22.8954 14 22 14.8954 22 16V20C22 21.1046 22.8954 22 24 22H28C29.1046 22 30 21.1046 30 20V16C30 14.8954 29.1046 14 28 14H24Z"
            fill={activeNav === 2 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37 16H33V20H37V16ZM33 14C31.8954 14 31 14.8954 31 16V20C31 21.1046 31.8954 22 33 22H37C38.1046 22 39 21.1046 39 20V16C39 14.8954 38.1046 14 37 14H33Z"
            fill={activeNav === 2 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 25H24V29H28V25ZM24 23C22.8954 23 22 23.8954 22 25V29C22 30.1046 22.8954 31 24 31H28C29.1046 31 30 30.1046 30 29V25C30 23.8954 29.1046 23 28 23H24Z"
            fill={activeNav === 2 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37 25H33V29H37V25ZM33 23C31.8954 23 31 23.8954 31 25V29C31 30.1046 31.8954 31 33 31H37C38.1046 31 39 30.1046 39 29V25C39 23.8954 38.1046 23 37 23H33Z"
            fill={activeNav === 2 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            d="M16.8916 39.23V39.91H19.1716V39.23H16.8916ZM18.7016 36.75V43.37H19.5316V36.75H18.7016ZM13.7616 44.9V45.58H19.7816V44.9H13.7616ZM13.7616 42.79V45.25H14.5916V42.79H13.7616ZM14.4016 37.87V38.6C14.4016 39.88 13.4716 41.08 12.1216 41.56L12.5516 42.22C14.0616 41.66 15.0816 40.24 15.0816 38.6V37.87H14.4016ZM14.5616 37.87V38.59C14.5616 40.12 15.5316 41.48 17.0016 42.01L17.4216 41.36C16.1116 40.9 15.2316 39.76 15.2316 38.59V37.87H14.5616ZM12.3816 37.48V38.15H17.2116V37.48H12.3816ZM24.9808 40.31V40.99H26.6908V40.31H24.9808ZM23.1408 39.05V39.52C23.1408 41 22.4408 42.59 21.2208 43.3L21.7108 43.93C23.0308 43.14 23.7808 41.32 23.7808 39.52V39.05H23.1408ZM23.2908 39.05V39.52C23.2908 41.28 24.0708 42.99 25.4008 43.73L25.8708 43.11C24.6508 42.45 23.9308 40.96 23.9308 39.52V39.05H23.2908ZM21.4708 38.4V39.09H25.6008V38.4H21.4708ZM23.1408 37.06V38.93H23.9408V37.06H23.1408ZM28.1708 36.74V45.78H28.9708V36.74H28.1708ZM26.3608 36.95V45.32H27.1408V36.95H26.3608ZM34.57 38.75V39.44H37.3V38.75H34.57ZM34.57 41.61V42.3H37.3V41.61H34.57ZM32.91 37.43C31.59 37.43 30.66 38.66 30.66 40.58C30.66 42.51 31.59 43.74 32.91 43.74C34.22 43.74 35.16 42.51 35.16 40.58C35.16 38.66 34.22 37.43 32.91 37.43ZM32.91 38.18C33.78 38.18 34.38 39.12 34.38 40.58C34.38 42.05 33.78 43.01 32.91 43.01C32.04 43.01 31.44 42.05 31.44 40.58C31.44 39.12 32.04 38.18 32.91 38.18ZM37.12 36.73V45.79H37.94V36.73H37.12ZM46.5192 36.74V42.46H47.3092V36.74H46.5192ZM45.0492 39.19V39.88H46.7592V39.19H45.0492ZM44.5892 36.92V42.14H45.3692V36.92H44.5892ZM39.6492 37.82V38.48H44.2292V37.82H39.6492ZM41.9492 38.94C40.8092 38.94 40.0192 39.56 40.0192 40.49C40.0192 41.43 40.8092 42.04 41.9492 42.04C43.0792 42.04 43.8692 41.43 43.8692 40.49C43.8692 39.56 43.0792 38.94 41.9492 38.94ZM41.9492 39.56C42.6492 39.56 43.1292 39.93 43.1292 40.49C43.1292 41.06 42.6492 41.42 41.9492 41.42C41.2392 41.42 40.7592 41.06 40.7592 40.49C40.7592 39.93 41.2392 39.56 41.9492 39.56ZM41.5392 36.81V38.19H42.3492V36.81H41.5392ZM44.3492 42.62C42.4492 42.62 41.3292 43.18 41.3292 44.19C41.3292 45.19 42.4492 45.76 44.3492 45.76C46.2292 45.76 47.3592 45.19 47.3592 44.19C47.3592 43.18 46.2292 42.62 44.3492 42.62ZM44.3492 43.26C45.7192 43.26 46.5392 43.59 46.5392 44.19C46.5392 44.79 45.7192 45.13 44.3492 45.13C42.9592 45.13 42.1492 44.79 42.1492 44.19C42.1492 43.59 42.9592 43.26 44.3492 43.26Z"
            fill={activeNav === 2 ? "#4E49E2" : "#BDBDBD"}
          />
        </svg>
      </Link>
      <Link to="/myplan" className="nav-link" onClick={() => setActiveNav(3)}>
        <svg
          width="60"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="56" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 18C25 15.2386 27.2386 13 30 13C32.7614 13 35 15.2386 35 18H37C38.1046 18 39 18.8954 39 20V29C39 30.1046 38.1046 31 37 31H23C21.8954 31 21 30.1046 21 29V20C21 18.8954 21.8954 18 23 18H25ZM27 18H33C33 16.3431 31.6569 15 30 15C28.3431 15 27 16.3431 27 18ZM27 29V20H33V29H27ZM35 29V20H37V29H35ZM25 20H23L23 29H25V20Z"
            fill={activeNav === 3 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            d="M11.572 38.75V39.44H14.302V38.75H11.572ZM11.572 41.61V42.3H14.302V41.61H11.572ZM9.91195 37.43C8.59195 37.43 7.66195 38.66 7.66195 40.58C7.66195 42.51 8.59195 43.74 9.91195 43.74C11.222 43.74 12.162 42.51 12.162 40.58C12.162 38.66 11.222 37.43 9.91195 37.43ZM9.91195 38.18C10.782 38.18 11.382 39.12 11.382 40.58C11.382 42.05 10.782 43.01 9.91195 43.01C9.04195 43.01 8.44195 42.05 8.44195 40.58C8.44195 39.12 9.04195 38.18 9.91195 38.18ZM14.122 36.73V45.79H14.942V36.73H14.122ZM23.5212 36.74V42.46H24.3112V36.74H23.5212ZM22.0512 39.19V39.88H23.7612V39.19H22.0512ZM21.5912 36.92V42.14H22.3712V36.92H21.5912ZM16.6512 37.82V38.48H21.2312V37.82H16.6512ZM18.9512 38.94C17.8112 38.94 17.0212 39.56 17.0212 40.49C17.0212 41.43 17.8112 42.04 18.9512 42.04C20.0812 42.04 20.8712 41.43 20.8712 40.49C20.8712 39.56 20.0812 38.94 18.9512 38.94ZM18.9512 39.56C19.6512 39.56 20.1312 39.93 20.1312 40.49C20.1312 41.06 19.6512 41.42 18.9512 41.42C18.2412 41.42 17.7612 41.06 17.7612 40.49C17.7612 39.93 18.2412 39.56 18.9512 39.56ZM18.5412 36.81V38.19H19.3512V36.81H18.5412ZM21.3512 42.62C19.4512 42.62 18.3312 43.18 18.3312 44.19C18.3312 45.19 19.4512 45.76 21.3512 45.76C23.2312 45.76 24.3612 45.19 24.3612 44.19C24.3612 43.18 23.2312 42.62 21.3512 42.62ZM21.3512 43.26C22.7212 43.26 23.5412 43.59 23.5412 44.19C23.5412 44.79 22.7212 45.13 21.3512 45.13C19.9612 45.13 19.1512 44.79 19.1512 44.19C19.1512 43.59 19.9612 43.26 21.3512 43.26ZM32.4804 36.74V45.78H33.3104V36.74H32.4804ZM29.8304 37.71V37.85C29.8304 40.25 28.6204 42.17 26.0104 43.43L26.4504 44.1C29.4704 42.62 30.6504 40.33 30.6504 37.71H29.8304ZM26.4204 37.71V38.39H30.1904V37.71H26.4204ZM37.3196 37.67V38.4C37.3196 39.69 36.4196 40.85 35.0496 41.33L35.4896 41.98C36.9996 41.44 37.9996 40.06 37.9996 38.4V37.67H37.3196ZM37.4696 37.67V38.39C37.4696 39.95 38.4296 41.28 39.9196 41.8L40.3496 41.15C39.0196 40.7 38.1496 39.59 38.1496 38.39V37.67H37.4696ZM35.3096 37.37V38.05H40.1396V37.37H35.3096ZM41.2796 36.74V42.18H42.1096V36.74H41.2796ZM41.8796 39.12V39.81H43.4496V39.12H41.8796ZM36.2396 42.66V43.35H41.2796V45.78H42.1096V42.66H36.2396ZM46.5688 37.25V38.18C46.5688 39.56 45.6688 40.77 44.2888 41.26L44.7188 41.94C46.2688 41.36 47.2588 39.93 47.2588 38.18V37.25H46.5688ZM46.7188 37.25V38.15C46.7188 39.79 47.6888 41.12 49.1488 41.67L49.5988 41.02C48.2788 40.56 47.3988 39.43 47.3988 38.15V37.25H46.7188ZM50.8988 36.74V42.09H51.7288V36.74H50.8988ZM48.7588 42.35C46.8888 42.35 45.7388 42.98 45.7388 44.06C45.7388 45.14 46.8888 45.76 48.7588 45.76C50.6188 45.76 51.7688 45.14 51.7688 44.06C51.7688 42.98 50.6188 42.35 48.7588 42.35ZM48.7588 43.01C50.1188 43.01 50.9488 43.4 50.9488 44.06C50.9488 44.72 50.1188 45.11 48.7588 45.11C47.3988 45.11 46.5688 44.72 46.5688 44.06C46.5688 43.4 47.3988 43.01 48.7588 43.01ZM48.9388 38.65V39.34H51.0788V38.65H48.9388Z"
            fill={activeNav === 3 ? "#4E49E2" : "#BDBDBD"}
          />
        </svg>
      </Link>
      <Link
        to="/chatlist"
        className="nav-link"
        onClick={() => {
          setActiveNav(4);
          setChatState(false);
          localStorage.setItem("newChat", "false");
        }}
      >
        <svg
          width="60"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="56" fill="white" />

          {newChatState && is_token ? (
            <svg
              width="60"
              height="10"
              viewBox="0 0 60 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="45" cy="7" r="3" fill="#ED3E44" />
            </svg>
          ) : null}

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 28.967V17C21 15.3431 22.3431 14 24 14H36C37.6569 14 39 15.3431 39 17V25C39 26.6569 37.6569 28 36 28H26.0704L24.6825 30.0819C24.6825 30.0819 24.6825 30.0818 24.6825 30.0819C23.5793 31.7366 21 30.9556 21 28.967ZM23.0183 28.9725L24.7625 26.3562C24.8255 26.2617 24.9068 26.1832 25 26.1242C25.1262 26.0442 25.2743 26 25.4281 26H36C36.5523 26 37 25.5523 37 25V17C37 16.4477 36.5523 16 36 16H24C23.4477 16 23 16.4477 23 17V28.967C23 28.9769 23.0128 28.9808 23.0183 28.9725Z"
            fill={activeNav === 4 ? "#4E49E2" : "#BDBDBD"}
          />
          <circle
            cx="26"
            cy="21"
            r="1"
            fill={activeNav === 4 ? "#4E49E2" : "#BDBDBD"}
          />
          <circle
            cx="30"
            cy="21"
            r="1"
            fill={activeNav === 4 ? "#4E49E2" : "#BDBDBD"}
          />
          <circle
            cx="34"
            cy="21"
            r="1"
            fill={activeNav === 4 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            d="M19.7012 42.68H17.8212V38.46H19.7012V42.68ZM21.7912 40.15H20.4612V37.81H17.0512V43.33H20.4612V40.83H21.7912V45.29H22.5712V36.97H21.7912V40.15ZM23.5712 36.77V45.73H24.3512V36.77H23.5712ZM28.5904 37.62H27.8004V39.33C27.8004 40.87 27.0604 42.48 25.8304 43.2L26.3404 43.82C27.2304 43.27 27.8804 42.25 28.2004 41.06C28.5204 42.15 29.1204 43.1 29.9704 43.62L30.4404 42.98C29.2604 42.26 28.5904 40.74 28.5904 39.3V37.62ZM30.9504 39.99H29.4704V40.67H30.9504V45.3H31.7204V36.97H30.9504V39.99ZM32.7704 36.77V45.74H33.5504V36.77H32.7704ZM38.3296 38.37H40.4396V37.69H35.4296V38.37H37.5096V39.51C37.5096 41.06 36.4196 42.75 35.1296 43.36L35.6096 44.02C36.6296 43.5 37.5096 42.37 37.9196 41.06C38.3496 42.29 39.2296 43.32 40.2696 43.8L40.7296 43.14C39.4096 42.58 38.3296 41.03 38.3296 39.51V38.37ZM41.6496 36.78V45.74H42.4696V36.78H41.6496Z"
            fill={activeNav === 4 ? "#4E49E2" : "#BDBDBD"}
          />
        </svg>
      </Link>

      <Link to="/login" className="nav-link" onClick={() => setActiveNav(5)}>
        <svg
          width="60"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="56" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35 18C35 20.7614 32.7614 23 30 23C27.2386 23 25 20.7614 25 18C25 15.2386 27.2386 13 30 13C32.7614 13 35 15.2386 35 18ZM30 21C31.6569 21 33 19.6569 33 18C33 16.3431 31.6569 15 30 15C28.3431 15 27 16.3431 27 18C27 19.6569 28.3431 21 30 21Z"
            fill={activeNav === 5 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 23C26.6863 23 24 25.6863 24 29C24 29.5523 23.5523 30 23 30C22.4477 30 22 29.5523 22 29C22 24.5817 25.5817 21 30 21C34.4183 21 38 24.5817 38 29C38 29.5523 37.5523 30 37 30C36.4477 30 36 29.5523 36 29C36 25.6863 33.3137 23 30 23Z"
            fill={activeNav === 5 ? "#4E49E2" : "#BDBDBD"}
          />
          <path
            d="M8.69195 38.33H11.202V42.8H8.69195V38.33ZM7.89195 43.46H12.002V37.67H7.89195V43.46ZM15.912 40.35H14.432V36.78H13.612V45.74H14.432V41.04H15.912V40.35ZM23.2512 36.77V45.76H24.0712V36.77H23.2512ZM19.3412 37.46C18.0112 37.46 17.0612 38.68 17.0612 40.59C17.0612 42.5 18.0112 43.72 19.3412 43.72C20.6712 43.72 21.6212 42.5 21.6212 40.59C21.6212 38.68 20.6712 37.46 19.3412 37.46ZM19.3412 38.2C20.2112 38.2 20.8312 39.14 20.8312 40.59C20.8312 42.05 20.2112 42.99 19.3412 42.99C18.4612 42.99 17.8412 42.05 17.8412 40.59C17.8412 39.14 18.4612 38.2 19.3412 38.2ZM27.5004 38.57H28.6204V42.78C28.2404 42.8 27.8704 42.81 27.5004 42.82V38.57ZM29.3704 38.57H30.1104V37.91H26.0104V38.57H26.7504V42.84C26.4104 42.85 26.1104 42.85 25.8404 42.85L25.9204 43.53C27.0904 43.53 28.9704 43.49 30.3604 43.23L30.3104 42.63C30.0204 42.67 29.6904 42.7 29.3704 42.73V38.57ZM31.0704 40.19H29.8504V40.91H31.0704V45.27H31.8404V36.99H31.0704V40.19ZM32.8004 36.78V45.74H33.5904V36.78H32.8004ZM41.6496 36.77V45.76H42.4696V36.77H41.6496ZM37.7396 37.46C36.4096 37.46 35.4596 38.68 35.4596 40.59C35.4596 42.5 36.4096 43.72 37.7396 43.72C39.0696 43.72 40.0196 42.5 40.0196 40.59C40.0196 38.68 39.0696 37.46 37.7396 37.46ZM37.7396 38.2C38.6096 38.2 39.2296 39.14 39.2296 40.59C39.2296 42.05 38.6096 42.99 37.7396 42.99C36.8596 42.99 36.2396 42.05 36.2396 40.59C36.2396 39.14 36.8596 38.2 37.7396 38.2ZM47.5288 38.37H49.6388V37.69H44.6288V38.37H46.7088V39.51C46.7088 41.06 45.6188 42.75 44.3288 43.36L44.8088 44.02C45.8288 43.5 46.7088 42.37 47.1188 41.06C47.5488 42.29 48.4288 43.32 49.4688 43.8L49.9288 43.14C48.6088 42.58 47.5288 41.03 47.5288 39.51V38.37ZM50.8488 36.78V45.74H51.6688V36.78H50.8488Z"
            fill={activeNav === 5 ? "#4E49E2" : "#BDBDBD"}
          />
        </svg>
      </Link>
    </nav>
  );
};

export default BottomNav;
