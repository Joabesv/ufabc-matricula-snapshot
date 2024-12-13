document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    window.disciplinas = [];
    window.codigosdisciplinas = [];
    window.creditospegos = 0;

    // Function to create calendar rows
    function createCalendarRows(isFirstQuinzena = true) {
        const tbody = isFirstQuinzena 
            ? document.querySelector('tbody#segundo') 
            : document.querySelector('tbody#terceiro');
        
        const rows = [];
        
        for (let hourIndex = 0; hourIndex < 31; hourIndex++) {
            const row = document.createElement('tr');
            const hourCell = document.createElement('td');
            hourCell.id = 'horario';
            hourCell.innerHTML = retornaHorario(hourIndex);
            row.appendChild(hourCell);

            // Create day cells
            for (let dayIndex = 0; dayIndex < 6; dayIndex++) {
                const timeCode = retornaHorario(hourIndex);
                const dayCell = document.createElement('td');
                dayCell.id = 'dias';
                dayCell.className = `${isFirstQuinzena ? 'quinzenaum' : 'quinzenadois'}_${dayIndex + 1}_${timeCode[0] + timeCode[1] + timeCode[3] + timeCode[4]}`;
                row.appendChild(dayCell);
            }

            rows.push(row);
        }

        // Append rows to tbody
        rows.forEach(row => tbody.appendChild(row));
    }

    // Initialize calendar
    function initializeCalendar() {
        createCalendarRows(true);   // First quinzena
        createCalendarRows(false);  // Second quinzena
    }

    // Preselect course and load disciplines
    function setupCourseAndDisciplines() {
        // Select course based on cursoAluno
        const courseOption = document.querySelector(`option[value="${cursoAluno}"]`);
        if (courseOption) {
            courseOption.selected = true;
        }

        // Organize disciplines
        if (typeof organizaDisciplinas === 'function') {
            organizaDisciplinas();
        }

        // Preselect previously enrolled disciplines
        if (todasMatriculas && todasMatriculas.length) {
            todasMatriculas.forEach(disciplinaCode => {
                const checkbox = document.querySelector(`input[value="${disciplinaCode}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                    verificacao(checkbox);
                }
            });
        }

        // Validate selected disciplines
        disciplinas.forEach(disciplina => {
            const checkbox = document.querySelector(`input[value="${disciplina}"]`);
            if (checkbox) {
                validaLinha(checkbox);
            }
        });
    }

    // Error handling and logging
    function safeExecute(fn, errorMsg = 'An error occurred') {
        try {
            fn();
        } catch (error) {
            console.error(errorMsg, error);
        }
    }

    // Main initialization
    function initialize() {
        safeExecute(initializeCalendar, 'Failed to initialize calendar');
        safeExecute(setupCourseAndDisciplines, 'Failed to setup course and disciplines');
    }

    // Run initialization
    initialize();
});

// Optional: Add error boundaries and logging
window.addEventListener('error', function(event) {
    console.error('Unhandled error in enrollment script:', event.error);
});