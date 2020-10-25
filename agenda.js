const agendamentos=[{
        data: '13 Jul',
        horario: '07:30',
        nome: 'Guilherme Andrade Silva',
        status: 'agendado',
        medico: 'Fabrício Maciel',
        telefone: '(31) 98346-8649',
    },{
        data: '13 Jul',
        horario: '08:00',
        nome: 'Mateus Morais Dutra',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 98481-6258',
    },{
        data: '13 Jul',
        horario: '08:30',
        nome: 'Abelardo Castro de Araújo Júnior',
        status: 'atrasado',
        medico: 'Daniela Trindade',
        telefone: '(31) 99988-7198',
    },{
        data: '13 Jul',
        horario: '09:00',
        nome: 'Francisvaldo Feitosa da Silva',
        status: 'agendado',
        medico: 'Márcio Rodrigues de Castro',
        telefone: '(31) 98346-8649',
    }
]

function mostra(){
    var agendado=document.getElementById('agendado')
    var disponivel=document.getElementById('disponivel')
    for (var i=0; i<agendamentos.length; i++){
        var marcacao = agendado.cloneNode(true)
        marcacao.id=i
        marcacao.querySelector('.dia-mes-agenda').innerText = agendamentos[i].data
        marcacao.querySelector('.hora-agenda').innerText = agendamentos[i].horario
        marcacao.querySelector('.nome-agenda').innerText = agendamentos[i].nome
        marcacao.querySelector('.medico-agenda').innerText = agendamentos[i].medico
        marcacao.querySelector('.telefone-agenda').innerText = agendamentos[i].telefone
        marcacao.querySelector('.status-agenda').innerText = agendamentos[i].status
        document.getElementById('agenda').appendChild(marcacao)
    }
    agendado.parentNode.removeChild(agendado);
    disponivel.parentNode.removeChild(disponivel);
}
