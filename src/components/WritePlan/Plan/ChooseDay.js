import React, { useState } from "react";
import styled from "styled-components";
import { actionCreators as mapActions } from "../../../redux/modules/map";
import { useDispatch, useSelector } from "react-redux";
import EditMenu from "./EditMenu";
import WritePlanModal from "./WritePlanModal";
import { display } from "@mui/system";
import SwiperImage from "./SwiperImage";
import { history } from "../../../redux/ConfigureStore";

const ChooseDay = (props) => {
  const dayList = props.days;
  const [currentTab, setCurrentTab] = useState(0);

  const polyLinedata = useSelector((state) => state.map.polyline);
  const myPlan = useSelector((state) => state.plan.myPlan);

  const startDate = myPlan?.startDate;
  const endDate = myPlan?.endDate;

  const betweenDay = (startDate, endDate) => {
    var res_day = [];
    var ss_day = new Date(startDate);
    var ee_day = new Date(endDate);
    while (ss_day.getTime() <= ee_day.getTime()) {
      var _mon_ = ss_day.getMonth() + 1;
      _mon_ = _mon_ < 10 ? "0" + _mon_ : _mon_;
      var _day_ = ss_day.getDate();
      _day_ = _day_ < 10 ? "0" + _day_ : _day_;
      res_day.push(ss_day.getFullYear() + "-" + _mon_ + "-" + _day_);
      ss_day.setDate(ss_day.getDate() + 1);
    }
    return res_day;
  };

  const _myDays = betweenDay(startDate, endDate);

  const myDays = _myDays[currentTab];
  const mygetDate = new Date(myDays).getDate();
  const mygetMonth = new Date(myDays).getMonth() + 1;
  const getDay = new Date(myDays).getDay();
  const myDay = ["일", "월", "화", "수", "목", "금", "토"];
  const mygetDay = myDay[getDay];

  const dispatch = useDispatch();

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  const day1BtnRef = React.useRef([]);

  React.useEffect(() => {
    if (day1BtnRef?.current?.length !== 0) {
      // setTimeout(() => {
      //   day1BtnRef?.current[0]?.click();
      // }, 800);

      day1BtnRef?.current?.forEach((v, i) => {
        if (parseInt(v?.id) + 1 === dayList[currentTab].dayNumber) {
          day1BtnRef?.current[i]?.click();
        }
      });
    }
  }, [dayList]);

  return (
    <>
      <div>
        <TabMenu>
          {dayList &&
            dayList.map((d, i) => {
              return (
                <DayButton
                  ref={(el) => (day1BtnRef.current[i] = el)}
                  id={i}
                  key={i}
                  className={currentTab === i ? "submenu focused" : "submenu"}
                  onClick={() => {
                    selectMenuHandler(i);
                    if (currentTab !== i) {
                      polyLinedata.setMap(null);
                      dispatch(mapActions.addPolyline(polyLinedata));
                    }
                    dispatch(mapActions.sendDayId(d.dayId));
                  }}
                  style={{
                    backgroundColor: i === currentTab ? "#4E49E2" : "#F4F4F4",
                    color: i === currentTab ? "#FFFFFF" : "#9E9E9E",
                  }}
                >
                  day{i + 1}
                </DayButton>
              );
            })}
        </TabMenu>
        <Container>
          <TravelDay>
            {mygetMonth}.{mygetDate}/{mygetDay}
          </TravelDay>

          {dayList &&
            dayList[currentTab]?.places.map((v, i) => {
              return (
                <div key={i} style={{ marginTop: "16px", display: "table" }}>
                  <Line>
                    {(i + 1) % 2 !== 0 ? (
                      <CirclePurPle> {i + 1} </CirclePurPle>
                    ) : (
                      <CircleGreen> {i + 1} </CircleGreen>
                    )}
                  </Line>
                  <div style={{ width: "100%", display: "table-cell" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text>{v.time}</Text>
                      <EditMenu
                        planId={dayList && dayList[currentTab]?.planId}
                        placeId={v.placeId}
                        placesData={dayList[currentTab].places[i]}
                      />
                    </div>
                    <PlaceName>{v.placeName}</PlaceName>
                    <Address>주소:{v.address}</Address>
                    {v.memoText !== "" ? (
                      <MemoBox>
                        <Memo>{v.memoText}</Memo>
                      </MemoBox>
                    ) : null}
                    <SwiperImage image={v.memoImage} />
                  </div>
                </div>
              );
            })}
          <AddPlaceBox>
            <WritePlanModal
              planId={dayList && dayList[currentTab]?.planId}
              dayId={dayList && dayList[currentTab]?.dayId}
              dayNumber={dayList && dayList[currentTab]?.dayNumber}
            />
          </AddPlaceBox>
          <AddButton
            onClick={() => {
              history.push("/myplan");
            }}
          >
            일정 작성완료
          </AddButton>
        </Container>
      </div>
    </>
  );
};
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px auto 0px auto;
  width: 100%;
  height: 54px;
  background-color: #4e49e2;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

const Line = styled.div`
  border-left: 1px solid #e0e0e0;
  display: table-cell;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 24px 0px 24px;
  /* padding: 0% 5%; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  color: #212121;
`;

const PlaceName = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  color: #212121;
  margin-top: 11px;
`;

const Address = styled.span`
  font-family: "Roboto", sans-serif;
  color: #757575;
  font-size: 13px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`;

const MemoBox = styled.div`
  width: 100%;
  min-height: 128px;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 16px;
  padding: 16px 17px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.14);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Memo = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #757575;
  font-size: 12px;
  line-height: 16px;
  white-space: pre-wrap;
`;

const TabMenu = styled.div`
  background-color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding-left: 24px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  /* .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  } */
`;

const TravelDay = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;
const AddPlaceBox = styled.div`
  width: 100%;
  height: 41px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  margin-top: 22px;
  line-height: 41px;
  text-align: center;
  margin-bottom: 10px;
`;

const DayButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content; //글자크기만큼
  height: 32px;
  margin: 22.5px 8px 22px 0px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 14px;
  background-color: #eee;
  font-weight: 400;
  cursor: pointer;
`;

const CirclePurPle = styled.div`
  background-color: #4e49e2;
  color: white;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  /* width: fit-content; */
  height: 20px;
  width: 20px;
  border-radius: 25px;
  font-size: 14px;
  line-height: 25px;
  margin-top: 8px;
  margin-right: -3px;
  transform: translate(-50%, 0%);
`;
const CircleGreen = styled.div`
  background-color: #8ce569;
  color: white;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  /* width: fit-content; */
  height: 20px;
  width: 20px;
  border-radius: 25px;
  font-size: 14px;
  line-height: 25px;
  margin-top: 8px;
  margin-right: -3px;
  transform: translate(-50%, 0%);
`;

export default ChooseDay;
