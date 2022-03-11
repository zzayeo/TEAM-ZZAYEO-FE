import React from "react";
import styled from "styled-components";

const StyleModal = (props) => {
  const { styleShowModal, styleCloseModal, setStyle } = props;

  const travelStyle = [
    "액티비티 체험",
    "문화 예술 역사 체험",
    "명소 관광지 방문필수",
    "페스티벌 참여",
    "먹방투어",
    "쇼핑 좋아",
    "편하게 쉬는 휴양",
    "SNS 핫플 투어",
    "호캉스",
    "자연친화",
  ];

  const [clickedStyle, changeStyle] = React.useState(0);

  if (styleShowModal) {
    return (
      <React.Fragment>
        <OpenModal>
          <Overlay onClick={styleCloseModal}>
            <Modal>
              <Taps>
                <Ul>여행 스타일</Ul>
              </Taps>
              <Container>
                {travelStyle.map((l, i) => {
                  return (
                    <Category
                      onClick={(e) => {
                        e.stopPropagation();
                        changeStyle(i);
                        setStyle(travelStyle[i]);
                      }}
                      style={{
                        backgroundColor:
                          i === clickedStyle ? "#535353" : "#F4F4F4",
                        color: i === clickedStyle ? "#FFFFFF" : "#757575",
                      }}
                      key={i}
                    >
                      {l}
                    </Category>
                  );
                })}
              </Container>
              <Div>
                <Button onClick={styleCloseModal}>
                  <p>여행 확인하기</p>
                </Button>
              </Div>
            </Modal>
          </Overlay>
        </OpenModal>
      </React.Fragment>
    );
  }
  return null;
};

const ModalBox = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.72);
  z-index: 9999;
  overflow-y: auto;
  max-width: 420px;
  width: 100%;
  margin: auto;
`;

const OpenModal = styled(ModalBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 420px;
  width: 100%;
  height: 586px;
  background-color: #ffffff;
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
`;

const Taps = styled.div`
  box-sizing: border-box;
  margin: 24px 0px 24px 24px;
  display: inline-flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
`;

const Ul = styled.div`
  list-style-type: none;
  margin-right: 24px;
`;

const Div = styled.div`
  position: absolute;
  width: 100%;
  bottom: 36px;
`;

const Button = styled.div`
  height: 48px;
  margin: 0px 24px;
  background-color: #535353;
  border-radius: 8px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 24px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px;
  margin-right: 8px;
  margin-bottom: 12px;
  border-radius: 16px;
  cursor: pointer;
`;

export default StyleModal;
