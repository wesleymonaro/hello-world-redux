import React, { Component } from "react";
import { connect } from "react-redux";

import { compraMateriais } from "./action";

class HomeComponent extends Component {
  render() {
    const { materiais, compraMateriais } = this.props;

    return (
      <div>
        <h1>Teste Redux</h1>
        <button onClick={() => compraMateriais()}>Comprar material</button>

        <ul>
          {materiais.map(material => (
            <li key={material.nome}>
              {material.nome}, {material.qtd} unidades
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  materiais: state.reducer.materiais
});

const mapDispatchToProps = {
  compraMateriais
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;
