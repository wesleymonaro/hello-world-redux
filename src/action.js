export const compraMateriais = () => {
  return dispatch => {
    // Código para fazer requisição a uma API

    dispatch({
      type: "COMPRA_MATERIAL",
      payload: {
        nome: "Caixa de canetas",
        qtd: 20
      }
    });
  };
};
