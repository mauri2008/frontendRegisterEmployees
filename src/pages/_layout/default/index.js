import React from "react";
import * as C from "./style";
import { Link } from "react-router-dom";


export default function DefaultLayout({ children, title}) {
  return (
    <C.Page>
      <C.Header>
        <C.ElementsHeader>
          <C.Logo />
          <C.Menu>
            <ul>
              <li><Link to="/">Funcionários</Link></li>
              <li><Link to="/position">Cargos</Link></li>
            </ul>
          </C.Menu>
        </C.ElementsHeader>
      </C.Header>
      <C.Container>
        <C.Title>{title}</C.Title>
          {children}
      </C.Container>
    </C.Page>
  );
}