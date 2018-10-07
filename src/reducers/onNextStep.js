import * as Types from "../constants/ActionTypes";

const onNextStep = (state, action) => {
	switch (action.type) {
		case Types.ON_NEXT_STEP:
			return {
				...state,
				activeStepIndex: state.activeStepIndex + 1,
				values: action.payload,
			};
		default:
			return state;
	}
};

export default onNextStep;
