const agendamentos=[{
        data: new Date('2020-07-13T08:00:00-03:00'),
        nome: 'Guilherme Andrade Silva',
        status: 'agendado',
        medico: 'Fabrício Maciel',
        telefone: '(31) 98346-8649',
        email: 'guilherme_silva_98@hotmail.com',
    },{
        data: new Date('2020-07-13T08:30:00-03:00'),
        nome: 'Mateus Morais Dutra',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 98481-6258',
        email: 'mmdutra14@gmail.com',
    },{
        data: new Date('2020-07-13T09:00:00-03:00'),
        nome: 'Abelardo Castro de Araújo Júnior',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 99988-7198',
        email: 'abel.cas.ar@gmail.com',
    },{
        data: new Date('2020-07-13T10:30:00-03:00'),
        nome: 'Francisvaldo Feitosa da Silva',
        status: 'agendado',
        medico: 'Márcio Rodrigues de Castro',
        telefone: '(31) 98544-9273',
        email: 'f.valdo_portugues@hotmail.com',
    }
]

var meses = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
var agendado = document.getElementById('agendado')
var disponivel = document.getElementById('disponivel')
var infoMarcada = document.getElementById('infomarcada')
var infoDisponivel = document.getElementById('infodisponivel')
var agenda = document.getElementById('agenda')
var informacoes = document.getElementById('informacoes')
var entradaAgenda
agendado.parentNode.removeChild(agendado)
disponivel.parentNode.removeChild(disponivel)
infoMarcada.parentNode.removeChild(infoMarcada)
infoDisponivel.parentNode.removeChild(infoDisponivel)

function mostraInfoMarcada(id){
    informacoes.removeChild(informacoes.lastElementChild)
    infoMarcada.querySelector('.nome-info').innerText = agendamentos[id].nome
    infoMarcada.querySelector('.data-hora').innerText = agendamentos[id].data.getDate() + ' ' + meses[agendamentos[id].data.getMonth()] + ', ' + (agendamentos[id].data.getHours() < 10 ? '0' : '') + agendamentos[id].data.getHours() + ':' + (agendamentos[id].data.getMinutes() < 10 ? '0' : '') + agendamentos[id].data.getMinutes()
    infoMarcada.querySelector('.status-info').innerText = agendamentos[id].status
    infoMarcada.querySelector('.numero-telefone-info').innerText = agendamentos[id].telefone
    infoMarcada.querySelector('.valor-email-info').innerText = agendamentos[id].email
    infoMarcada.querySelector('.medico-info').innerText = agendamentos[id].medico
    informacoes.appendChild(infoMarcada.cloneNode(true))
}

function mostraInfoDisponivel(elem){
    informacoes.removeChild(informacoes.lastElementChild)
    infoDisponivel.querySelector('.data-hora').innerText = elem.querySelector('.dia-mes-agenda').innerText + ', ' + elem.querySelector('.hora-agenda').innerText
    informacoes.appendChild(infoDisponivel.cloneNode(true))
}

function adicionaAgendado(j){
    entradaAgenda = agendado.cloneNode(true)
    entradaAgenda.id=j
    entradaAgenda.querySelector('.dia-mes-agenda').innerText = agendamentos[j].data.getDate() + ' ' + meses[agendamentos[j].data.getMonth()]
    entradaAgenda.querySelector('.hora-agenda').innerText = (agendamentos[j].data.getHours() < 10 ? '0' : '') + agendamentos[j].data.getHours() + ':' + (agendamentos[j].data.getMinutes() < 10 ? '0' : '') + agendamentos[j].data.getMinutes()
    entradaAgenda.querySelector('.nome-agenda').innerText = agendamentos[j].nome
    entradaAgenda.querySelector('.medico-agenda').innerText = agendamentos[j].medico
    entradaAgenda.querySelector('.telefone-agenda').innerText = agendamentos[j].telefone
    entradaAgenda.querySelector('.status-agenda').innerText = agendamentos[j].status
}

function adicionaDisponivel(hora){
    entradaAgenda = disponivel.cloneNode(true)
    entradaAgenda.removeAttribute('id')
    entradaAgenda.querySelector('.dia-mes-agenda').innerText = '13 Jul'
    entradaAgenda.querySelector('.hora-agenda').innerText = hora
    entradaAgenda.querySelector('.disponivel').innerText = 'DISPONÍVEL'
}

function adicionaEntrada(estaAgendado, hora, i, j){
    if(estaAgendado){
        adicionaAgendado(j)
    }else{
        adicionaDisponivel(hora)
    }
    agenda.appendChild(entradaAgenda)
}

function mostra(){
    var horaInicio = 8
    var horaFim = 18
    var hora=''
    var estaAgendado = false
    for (var i=horaInicio; i<horaFim; i+=0.5){
        if(i%1==0){
            hora=i + ':00'
        }else{
            hora=i-0.5 + ':30'
        }
        hora = (hora.length == 5 ? '' : '0') + hora
        for(var j=0;j<agendamentos.length;j++){
            var horaMarcada = (agendamentos[j].data.getHours() < 10 ? '0' : '') +  agendamentos[j].data.getHours() + ':' + (agendamentos[j].data.getMinutes() < 10 ? '0' : '') + agendamentos[j].data.getMinutes()
            if(hora==horaMarcada){
                estaAgendado = true
                break
            }
        }
        adicionaEntrada(estaAgendado, hora, i, j)
        estaAgendado=false
    }
}
