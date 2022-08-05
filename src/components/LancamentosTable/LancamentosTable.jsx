import React from "react";
import currencyFormatter from "currency-formatter";
import { MdEdit, MdDelete } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { ImCancelCircle} from "react-icons/im";

function LancamentosTable(props) {
  const rows = props.lancamentos.map((lancamento) => {
      return (
        <tr key={lancamento.id}>
          <td>{lancamento.descricao}</td>
          <td>
            {currencyFormatter.format(lancamento.valor, { locale: "pt-BR" })}
          </td>
          <td>{lancamento.tipo}</td>
          <td>{lancamento.mes}</td>
          <td>{lancamento.status}</td>
          <td>
          <button onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')} className="btn btn-success">
              <abbr title="Efetivar">
                <BsFillCheckSquareFill />
              </abbr>
            </button>
            <button onClick={e => props.alterarStatus(lancamento, 'CANCELADO')} className="btn btn-warning">
              <abbr title="Cancelar">
                <ImCancelCircle/>
              </abbr>
            </button>
            <button onClick={e => props.editAction(lancamento.id)} className="btn btn-primary">
              <abbr title="Editar">
                <MdEdit />
              </abbr>
            </button>
            <button onClick={e => props.deleteAction(lancamento.id)} className="btn btn-danger">
              <abbr title="Deletar">
                <MdDelete />
              </abbr>
            </button>
          </td>
        </tr>
      );
    });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mês</th>
          <th scope="col">Situação</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default LancamentosTable;
