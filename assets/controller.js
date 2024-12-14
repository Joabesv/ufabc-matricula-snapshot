function verificacao(inputElement) {
    const disciplineDays = quantosDias(inputElement);
    const elementId = inputElement.id;
    const disciplineValue = inputElement.value;

    // Extract discipline code
    const disciplineCode = window.todasDisciplinas[elementId].codigo
        .split('')
        .filter(char => char !== '-')
        .join('');

    // Analyze periodicity for each day
    const periodicityStatus = Array(disciplineDays).fill().map((_, dayIndex) => {
        const periodicity = periodicidadeDisciplina(inputElement, dayIndex);

        switch (periodicity) {
            case ' - semanal':
                return disciplinaConflitanteSemanal(inputElement, dayIndex)
                    ? (verificaDisciplinaSelecionada(inputElement, dayIndex)
                        ? 'repetidasemanal'
                        : 'ativaralerta')
                    : 'semanal';

            case ' - quinzenal (I)':
                return disciplinaConflitanteQuinzenal(inputElement, dayIndex, 1)
                    ? (verificaDisciplinaSelecionada(inputElement, dayIndex)
                        ? 'repetidaquinzena1'
                        : 'ativaralerta')
                    : 'quinzena1';

            case ' - quinzenal (II)':
                return disciplinaConflitanteQuinzenal(inputElement, dayIndex, 2)
                    ? (verificaDisciplinaSelecionada(inputElement, dayIndex)
                        ? 'repetidaquinzena2'
                        : 'ativaralerta')
                    : 'quinzena2';

            default:
                return null;
        }
    });

    // Check if alert is needed
    const needsAlert = periodicityStatus.some(status => status === 'ativaralerta');

    if (needsAlert) {
        alertaCalendario(inputElement);
        return;
    }

    // Check for repeated disciplines
    const hasRepeatedDisciplines = periodicityStatus.some(status =>
        status === 'repetidasemanal' ||
        status === 'repetidaquinzena1' ||
        status === 'repetidaquinzena2'
    );

    if (hasRepeatedDisciplines) {
        periodicityStatus.forEach((status, index) => {
            switch (status) {
                case 'repetidasemanal':
                    limpacorCalendarioSemanal(inputElement, index);
                    break;
                case 'repetidaquinzena1':
                    limpacorCalendarioQuinzenal(inputElement, index, 1);
                    break;
                case 'repetidaquinzena2':
                    limpacorCalendarioQuinzenal(inputElement, index, 2);
                    break;
            }
        });

        removeDisciplina(disciplineValue);
        removeCodigo(disciplineCode);
    } else {
        insereDisciplina(disciplineValue);
        insereCodigo(disciplineCode);

        periodicityStatus.forEach((status, index) => {
            switch (status) {
                case 'semanal':
                    pintarCalendarioSemanal(inputElement, index);
                    break;
                case 'quinzena1':
                    pintarCalendarioQuinzenal(inputElement, index, 1);
                    break;
                case 'quinzena2':
                    pintarCalendarioQuinzenal(inputElement, index, 2);
                    break;
            }
        });
    }

    // Post-processing
    removeClasses();
    repreencherDisciplinas();
    
    // Revalidate all current disciplines
    window.disciplinas.forEach(disciplina => {
        const input = $(`input[value=${disciplina}]`)[0];
        validaLinha(input);
    });

    mesmaDisciplina();
    controlaMesmoCodigo();
    atualizaTPI();
}

function aplicarfiltros() {
    // Name search
    buscaNome();

    // Campus filter
    if ($("#sbc")[0].checked !== $("#sa")[0].checked) {
        $("#sbc")[0].checked
            ? buscaCampus("sbc")
            : buscaCampus("sa");
    }

    // Shift filter
    if ($("#diurno")[0].checked !== $("#noturno")[0].checked) {
        $("#diurno")[0].checked
            ? buscaTurno("diurno")
            : buscaTurno("noturno");
    }

    // Vacancies filter
    if ($("#maisvagas")[0].checked) {
        buscaVagas();
    }
}