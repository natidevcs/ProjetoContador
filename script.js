function contar() {
    let inicio = document.getElementById('txti') //id 
    let fim = document.getElementById('txtf') //id
    let passo = document.getElementById('txtp') //id
    let res = document.getElementById('res') //id
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // se o inicio estiver vazio ou o fim  ou o espaço
        res.innerHTML = 'Impossívem contar!'
        //window.alert('[ERRO] Faltam dados!') ->TESTE
    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Comando inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c +=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F64C}`

    }   

        
}      
