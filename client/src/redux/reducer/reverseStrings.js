import { REVERSE_STRING } from "../actionsCreators";

const initialState = {
  reversedTextArray: [],
}

function reverseTextEngine(state = initialState, action) {
  switch (action.type) {
    case REVERSE_STRING:
      console.log(action)
      return {
        ...state,
        reversedTextArray: [action.payload, ...state.reversedTextArray],
      };

    default:
      return state;
  }
}

export default reverseTextEngine