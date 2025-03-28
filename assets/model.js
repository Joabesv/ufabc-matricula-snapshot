const DIAS_SEMANA = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const HORARIOS = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
];

function verificaDia(disciplina, indiceHorario) {
    return DIAS_SEMANA[disciplina.horarios[indiceHorario].semana] + " ";
}

function converteDia(indiceDia) {
    return DIAS_SEMANA[indiceDia] + " ";
}

function verificaHora(disciplina, indiceHorario) {
    const horas = disciplina.horarios[indiceHorario].horas;
    return `das ${horas[0]} às ${horas[horas.length - 1]}`;
}

function verificaPeriodicidade(disciplina, indiceHorario) {
    return disciplina.horarios[indiceHorario].periodicidade_extenso;
}

function clicar() {
  "display: none;" == $("div#calendario")[0].style.cssText
      ? (($("div#calendario")[0].style.cssText = "display: block;"), ($("div#disciplinaspegas")[0].style.cssText = "display: block;"))
      : (($("div#calendario")[0].style.cssText = "display: none;"), ($("div#disciplinaspegas")[0].style.cssText = "display: none"));
}

function retornaHorario(indice) {
    return HORARIOS[indice] || "";
}

function quantosDias(elemento) {
    const id = elemento.id;
    return window.todasDisciplinas[id].horarios.length;
}

function periodicidadeDisciplina(elemento, indice) {
    const id = elemento.id;
    return window.todasDisciplinas[id].horarios[indice].periodicidade_extenso;
}

function disciplinaConflitanteSemanal(elemento, indice) {
    const id = elemento.id;
    const disciplina = todasDisciplinas[id];
    const semana = disciplina.horarios[indice].semana;
    const horas = disciplina.horarios[indice].horas;

    for (let i = 0; i < horas.length - 1; i++) {
        const hora = horas[i].replace(':', '');
        const seletorQuinzenaUm = `.quinzenaum_${semana}_${hora}`;
        const seletorQuinzenaDois = `.quinzenadois_${semana}_${hora}`;
        
        if (document.querySelector(seletorQuinzenaUm)?.style.backgroundColor === "rgb(0, 100, 0)" ||
            document.querySelector(seletorQuinzenaDois)?.style.backgroundColor === "rgb(0, 100, 0)" ||
            document.querySelector(seletorQuinzenaUm)?.style.backgroundColor === "rgb(29, 40, 163)" ||
            document.querySelector(seletorQuinzenaDois)?.style.backgroundColor === "rgb(29, 40, 163)") {
            return true;
        }
    }
    return false;
}

function disciplinaConflitanteQuinzenal(element, indice, quinzena) {
    const id = element.id;
    const disciplina = todasDisciplinas[id];
    const semana = disciplina.horarios[indice].semana;
    const horas = disciplina.horarios[indice].horas;
    const prefix = quinzena === 1 ? ".quinzenaum_" : ".quinzenadois_";

    return horas.slice(0, -1).some(hora => {
        const horaFormatada = hora.replace(/:/g, '');
        const selector = `${prefix}${semana}_${horaFormatada}`;
        const cell = document.querySelector(selector);
        return cell && (cell.style.backgroundColor === "rgb(0, 100, 0)" || cell.style.backgroundColor === "rgb(29, 40, 163)");
    });
}

function verificaDisciplinaSelecionada(element, indice) {
    const id = element.id;
    const disciplina = todasDisciplinas[id];
    const semana = disciplina.horarios[indice].semana;
    const hora = disciplina.horarios[indice].horas[0].replace(/:/g, '');
    
    const seletorUm = `.quinzenaum_${semana}_${hora}`;
    const seletorDois = `.quinzenadois_${semana}_${hora}`;
    
    return document.querySelector(seletorUm)?.classList.contains(id) ||
           document.querySelector(seletorDois)?.classList.contains(id);
}

function alertaCalendario(element) {
    document.querySelector(".conflito").style.display = "block";
    document.querySelector(`input[value="${element.value}"]`).checked = false;
    document.querySelector("div#fundopreto").style.display = "block";
}

function fecharalerta() {
    document.querySelector(".conflito").style.display = "none";
    document.querySelector("div#fundopreto").style.display = "none";
}

function buscaNome() {
    const busca = document.querySelector("input#busca").value.toUpperCase();
    const rows = document.querySelectorAll("#tabeladisciplinas > tr");
    
    rows.forEach(row => {
        const disciplina = row.querySelector("td:nth-child(3)");
        if (disciplina) {
            row.style.display = disciplina.innerHTML.toUpperCase().includes(busca) ? "" : "none";
        }
    });
}

function buscaCampus(campus) {
    const rows = document.querySelectorAll("#tabeladisciplinas > tr");
    const campusNome = campus === "sa" ? "Santo André" : "São Bernardo";
    
    rows.forEach(row => {
        const disciplina = row.querySelector("td:nth-child(3)");
        if (disciplina) {
            row.style.display = disciplina.innerHTML.includes(campusNome) ? "" : "none";
        }
    });
}

function buscaVagas() {
    const rows = document.querySelectorAll("#tabeladisciplinas > tr");
    
    rows.forEach(row => {
        const vagas = row.querySelector("td[value]");
        const requisicoes = vagas?.nextElementSibling;
        if (vagas && requisicoes && parseInt(requisicoes.innerHTML) >= parseInt(vagas.innerHTML)) {
            row.style.display = "none";
        }
    });
}

function insereDisciplina(id) {
    window.disciplinas.push(id);
    mesmaDisciplina();
}

function mesmaDisciplina() {
    window.disciplinas.forEach(disciplina => {
        document.querySelector(`tr[value="${disciplina}"]`)?.classList.add("mesmadisciplina");
    });
}

function insereCodigo(codigo) {
    window.codigosdisciplinas.push(codigo);
}

function removeCodigo(codigo) {
    const index = window.codigosdisciplinas.indexOf(codigo);
    if (index > -1) {
        window.codigosdisciplinas.splice(index, 1);
    }
    document.querySelector(`tr.${codigo}`)?.classList.remove("mesmocodigo");
}

function removeDisciplina(id) {
    const index = window.disciplinas.indexOf(id);
    if (index > -1) {
        disciplinas.splice(index, 1);
    }
    document.querySelector(`tr[value="${id}"]`)?.classList.remove("mesmadisciplina");
}

function repreencherDisciplinas() {
    window.disciplinas.forEach(disciplina => {
        document.querySelector(`input[value="${disciplina}"]`).checked = true;
    });
}

function organizaHorarios(disciplina) {
    const horarios = disciplina.horarios.map((horario, index) => {
        const dia = verificaDia(disciplina, index);
        const hora = verificaHora(disciplina, index);
        const periodicidade = verificaPeriodicidade(disciplina, index);
        return `${dia}${hora}${periodicidade}`;
    });

    return horarios.length === 1 ? horarios[0] : horarios.join('<br>');
}

function removeClasses() {
    ['mesmadisciplina', 'disciplinaconflito', 'mesmocodigo'].forEach(className => {
        document.querySelectorAll(`.${className}`).forEach(element => {
            element.classList.remove(className);
        });
    });
}

function controlaMesmoCodigo() {
    window.codigosdisciplinas.forEach(codigo => {
        document.querySelectorAll(`.${codigo}`).forEach(element => {
            element.classList.add('mesmocodigo');
        });
    });
}

function atualizaTPI() {
    let totalCreditos = window.disciplinas.reduce((total, disciplina) => {
        const componentId = document.querySelector(`input[value="${disciplina}"]`).id
        const disciplinaObj = window.todasDisciplinas[componentId];
        return total + disciplinaObj.tpi[0] + disciplinaObj.tpi[1];
    }, 0);
    document.querySelector("#atualiza").innerHTML = totalCreditos;
}

function buscaTurno(turno) {
    const turnoNome = turno === "diurno" ? "Diurno" : "Noturno";
    document.querySelectorAll("#tabeladisciplinas > tr").forEach(row => {
        const disciplina = row.querySelector("td:nth-child(3)");
        if (disciplina) {
            row.style.display = disciplina.innerHTML.includes(turnoNome) ? "" : "none";
        }
    });
}


// non-migrated methods

function validaLinha(a) {
    var s = "tr[value=" + a.value + "]",
        o = $(s)[0].classList.length;
    if (((i = 0), (w = 0), 1 == a.checked))
        for (; i < disciplinas.length; ) {
            for (; w < o; ) {
                if ("mesmadisciplina" != $(s)[0].classList[w] && "disciplinaconflito" != $(s)[0].classList[w]) {
                    var r = "." + $(s)[0].classList[w];
                    $(r).each(function () {
                        this.classList.add("disciplinaconflito");
                    });
                }
                w++;
            }
            i++;
        }
    if (0 == a.checked)
        for (; i < disciplinas.length; ) {
            for (; w < o; ) {
                if ("mesmadisciplina" != $(s)[0].classList[w] && "disciplinaconflito" != $(s)[0].classList[w]) {
                    r = "." + $(s)[0].classList[w];
                    $(r).each(function () {
                        this.classList.remove("disciplinaconflito");
                    });
                }
                w++;
            }
            i++;
        }
}
  

function organizaDisciplinas() {
($("select")[0].disabled = !1),
    ($("table#tabeladisciplinas")[0].innerHTML = ""),
    ($("table#tabeladisciplinas")[0].innerHTML =
        '<th style="width:20px">Selecionar</th><th style="width:100px">C\xf3digo</th><th>Discipina (Campus)</th><th style="width: 30px">Vagas</th><th style="width:30px;">Requisi\xe7\xf5es</th><th style="width:100px;">T-P-I</th><th style="width: 350px;">Hor\xe1rio</th>'),
    ($("table#tabeladisciplinas")[1].innerHTML = ""),
    ($("table#tabeladisciplinas")[1].innerHTML =
        '<th style="width:20px">Selecionar</th><th style="width:100px">C\xf3digo</th><th>Discipina (Campus)</th><th style="width: 30px">Vagas</th><th style="width:30px;">Requisi\xe7\xf5es</th><th style="width:100px;">T-P-I</th><th style="width: 350px;">Hor\xe1rio</th>'),
    ($("table#tabeladisciplinas")[2].innerHTML = ""),
    ($("table#tabeladisciplinas")[2].innerHTML =
        '<th style="width:20px">Selecionar</th><th style="width:100px">C\xf3digo</th><th>Discipina (Campus)</th><th style="width: 30px">Vagas</th><th style="width:30px;">Requisi\xe7\xf5es</th><th style="width:100px;">T-P-I</th><th style="width: 350px;">Hor\xe1rio</th>');
for (var i = 0; i < todasDisciplinas.length; ) {
    var a = document.createElement("tr");
    a.setAttribute("value", todasDisciplinas[i].id);
    for (var s = 0; s < todasDisciplinas[i].horarios.length; ) {
        for (var o = 0, r = ""; o < todasDisciplinas[i].codigo.length; ) "-" != todasDisciplinas[i].codigo[o] && (r += todasDisciplinas[i].codigo[o]), o++;
        if (" - semanal" == todasDisciplinas[i].horarios[s].periodicidade_extenso) {
            for (var n = 0; n < todasDisciplinas[i].horarios[s].horas.length - 1; )
                (a.className =
                    a.className +
                    "quinzenaum" +
                    todasDisciplinas[i].horarios[s].semana +
                    "_" +
                    todasDisciplinas[i].horarios[s].horas[n][0] +
                    todasDisciplinas[i].horarios[s].horas[n][1] +
                    todasDisciplinas[i].horarios[s].horas[n][3] +
                    todasDisciplinas[i].horarios[s].horas[n][4] +
                    " quinzenadois" +
                    todasDisciplinas[i].horarios[s].semana +
                    "_" +
                    todasDisciplinas[i].horarios[s].horas[n][0] +
                    todasDisciplinas[i].horarios[s].horas[n][1] +
                    todasDisciplinas[i].horarios[s].horas[n][3] +
                    todasDisciplinas[i].horarios[s].horas[n][4] +
                    " "),
                    n++;
            a.className = a.className + r + " ";
        } else if (" - quinzenal (I)" == todasDisciplinas[i].horarios[s].periodicidade_extenso) {
            for (n = 0; n < todasDisciplinas[i].horarios[s].horas.length - 1; )
                (a.className =
                    a.className +
                    "quinzenaum" +
                    todasDisciplinas[i].horarios[s].semana +
                    "_" +
                    todasDisciplinas[i].horarios[s].horas[n][0] +
                    todasDisciplinas[i].horarios[s].horas[n][1] +
                    todasDisciplinas[i].horarios[s].horas[n][3] +
                    todasDisciplinas[i].horarios[s].horas[n][4] +
                    " "),
                    n++;
            a.className = a.className + r;
        } else if (" - quinzenal (II)" == todasDisciplinas[i].horarios[s].periodicidade_extenso) {
            for (n = 0; n < todasDisciplinas[i].horarios[s].horas.length - 1; )
                (a.className =
                    a.className +
                    "quinzenadois" +
                    todasDisciplinas[i].horarios[s].semana +
                    "_" +
                    todasDisciplinas[i].horarios[s].horas[n][0] +
                    todasDisciplinas[i].horarios[s].horas[n][1] +
                    todasDisciplinas[i].horarios[s].horas[n][3] +
                    todasDisciplinas[i].horarios[s].horas[n][4] +
                    " "),
                    n++;
            a.className = a.className + r;
        }
        s++;
    }
    for (var e = [], t = document.createElement("li"), c = 0; c < 7; ) (e[c] = document.createElement("td")), c++;
    e[0].appendChild(t), e[3].setAttribute("value", todasDisciplinas[i].id), e[4].setAttribute("value", todasDisciplinas[i].id);
    c = 0;
    (e[0].firstChild.innerHTML = '<input type="checkbox" value="' + todasDisciplinas[i].id + '" id="' + i + "\" onchange='verificacao(this)' name='disciplina_ids[]'>"), (e[1].textContent = todasDisciplinas[i].codigo);
    var d = document.createElement("span");
    if (
        ((d.textContent = todasDisciplinas[i].nome),
        "Campus Santo Andr\xe9" == todasDisciplinas[i].nome_campus ? (d.className = "sa") : (d.className = "sbc"),
        e[2].appendChild(d),
        (e[3].textContent = todasDisciplinas[i].vagas),
        (periodoMatricula || periodoSegundoQuadrimestre) &&
            null != todasDisciplinas[i].vagas_ingressantes &&
            (alunoIngressante ? (e[3].textContent = todasDisciplinas[i].vagas_ingressantes) : (e[3].textContent = todasDisciplinas[i].vagas - todasDisciplinas[i].vagas_ingressantes)),
        (periodoMatricula || periodoSegundoQuadrimestre) && null != todasDisciplinas[i].vagas_ingressantes
            ? alunoIngressante
                ? contagemMatriculasIngressantes[todasDisciplinas[i].id] == undefined
                    ? (e[4].textContent = 0)
                    : (e[4].textContent = contagemMatriculasIngressantes[todasDisciplinas[i].id])
                : (e[4].textContent = contagemMatriculas[todasDisciplinas[i].id])
            : contagemMatriculas[todasDisciplinas[i].id] == undefined
            ? (e[4].textContent = 0)
            : (e[4].textContent = contagemMatriculas[todasDisciplinas[i].id]),
        (e[5].textContent = "(" + todasDisciplinas[i].tpi[0] + "-" + todasDisciplinas[i].tpi[1] + "-" + todasDisciplinas[i].tpi[2] + ")"),
        1 == todasDisciplinas[i].horarios.length)
    )
        var l = verificaDia(todasDisciplinas[i], 0) + verificaHora(todasDisciplinas[i], 0) + verificaPeriodicidade(todasDisciplinas[i], 0);
    else if (2 == todasDisciplinas[i].horarios.length)
        l =
            verificaDia(todasDisciplinas[i], 0) +
            verificaHora(todasDisciplinas[i], 0) +
            verificaPeriodicidade(todasDisciplinas[i], 0) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 1) + verificaHora(todasDisciplinas[i], 1) + verificaPeriodicidade(todasDisciplinas[i], 1));
    else if (3 == todasDisciplinas[i].horarios.length)
        l =
            verificaDia(todasDisciplinas[i], 0) +
            verificaHora(todasDisciplinas[i], 0) +
            verificaPeriodicidade(todasDisciplinas[i], 0) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 1) + verificaHora(todasDisciplinas[i], 1) + verificaPeriodicidade(todasDisciplinas[i], 1)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 2) + verificaHora(todasDisciplinas[i], 2) + verificaPeriodicidade(todasDisciplinas[i], 2));
    else if (4 == todasDisciplinas[i].horarios.length)
        l =
            verificaDia(todasDisciplinas[i], 0) +
            verificaHora(todasDisciplinas[i], 0) +
            verificaPeriodicidade(todasDisciplinas[i], 0) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 1) + verificaHora(todasDisciplinas[i], 1) + verificaPeriodicidade(todasDisciplinas[i], 1)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 2) + verificaHora(todasDisciplinas[i], 2) + verificaPeriodicidade(todasDisciplinas[i], 2)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 3) + verificaHora(todasDisciplinas[i], 3) + verificaPeriodicidade(todasDisciplinas[i], 3));
    else if (5 == todasDisciplinas[i].horarios.length)
        l =
            verificaDia(todasDisciplinas[i], 0) +
            verificaHora(todasDisciplinas[i], 0) +
            verificaPeriodicidade(todasDisciplinas[i], 0) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 1) + verificaHora(todasDisciplinas[i], 1) + verificaPeriodicidade(todasDisciplinas[i], 1)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 2) + verificaHora(todasDisciplinas[i], 2) + verificaPeriodicidade(todasDisciplinas[i], 2)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 3) + verificaHora(todasDisciplinas[i], 3) + verificaPeriodicidade(todasDisciplinas[i], 3)) +
            "<br>" +
            (verificaDia(todasDisciplinas[i], 4) + verificaHora(todasDisciplinas[i], 4) + verificaPeriodicidade(todasDisciplinas[i], 4));
    for (e[6].innerHTML = l; c < 7; ) a.appendChild(e[c]), c++;
    var p = $("#curso")[0].value,
        h = todasDisciplinas[i].obrigatoriedades.length,
        u = 0;
    if (0 == h) $("div#disciplinaslivres>table")[0].appendChild(a);
    else if (1 <= h)
        for (; u < h; ) {
            if (todasDisciplinas[i].obrigatoriedades[u].curso_id == p && "obrigatoria" == todasDisciplinas[i].obrigatoriedades[u].obrigatoriedade) {
                $("div#disciplinasobrigatorias>table")[0].appendChild(a);
                break;
            }
            if (todasDisciplinas[i].obrigatoriedades[u].curso_id == p && "limitada" == todasDisciplinas[i].obrigatoriedades[u].obrigatoriedade) {
                $("div#disciplinaslimitadas>table")[0].appendChild(a);
                break;
            }
            u == h - 1 && $("div#disciplinaslivres>table")[0].appendChild(a), u++;
        }
    i++;
}
repreencherDisciplinas();
for (u = 0; u < disciplinas.length; ) {
    var D = "input[value=" + disciplinas[u] + "]";
    validaLinha($(D)[0]), u++;
}
mesmaDisciplina(), controlaMesmoCodigo();
}

function pintarCalendarioSemanal(i, a) {
    var s = $(i)[0].id,
        o = todasDisciplinas[s].horarios[a].semana,
        r = todasDisciplinas[s].horarios[a].horas.length;
    x = 0;
    for (var n = []; x < r - 1; ) (n[x] = todasDisciplinas[s].horarios[a].horas[x][0] + todasDisciplinas[s].horarios[a].horas[x][1] + todasDisciplinas[s].horarios[a].horas[x][3] + todasDisciplinas[s].horarios[a].horas[x][4]), (x += 1);
    for (x = 0; x < n.length; ) {
        var e = ".quinzenaum_" + o + "_" + n[x],
            t = ".quinzenadois_" + o + "_" + n[x];
        if (
            ("Campus Santo Andr\xe9" == todasDisciplinas[s].nome_campus ? ($(e)[0].style.backgroundColor = "rgb(0, 100, 0)") : ($(e)[0].style.backgroundColor = "rgb(29, 40, 163)"),
            $(e)[0].classList.add(s),
            7 < todasDisciplinas[s].codigo.length)
        )
            var c =
                todasDisciplinas[s].codigo[0] + todasDisciplinas[s].codigo[1] + todasDisciplinas[s].codigo[2] + todasDisciplinas[s].codigo[3] + todasDisciplinas[s].codigo[4] + todasDisciplinas[s].codigo[5] + todasDisciplinas[s].codigo[6];
        else c = todasDisciplinas[s].codigo;
        if (
            (($(e)[0].innerHTML = c),
            "Campus Santo Andr\xe9" == todasDisciplinas[s].nome_campus ? ($(t)[0].style.backgroundColor = "rgb(0, 100, 0)") : ($(t)[0].style.backgroundColor = "rgb(29, 40, 163)"),
            $(t)[0].classList.add(s),
            7 < todasDisciplinas[s].codigo.length)
        )
            c = todasDisciplinas[s].codigo[0] + todasDisciplinas[s].codigo[1] + todasDisciplinas[s].codigo[2] + todasDisciplinas[s].codigo[3] + todasDisciplinas[s].codigo[4] + todasDisciplinas[s].codigo[5] + todasDisciplinas[s].codigo[6];
        else c = todasDisciplinas[s].codigo;
        ($(t)[0].innerHTML = c), x++;
    }
}
  
function pintarCalendarioQuinzenal(i, a, s) {
    var o = $(i)[0].id,
        r = todasDisciplinas[o].horarios[a].semana,
        n = todasDisciplinas[o].horarios[a].horas.length;
    x = 0;
    for (var e = []; x < n - 1; ) (e[x] = todasDisciplinas[o].horarios[a].horas[x][0] + todasDisciplinas[o].horarios[a].horas[x][1] + todasDisciplinas[o].horarios[a].horas[x][3] + todasDisciplinas[o].horarios[a].horas[x][4]), (x += 1);
    for (x = 0; x < e.length; ) {
        if (1 == s) {
            var t = ".quinzenaum_" + r + "_" + e[x];
            "Campus Santo Andr\xe9" == todasDisciplinas[o].nome_campus ? ($(t)[0].style.backgroundColor = "rgb(0, 100, 0)") : ($(t)[0].style.backgroundColor = "rgb(29, 40, 163)"),
                $(t)[0].classList.add(o),
                ($(t)[0].innerHTML = todasDisciplinas[o].codigo);
        } else if (2 == s) {
            t = ".quinzenadois_" + r + "_" + e[x];
            if (
                ("Campus Santo Andr\xe9" == todasDisciplinas[o].nome_campus ? ($(t)[0].style.backgroundColor = "rgb(0, 100, 0)") : ($(t)[0].style.backgroundColor = "rgb(29, 40, 163)"),
                $(t)[0].classList.add(o),
                7 < todasDisciplinas[o].codigo.length)
            )
                var c =
                    todasDisciplinas[o].codigo[0] +
                    todasDisciplinas[o].codigo[1] +
                    todasDisciplinas[o].codigo[2] +
                    todasDisciplinas[o].codigo[3] +
                    todasDisciplinas[o].codigo[4] +
                    todasDisciplinas[o].codigo[5] +
                    todasDisciplinas[o].codigo[6];
            else c = todasDisciplinas[o].codigo;
            $(t)[0].innerHTML = c;
        }
        x++;
    }
}

function limpacorCalendarioSemanal(i, a) {
  var s = $(i)[0].id,
      o = todasDisciplinas[s].horarios[a].semana,
      r = todasDisciplinas[s].horarios[a].horas.length;
  x = 0;
  for (var n = []; x < r - 1; ) (n[x] = todasDisciplinas[s].horarios[a].horas[x][0] + todasDisciplinas[s].horarios[a].horas[x][1] + todasDisciplinas[s].horarios[a].horas[x][3] + todasDisciplinas[s].horarios[a].horas[x][4]), (x += 1);
  for (x = 0; x < n.length; ) {
      var e = ".quinzenaum_" + o + "_" + n[x],
          t = ".quinzenadois_" + o + "_" + n[x];
      ($(e)[0].style.backgroundColor = ""), $(e)[0].classList.remove(s), ($(e)[0].innerHTML = ""), ($(t)[0].style.backgroundColor = ""), $(t)[0].classList.remove(s), ($(t)[0].innerHTML = ""), x++;
  }
}

function limpacorCalendarioQuinzenal(i, a, s) {
    var o = $(i)[0].id,
        r = todasDisciplinas[o].horarios[a].semana,
        n = todasDisciplinas[o].horarios[a].horas.length;
    x = 0;
    for (var e = []; x < n - 1; ) (e[x] = todasDisciplinas[o].horarios[a].horas[x][0] + todasDisciplinas[o].horarios[a].horas[x][1] + todasDisciplinas[o].horarios[a].horas[x][3] + todasDisciplinas[o].horarios[a].horas[x][4]), (x += 1);
    for (x = 0; x < e.length; ) {
        if (1 == s) {
            var t = ".quinzenaum_" + r + "_" + e[x];
            ($(t)[0].style.backgroundColor = ""), $(t)[0].classList.remove(o), ($(t)[0].innerHTML = "");
        } else if (2 == s) {
            t = ".quinzenadois_" + r + "_" + e[x];
            ($(t)[0].style.backgroundColor = ""), $(t)[0].classList.remove(o), ($(t)[0].innerHTML = "");
        }
        x++;
    }
}
