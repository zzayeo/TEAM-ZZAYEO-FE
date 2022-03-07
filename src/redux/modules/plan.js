import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

const token = localStorage.getItem("token");


// 액션타입
const GET_PLAN = "GET_PLAN";
const CREATE_PLAN = "CREATE_PLAN";
const GET_DAYPLAN = "GET_DAYPLAN";

// 액션 생성 함수
const getPlan = createAction(GET_PLAN, (plans) => ({ plans }));
const createPlan = createAction(CREATE_PLAN, (planId) => ({ planId }));
const getdayPlan = createAction(GET_DAYPLAN, (myPlan) => ({ myPlan }));

// 초기 상태값
const initialState = {
  list: [],
  myPlan: [],
  is_loaded: false,
  planId: "",
  aaa: [],
};

// 미들웨어

//전체포스트 내용 받아오기
const getPlanDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/api/plans")
      .then((res) => {
        dispatch(getPlan(res.data.plans));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//일정생성하기
const createPlanDB = (plan) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/plans", plan)
      .then((res) => {
        console.log(res.data.result);
        const planId = res.data.planId
        dispatch(createPlan(planId));
        instance
        .get(`/api/plans/${planId}`, {})
        .then(function (response) {
          console.log(response)
          dispatch(getdayPlan(response.data.plan));
        })
      })
      .catch(function (error) {
        console.log(error);
      })   
  };
};

//특정 여행 받아오기
// const getdayPlanDB = (planId) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .get(`/api/plans/${planId}`, {})
//       .then(function (response) {
    
//         dispatch(getdayPlan(response.data.plan));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

export const saveLocationDB = (dayId, AmPm, Hour, Minute, Memo, placeName, lat, lng, address, imageURL) => {
  return (dispatch, getState, { history }) => {
    console.log(dayId, AmPm, Hour, Minute, Memo, placeName, lat, lng, address, imageURL)
    
    let formData = new FormData();
    formData.append("placeName", placeName);
    formData.append("lat", lat);
    formData.append("lng", lng);
    formData.append("address", address);
    formData.append("time", `${Hour}시 ${Minute}분`);
    formData.append("memoText", Memo);
    imageURL.map((eachfile) => {
      formData.append("imageFile", eachfile);
    });
    console.log(imageURL)
    // formData.append("memoImage", imageURL);
    
    instance
      .post(`/api/plans/days/${dayId}`,formData,{},)
      .then(function (response) {
        console.log(response);
        const planId = getState().plan.planId;
        console.log(planId)
        instance
        .get(`/api/plans/${planId}`, {})
        .then(function (response) {
          console.log(response)
          dispatch(getdayPlan(response.data.plan));
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// const createPlanDB = (plan) => {
//   //console.log(plan);
//   return function (dispatch, getState, { history }) {
//     dispatch(createPlan(plan));
//   };
// };

//리덕스
export default handleActions(
  {
    [GET_PLAN]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.plans;
      }),

    [CREATE_PLAN]: (state, action) =>
      produce(state, (draft) => {
        draft.planId = action.payload.planId;
      }),
    [GET_DAYPLAN]: (state, action) =>
      produce(state, (draft) => {
        draft.myPlan = action.payload.myPlan;
      }),
  },
  initialState
);

const actionCreators = {
  getPlan,
  getPlanDB,
  createPlan,
  createPlanDB,
  // getdayPlanDB,
  saveLocationDB,
};

export { actionCreators };