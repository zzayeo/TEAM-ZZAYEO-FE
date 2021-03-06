import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import SearchBar from "./SearchBar";
import { actionCreators as addPlaceActions } from "../../../redux/modules/addPlace";
import { history } from "../../../redux/ConfigureStore";
import { useDispatch, useSelector } from "react-redux";

const SearchMap = () => {
  const dispatch = useDispatch();
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGooglemaps] = useState(null);
  const [center, setCenter] = useState({ lat: 37.5, lng: 127 });
  

  let zoom = 10;

  const [places, setPlaces] = useState([]);

  if (window.screen.width >= 768) {
    zoom = 15;
  }
  //serchBar
  const handleApiloaded = (map, maps) => {
    if (map && maps) {
      setApiReady(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };
  //장소찾기
  const addPlace = (places) => {
    if (places) {
      setPlaces(places);
    }
  };



  return (
    <Container>
      {/* SearchBox 구현을 위해서는 지도객체인 map, api요소가 있는 maps를 프로퍼티로 보내야한다. */}
      {apiReady && googlemaps && (
        <SearchBar map={map} mapApi={googlemaps} addPlace={addPlace} />
      )}

      <div style={{ height: "100%", width: "100%"}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyD688QW0Av06YgBIC_XFCTwxAbiNDMsMQA",
            libraries: "places",
            //GoogleMap로드시 라이브러리로 places를 추가
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          // 맵의 줌 레벨을 제어하는 버튼인 "+/-" 슬라이더
          yesIWantToUseGoogleMapApiInternals
          // 구글맵 api의 internals(내부)를 사용한다.
          onGoogleApiLoaded={({ map, maps }) => {
            handleApiloaded(map, maps);
          }}

         
          // 위치를 렌더해주는 함수
        >
          {places?.length !== 0 &&
            places?.map((place, index) => {         
              return(<Marker
                key={index}
                text={place.name}
                lat={place.lat}
                lng={place.lng}
              />)
            })}

        </GoogleMapReact>
      </div>
    </Container>
  );
};

export default SearchMap;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

