function verificacao(a) {
  for (var i = quantosDias(a), e = $(a)[0].id, n = $(a)[0].value, c = 0, l = [], o = [], r = [], s = 0, d = ""; s < todasDisciplinas[e].codigo.length; ) "-" != todasDisciplinas[e].codigo[s] && (d += todasDisciplinas[e].codigo[s]), s++;
  for (; c < i; )
      " - semanal" == periodicidadeDisciplina(a, c)
          ? 0 == disciplinaConflitanteSemanal(a, c)
              ? (r[c] = "semanal")
              : verificaDisciplinaSelecionada(a, c)
              ? (o[c] = "repetidasemanal")
              : (l[c] = "ativaralerta")
          : " - quinzenal (I)" == periodicidadeDisciplina(a, c)
          ? 0 == disciplinaConflitanteQuinzenal(a, c, 1)
              ? (r[c] = "quinzena1")
              : verificaDisciplinaSelecionada(a, c)
              ? (o[c] = "repetidaquinzena1")
              : (l[c] = "ativaralerta")
          : " - quinzenal (II)" == periodicidadeDisciplina(a, c) && (0 == disciplinaConflitanteQuinzenal(a, c, 2) ? (r[c] = "quinzena2") : verificaDisciplinaSelecionada(a, c) ? (o[c] = "repetidaquinzena2") : (l[c] = "ativaralerta")),
          c++;
  c = 0;
  for (var t = !1; c < i; ) 1 == t || ("ativaralerta" == l[c] && (t = !0)), c++;
  if (1 == t) alertaCalendario(a);
  else if (0 == t)
      if ("repetidasemanal" == o[(c = 0)] || "repetidaquinzena1" == o[c] || "repetidaquinzena2" == o[c]) {
          for (; c < i; ) "repetidasemanal" == o[c] ? limpacorCalendarioSemanal(a, c) : "repetidaquinzena1" == o[c] ? limpacorCalendarioQuinzenal(a, c, 1) : "repetidaquinzena2" == o[c] && limpacorCalendarioQuinzenal(a, c, 2), c++;
          removeDisciplina(n), removeCodigo(d);
      } else
          for (insereDisciplina(n), insereCodigo(d), c = 0; c < i; )
              "semanal" == r[c] ? pintarCalendarioSemanal(a, c) : "quinzena1" == r[c] ? pintarCalendarioQuinzenal(a, c, 1) : "quinzena2" == r[c] && pintarCalendarioQuinzenal(a, c, 2), c++;
  removeClasses(), repreencherDisciplinas();
  for (var u = 0; u < disciplinas.length; ) {
      var p = "input[value=" + disciplinas[u] + "]";
      validaLinha($(p)[0]), u++;
  }
  mesmaDisciplina(), controlaMesmoCodigo(), atualizaTPI();
}
function aplicarfiltros() {
  buscaNome(),
      (1 == $("#sbc")[0].checked && 1 == $("#sa")[0].checked) || (0 == $("#sbc")[0].checked && 0 == $("#sa")[0].checked)
          ? console.log("Caso null identificado")
          : 1 == $("#sbc")[0].checked
          ? buscaCampus("sbc")
          : 1 == $("#sa")[0].checked && buscaCampus("sa"),
      (1 == $("#diurno")[0].checked && 1 == $("#noturno")[0].checked) || (0 == $("#diurno")[0].checked && 0 == $("#noturno")[0].checked)
          ? console.log("Caso null identificado")
          : 1 == $("#diurno")[0].checked
          ? buscaTurno("diurno")
          : 1 == $("#noturno")[0].checked && buscaTurno("noturno"),
      1 == $("#maisvagas")[0].checked && buscaVagas();
}