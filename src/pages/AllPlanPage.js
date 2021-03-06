import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { actionCreators as userActions } from "../redux/modules/user";
import Filter from "../components/AllPlanPage/Filter";
import TravelList from "../components/AllPlanPage/TravelList";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllPlanPage = (props) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const scroll = React.useRef(null);

  const executeScroll = () => {
    scroll.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  React.useEffect(() => console.log(scroll.current), []);

  const location = useLocation();

  const query = location.search;

  const [feed, setFeed] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [endPage, setEndPage] = React.useState(0);
  const pageEnd = React.useRef();
  // pageNumber가 바뀔때마다 실행
  React.useEffect(() => {
    if (endPage !== 0 && pageNumber > endPage) {
      return;
    } else {
      fetchFeeds(query, pageNumber);
    }
  }, [pageNumber, query]);

  //async, await를 이용해서 비동기적으로 데이터 통신
  const fetchFeeds = async (query, pageNumber) => {
    setLoading(false);
    if (query === undefined || query === "") {
      await axios
        .get(`https://stgon.shop/api/plans?page=${pageNumber}`, {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        })
        .then((res) => {
          setFeed((prev) => [...prev, ...res.data.plans]);
          setEndPage(res.data.endPage);
        });
    } else {
      await axios
        .get(`https://stgon.shop/api/plans${query}&page=${pageNumber}`, {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        })
        .then((res) => {
          setFeed((prev) => [...prev, ...res.data.plans]);
          setEndPage(res.data.endPage);
        });
    }
    setLoading(true);
  };

  // loading이 바뀔때마다 실행
  React.useEffect(() => {
    // fetchFeed 함수에서 loading 값이 true로 바뀐다면
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  React.useEffect(() => {
    dispatch(userActions.checkUserDB());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Helmet>
        <title>짜여 : 전체 여행</title>
        <meta property="og:title" content="짜여 : 전체 여행" />
        <meta property="og:description" content="우리 함께 여행 짜여✈️" />
        <meta property="og:image" content="/images/192x192.png" />
      </Helmet>
      <Container>
        <Header>
          <HeaderTitle>전체 여행</HeaderTitle>
        </Header>
        <div ref={scroll}></div>
        <Contents>
          <Filter setFeed={setFeed} setPageNumber={setPageNumber} />
          {feed.map((l, i) => {
            return <TravelList key={i} {...l} />;
          })}
          <div ref={pageEnd}></div>
        </Contents>
        <ScrollBtn onClick={executeScroll}>
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.29319 0.292893C7.68371 -0.0976314 8.31688 -0.0976314 8.7074 0.292893L15.0714 6.65685C15.4619 7.04738 15.4619 7.68054 15.0714 8.07107C14.6808 8.46159 14.0477 8.46159 13.6572 8.07107L9.0003 3.41421L9.0003 17C9.0003 17.5523 8.55258 18 8.0003 18C7.44801 18 7.0003 17.5523 7.0003 17L7.0003 3.41421L2.34344 8.07107C1.95292 8.46159 1.31975 8.46159 0.929228 8.07107C0.538704 7.68054 0.538704 7.04738 0.929228 6.65685L7.29319 0.292893Z"
              fill="white"
            />
          </svg>
        </ScrollBtn>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 93.7%;
  max-width: 420px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  position: fixed;
  height: 56px;
  width: 100%;
  max-width: 420px;
  padding-left: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  z-index: 1;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const Contents = styled.div`
  position: relative;
  top: 56px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
`;

const ScrollBtn = styled.div`
  position: absolute;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  right: 16px;
  bottom: 72px;
  background: #8f8cf1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default AllPlanPage;
