// CRIAR OBJETOS E VARIÁVEIS 
const obj_body = document.querySelector('body')
const obj_exibe_data = document.querySelector('#exibe_data')

const obj_input_data_ini = document.querySelector('#input_data_ini')
const obj_input_data_fim = document.querySelector('#input_data_fim')

// Formato de Data do Firefox: YYYY/MM/DD
let data_ini = new Date('9999/12/31')
let data_fim = new Date('0001/01/01')

// EVENTOS
obj_body.addEventListener('load', funPreencherData(), funLimparFormularios())

obj_link_importar.addEventListener('click', function() { funExibir('#imp'); funTelaResImp() } )
obj_link_saldo.addEventListener('click', function() { funExibir('#saldo'); funTelaSaldo() } )
obj_link_home.addEventListener('click', function() { funEsconderTudo(); funTelaHome() } )

obj_input_sel_arq.addEventListener('change', funLerArquivoLocal)
conteudo_arq.addEventListener('load', funCarregarArquivoLocal)

obj_sel_conta_saldo.addEventListener('change', funCalcularSaldo)

obj_bt_extrato.addEventListener('click', funValidarCampos)

obj_bt_car_arq_nuv.addEventListener('click', funLerArquivoNuvem)
arq_nuvem.addEventListener('readystatechange', funCarregarArquivoNuvem)


// FUNÇÕES
function funPreencherData() {
    let agora = new Date
    obj_exibe_data.innerHTML = agora.toLocaleDateString('pt-br')    
}

function funTelaHome() {
    obj_home.setAttribute('class', 'exibe')
}

function funTratamentoDatas() {
    for ( var i = 0; i < dados_arquivo.length; i++ ) {
        if ( dados_arquivo[i]['data'] < data_ini ) {
            data_ini = dados_arquivo[i]['data']
        }
        if ( dados_arquivo[i]['data'] > data_fim ) {
            data_fim = dados_arquivo[i]['data']
        }
    }

    // Conversão para o mesmo formato de data do input: YYYY-MM-DD (ISO)
    let converte = data_ini.toISOString().slice(0, 10)
    obj_input_data_ini.setAttribute('value', converte)
    obj_input_data_ini.setAttribute('min', converte)
    obj_input_data_fim.setAttribute('min', converte)

    converte = data_fim.toISOString().slice(0, 10)
    obj_input_data_fim.setAttribute('value', converte)
    obj_input_data_ini.setAttribute('max', converte)
    obj_input_data_fim.setAttribute('max', converte)
}