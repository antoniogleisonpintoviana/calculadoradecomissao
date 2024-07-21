<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ficha de Adesão - Pessoa Física</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .header {
            text-align: center;
            padding: 20px 10px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid #ddd;
        }
        .header img {
            width: 200px;
            height: auto;
        }
        .container {
            max-width: 90%;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
            font-size: 1.5em;
        }
        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }
        select, input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #fff;
            font-size: 16px;
        }
        .result {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 4px;
            background-color: #e8f5e9;
            position: relative;
        }
        .result div {
            margin-bottom: 5px;
        }
        .comissao {
            margin-top: 2cm;
            font-size: 1.5em;
            color: #4caf50;
            border-color: #4caf50;
        }
        #fipeLink {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #007bff;
            font-size: 18px;
            text-decoration: none;
        }
        #fipeLink:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .header img {
                width: 150px;
            }
            h1 {
                font-size: 1.2em;
            }
            .result {
                font-size: 1em;
                padding: 8px;
            }
            .comissao {
                font-size: 1.2em;
                margin-top: 1.5cm;
            }
        }
        @media (max-width: 480px) {
            .header img {
                width: 120px;
            }
            .container {
                padding: 15px;
            }
        }
        #vehicleForm {
            display: none; /* Inicialmente escondido */
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="image/logo.png">
    </div>
    <div class="container">
        <h1>Calculadora de Comissão</h1>
        <label for="tabela">Selecione a tabela:</label>
        <select id="tabela">
            <option value="" disabled selected>Selecione a tabela</option>
            <option value="delta">TABELA DELTA BR</option>
            <option value="auto">TABELA AUTO BR</option>
        </select>
        <label for="valorCredito">Selecione o valor da carta de crédito:</label>
        <select id="valorCredito" disabled>
            <option value="" disabled selected>Selecione a tabela primeiro</option>
        </select>
        <div class="result" id="resultadoComissao">
            <div id="credito"></div>
            <div id="primeiraParcela"></div>
            <div id="proximasParcelas"></div>
            <div id="comissao" class="comissao">A comissão será exibida aqui</div>
        </div>
        <a href="https://veiculos.fipe.org.br/" id="fipeLink" target="_blank">Ver tabela FIPE</a>
		<br>
		<br>
		<a style='position:absolute;left:45%' href="cadastrarclientes.html"  target="_blank">Cadastrar Cliente</a>
		
		<!--file:///C:/Users/gleisao/OneDrive/%C3%81rea%20de%20Trabalho/gleison/sistema/cadastrarclientes.html -->
        <!--<button id="showFormButton">Cadastrar Cliente</button> --> <!-- Botão para mostrar o formulário -->
    </div>
	
	<a style='position:absolute;left:48%'href="sistema.html"><button>Voltar</button></a>
    
    <div class="container">
        <form id="vehicleForm">
            <h1>Ficha de Adesão - Pessoa Física</h1>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required pattern="\d{11}" title="Digite 11 dígitos">

            <label for="sexo">Sexo:</label>
            <select id="sexo" name="sexo" required>
                <option value="" disabled selected>Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </select>

            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="date" id="dataNascimento" name="dataNascimento" required>

            <label for="tipoDocumento">Tipo de Documento:</label>
            <input type="text" id="tipoDocumento" name="tipoDocumento" required>

            <label for="orgaoEmissor">Órgão Emissor:</label>
            <input type="text" id="orgaoEmissor" name="orgaoEmissor" required>

            <label for="ufEmissor">UF Emissor:</label>
            <input type="text" id="ufEmissor" name="ufEmissor" required maxlength="2" pattern="[A-Za-z]{2}" title="Digite 2 letras">

            <label for="dataEmissao">Data de Emissão:</label>
            <input type="date" id="dataEmissao" name="dataEmissao" required>

            <label for="nacionalidade">Nacionalidade:</label>
            <input type="text" id="nacionalidade" name="nacionalidade" required>

            <label for="naturalidade">Naturalidade:</label>
            <input type="text" id="naturalidade" name="naturalidade" required>

            <label for="uf">UF:</label>
            <input type="text" id="uf" name="uf" required maxlength="2" pattern="[A-Za-z]{2}" title="Digite 2 letras">

            <label for="estadoCivil">Estado Civil:</label>
            <input type="text" id="estadoCivil" name="estadoCivil" required>

            <label for="nomePai">Nome do Pai:</label>
            <input type="text" id="nomePai" name="nomePai" required>

            <label for="nomeMae">Nome da Mãe:</label>
            <input type="text" id="nomeMae" name="nomeMae" required>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>

            <label for="numero">Número:</label>
            <input type="number" id="numero" name="numero" required>

            <label for="complemento">Complemento:</label>
            <input type="text" id="complemento" name="complemento">

            <label for="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" required>

            <label for="municipio">Município:</label>
            <input type="text" id="municipio" name="municipio" required>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" name="estado" required maxlength="2" pattern="[A-Za-z]{2}" title="Digite 2 letras">

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required pattern="\d{8}" title="Digite 8 dígitos">

            <label for="dddCelular">DDD + Celular:</label>
            <input type="tel" id="dddCelular" name="dddCelular" required pattern="\d{2}\d{9}" title="Digite 2 dígitos para o DDD e 9 dígitos para o número de celular">

            <label for="dddFoneComercial">DDD + Fone Comercial:</label>
            <input type="tel" id="dddFoneComercial" name="dddFoneComercial" pattern="\d{2}\d{8,9}" title="Digite 2 dígitos para o DDD e 8 ou 9 dígitos para o número de telefone">

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="nomeReferencia">Nome Referência:</label>
            <input type="text" id="nomeReferencia" name="nomeReferencia" required>

            <label for="dddFoneReferencia">DDD + Fone Referência:</label>
            <input type="tel" id="dddFoneReferencia" name="dddFoneReferencia" required pattern="\d{2}\d{8,9}" title="Digite 2 dígitos para o DDD e 8 ou 9 dígitos para o número de telefone">

            <label for="enderecoReferencia">Endereço Referência:</label>
            <input type="text" id="enderecoReferencia" name="enderecoReferencia" required>

            <label for="parentescoReferencia">Parentesco Referência:</label>
            <input type="text" id="parentescoReferencia" name="parentescoReferencia" required>

            <button type="button" onclick="generatePDF()">Gerar PDF</button>
        </form>
		<br>
		<br>
		<br>
		<a style='visibility:hidden' id="cancelar" href="sistema.html"><button>Cancelar</button></a>
    </div>

   

    <script>
        const dadosParcelasDelta = {
            "33775.82": { primeiraParcela: 572.51, proximasParcelas: 438.82 },
            "36373.96": { primeiraParcela: 615.55, proximasParcelas: 472.58 },
            "38452.47": { primeiraParcela: 651.78, proximasParcelas: 499.58 },
            "41570.24": { primeiraParcela: 704.62, proximasParcelas: 540.09 },
            "46766.52": { primeiraParcela: 792.70, proximasParcelas: 607.60 },
            "51962.80": { primeiraParcela: 880.78, proximasParcelas: 675.11 },
            "57159.08": { primeiraParcela: 968.86, proximasParcelas: 742.62 },
            "62355.36": { primeiraParcela: 1056.94, proximasParcelas: 810.13 },
            "67551.64": { primeiraParcela: 1145.01, proximasParcelas: 877.64 }
        };

        const dadosParcelasAuto = {
            "51962.80": { primeiraParcela: 854.30, proximasParcelas: 654.81 },
            "57159.08": { primeiraParcela: 939.73, proximasParcelas: 720.30 },
            "62355.36": { primeiraParcela: 1025.16, proximasParcelas: 785.78 },
            "67551.64": { primeiraParcela: 1110.59, proximasParcelas: 851.26 },
            "72747.92": { primeiraParcela: 1196.02, proximasParcelas: 916.74 },
            "77944.20": { primeiraParcela: 1281.45, proximasParcelas: 982.22 },
            "83140.48": { primeiraParcela: 1366.88, proximasParcelas: 1047.70 },
            "88336.76": { primeiraParcela: 1452.31, proximasParcelas: 1113.18 },
            "93533.04": { primeiraParcela: 1537.74, proximasParcelas: 1178.67 },
            "98729.32": { primeiraParcela: 1623.17, proximasParcelas: 1244.15 },
            "103926.60": { primeiraParcela: 1708.60, proximasParcelas: 1309.63 }
        };

        const selectTabela = document.getElementById('tabela');
        const selectCredito = document.getElementById('valorCredito');

        selectTabela.addEventListener('change', function() {
            const tabela = this.value;
            let opcoesCredito;

            selectCredito.innerHTML = '<option value="" disabled selected>Selecione o valor da carta de crédito</option>';

            if (tabela === 'delta') {
                opcoesCredito = Object.keys(dadosParcelasDelta);
            } else if (tabela === 'auto') {
                opcoesCredito = Object.keys(dadosParcelasAuto);
            }

            opcoesCredito.forEach(valor => {
                const option = document.createElement('option');
                option.value = valor;
                option.textContent = `R$ ${parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                selectCredito.appendChild(option);
            });

            selectCredito.disabled = false;
        });

        selectCredito.addEventListener('change', function() {
            const valorCredito = parseFloat(this.value);
            const tabela = selectTabela.value;
            const comissao = valorCredito * 0.004;
            let dados;

            if (tabela === 'delta') {
                dados = dadosParcelasDelta[this.value];
            } else if (tabela === 'auto') {
                dados = dadosParcelasAuto[this.value];
            }

            const credito = document.getElementById('credito');
            const primeiraParcela = document.getElementById('primeiraParcela');
            const proximasParcelas = document.getElementById('proximasParcelas');
            const resultadoComissao = document.getElementById('comissao');

            credito.innerText = `Valor do crédito: R$ ${valorCredito.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            primeiraParcela.innerText = `Primeira parcela: R$ ${dados.primeiraParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            proximasParcelas.innerText = `Próximas parcelas: R$ ${dados.proximasParcelas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            resultadoComissao.innerText = `Comissão: R$ ${comissao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

            resultadoComissao.classList.add('explode');

            setTimeout(() => {
                resultadoComissao.classList.remove('explode');
            }, 2000);
        });
    </script>
</body>
</html>

