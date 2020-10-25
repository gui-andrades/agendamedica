const agendamentos=[{
        data: new Date('2020-07-13T08:00:00-03:00'),
        nome: 'Guilherme Andrade Silva',
        status: 'agendado',
        medico: 'Fabrício Maciel',
        telefone: '(31) 98346-8649',
    },{
        data: new Date('2020-07-13T08:30:00-03:00'),
        nome: 'Mateus Morais Dutra',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 98481-6258',
    },{
        data: new Date('2020-07-13T09:00:00-03:00'),
        nome: 'Abelardo Castro de Araújo Júnior',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 99988-7198',
    },{
        data: new Date('2020-07-13T10:30:00-03:00'),
        nome: 'Francisvaldo Feitosa da Silva',
        status: 'agendado',
        medico: 'Márcio Rodrigues de Castro',
        telefone: '(31) 98544-9273',
    }
]

var meses = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

function adicionaEntrada(estaAgendado, hora, i, j){
    var entradaAgenda = disponivel.cloneNode(true)
    if(estaAgendado){
        entradaAgenda = agendado.cloneNode(true)
        entradaAgenda.id=i
        entradaAgenda.querySelector('.dia-mes-agenda').innerText = agendamentos[j].data.getDate() + ' ' + meses[agendamentos[j].data.getMonth()]
        entradaAgenda.querySelector('.hora-agenda').innerText = (agendamentos[j].data.getHours() < 10 ? '0' : '') + agendamentos[j].data.getHours() + ':' + (agendamentos[j].data.getMinutes() < 10 ? '0' : '') + agendamentos[j].data.getMinutes()
        entradaAgenda.querySelector('.nome-agenda').innerText = agendamentos[j].nome
        entradaAgenda.querySelector('.medico-agenda').innerText = agendamentos[j].medico
        entradaAgenda.querySelector('.telefone-agenda').innerText = agendamentos[j].telefone
        entradaAgenda.querySelector('.status-agenda').innerText = agendamentos[j].status
    }else{
        entradaAgenda.id=i
        entradaAgenda.querySelector('.dia-mes-agenda').innerText = '13 Jul'
        entradaAgenda.querySelector('.hora-agenda').innerText = hora
        entradaAgenda.querySelector('.disponivel').innerText = 'DISPONÍVEL'
    }
    document.getElementById('agenda').appendChild(entradaAgenda)
}

function mostra(){
    var agendado=document.getElementById('agendado')
    var disponivel=document.getElementById('disponivel')
    var horaInicio = 8
    var horaFim = 18
    var hora=''
    var estaAgendado = false
    for (var i=0; i<20; i++){
        if(i%2==0){
            hora=(i/2 + 8) + ':00'
        }else{
            hora=((i-1)/2 + 8) + ':30'
        }
        for(var j=0;j<agendamentos.length;j++){
            var horaMarcada = agendamentos[j].data.getHours() + ':' + (agendamentos[j].data.getMinutes() < 10 ? '0' : '') + agendamentos[j].data.getMinutes()
            if(hora==horaMarcada){
                estaAgendado = true
                break
            }
        }
        adicionaEntrada(estaAgendado, hora, i, j)
        estaAgendado=false
    }
    agendado.parentNode.removeChild(agendado);
    disponivel.parentNode.removeChild(disponivel);
}
