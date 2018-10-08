import * as Types from "../constants/ActionTypes";

const onNextStep = (state, action) => {
	switch (action.type) {
		case Types.ON_NEXT_STEP:
			if (action.payload === -1) {
				return {
					...state,
					activeStepIndex: state.activeStepIndex + action.payload,
				};
			} else {
				return {
					...state,
					activeStepIndex: state.activeStepIndex + 1,
					values: action.payload,
				};
			}
		default:
			return state;
	}
};

export default onNextStep;
