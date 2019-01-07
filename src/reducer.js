const INITIAL_STATE = {
  materiais: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COMPRA_MATERIAL":
      return { ...state, materiais: [...state.materiais, action.payload] };

    default:
      return state;
  }
};
