var disciplinas = [],
    codigosdisciplinas = [],
    creditospegos = 0;
$(document).ready(function () {
    for (var e = 0, o = [], r = [], a = 0, n = 0; a < 31; ) (o[a] = document.createElement("tr")), (a += 1);
    for (a = 0; a < 31; ) {
        for (r[(n = 0)] = document.createElement("td"), r[0].id = "horario", r[0].innerHTML = retornaHorario(e); n < 6; ) {
            var t = retornaHorario(e);
            (r[n + 1] = document.createElement("td")), (r[n + 1].id = "dias"), (r[n + 1].className = "quinzenaum_" + (n + 1) + "_" + t[0] + t[1] + t[3] + t[4]), (n += 1);
        }
        for (n = 0; n < 7; ) o[a].appendChild(r[n]), n++;
        (a += 1), (e += 1);
    }
    for (i = 0; i < 31; ) $("tbody#segundo")[0].appendChild(o[i]), (i += 1);
    for (e = 0, o = [], r = [], a = 0, n = 0; a < 31; ) (o[a] = document.createElement("tr")), (a += 1);
    for (a = 0; a < 31; ) {
        for (r[(n = 0)] = document.createElement("td"), r[0].id = "horario", r[0].innerHTML = retornaHorario(e); n < 6; ) {
            t = retornaHorario(e);
            (r[n + 1] = document.createElement("td")), (r[n + 1].id = "dias"), (r[n + 1].className = "quinzenadois_" + (n + 1) + "_" + t[0] + t[1] + t[3] + t[4]), (n += 1);
        }
        for (n = 0; n < 7; ) o[a].appendChild(r[n]), n++;
        (a += 1), (e += 1);
    }
    for (i = 0; i < 31; ) $("tbody#terceiro")[0].appendChild(o[i]), (i += 1);
    var d = "option[value=" + cursoAluno + "]";
    for ($(d)[0].selected = !0, organizaDisciplinas(), po = 0; po < todasMatriculas.length; ) {
        d = "input[value=" + todasMatriculas[po] + "]";
        ($(d)[0].checked = !0), verificacao($(d)[0]), po++;
    }
    for (a = 0; a < disciplinas.length; ) {
        var c = "input[value=" + disciplinas[a] + "]";
        d = $(c)[0];
        validaLinha(d), a++;
    }
});
