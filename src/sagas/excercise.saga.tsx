import { put } from "redux-saga/effects";
import { createModule } from 'saga-slice';
import excerciseApi from "../api/excercise.api";

const excerciseSlice =  createModule({
    name: 'Excercise',
    initialState: {
        isFetching: false,
        data: [],
        error: null,
    },
    reducers: {
        fetch: (state: any) => {
            state.isFetching = true;
        },
        fetchSuccess: (state, payload) => {
            state.isFetching = false;
            state.data = payload;
        },
        fetchFail: (state, payload) => {
            state.isFetching = false;
            state.error = payload;
        }
    },
    sagas: (A) => ({
        *[A.fetch]({ payload }) {
            try {
                const data = yield excerciseApi.fetchExcercise(payload);
                yield put(A.fetchSuccess(data));
            }
            catch (e) {
                yield put(A.fetchFail(e));
            }
        }
    })
});

export const excerciseActions: any = excerciseSlice.actions;
export default excerciseSlice;