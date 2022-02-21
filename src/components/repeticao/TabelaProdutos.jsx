import react from "react";
import produtos from "../../data/produtos"

import TabelaProdutos from "../repeticao/TabelaProdutos.css"

export default (props) => {
    const produtosLI = produtos.map((produto, i) => {
        return(
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id})</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td> 
            </tr>
        );
    });

    return (
        <div className="TabelaProdutos">
            <h2 style={{textAlign: 'center'}}>Tabela Mercadinho React</h2>
            
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                        {produtosLI}
                </tbody>
            </table>
        </div>
    )
}