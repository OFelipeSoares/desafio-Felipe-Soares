class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        const cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50,
        };

        
        const descontoDinheiro = 0.95;
        const acrescimoCredito = 1.03;
        

        let total = 0;
        let itensPrincipaisPedidos = new Set();

        for (let item of itens) {
            const [codigo, quantidade] = item.split(",");
            const precoItem = cardapio[codigo];

            if (!precoItem) {
                return "Item inválido!";
            }

            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            let precoTotalItem = precoItem * quantidade;

            if (formaDePagamento === "dinheiro") {
                precoTotalItem *= descontoDinheiro;
            } else if (formaDePagamento === "credito"){
                precoTotalItem *= acrescimoCredito;
            } else if (formaDePagamento === "debito"){
                precoTotalItem;
            } else {
                return "Forma de pagamento inválida!";
            }

            total += precoTotalItem

            if (codigo === "chantily" || codigo === "queijo") {
                if (!itensPrincipaisPedidos.has("cafe") || !itensPrincipaisPedidos.has("sanduiche")){
                    return "Item extra não pode ser pedido sem o principal"
                }
            }

            if (codigo === "cafe" || codigo === "sanduiche") {
                itensPrincipaisPedidos.add(codigo)
            }
        }
        
        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
}

export { CaixaDaLanchonete };
