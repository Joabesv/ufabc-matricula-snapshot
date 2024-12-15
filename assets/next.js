function sigToMatriculaCourseId(matriculaCourseId) {
  const mapping = {
    73710: 74,
    73711: 74
  }

  return mapping[matriculaCourseId] || matriculaCourseId
}

document.addEventListener('DOMContentLoaded', function () {
  function fetchStudentInfo() {
    return fetch('http://localhost:5000/entities/students/student?ra=11202232364&login=joabe.silva')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch student information');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching student info:', error);
        return null;
      });
  }

  // Function to create and show error modal
  function showErrorModal(title, message) {
    // Find or create the modal element
    let modal = document.getElementById('enrollmentErrorModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.id = 'enrollmentErrorModal';
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-labelledby', 'enrollmentErrorModalLabel');
      modal.setAttribute('aria-hidden', 'true');
  
      modal.innerHTML = `
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="enrollmentErrorModalLabel">${title}</h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-danger">${message}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      `;
  
      document.body.appendChild(modal);
    }
  
    // Show the modal
    $(modal).modal('show');
  }

  // Initialize enrollment script
  function initializeEnrollment(studentData) {
    if (!studentData || !studentData.studentId) {
      showErrorModal(
        'Acesso Não Autorizado',
        'Você não utilizou a extensão no periodo de matriculas, logo nao conseguimos fornecer uma amostra.'
      );

      // Disable form submission
      const enrollmentForm = document.querySelector('form[action="/matricula"]');
      if (enrollmentForm) {
        enrollmentForm.style.display = 'none';
      }

      return;
    }

    // Set global variables similar to original script
    window.cursoAluno = studentData.graduations.map(g => sigToMatriculaCourseId(g.courseId))[0] || 74;
    window.todasMatriculas = window.matriculas?.[studentData.studentId] || null;

    const courseSelect = document.getElementById('curso');
    if (courseSelect && studentData.courseId) {
      courseSelect.value = window.cursoAluno;
      const event = new Event('change');
      courseSelect.dispatchEvent(event);
    }
  }

  // Fetch and initialize
  fetchStudentInfo()
    .then(initializeEnrollment)
    .catch(error => {
      showErrorModal(
        'Erro de Sistema',
        'Não foi possível carregar as informações do aluno. Tente novamente mais tarde.'
      );
      console.error(error);
    });
});