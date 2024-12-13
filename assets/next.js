function sigToMatriculaCourseId(matriculaCourseId) {
  const mapping = {
    73710: 74,
    73711: 74
  }

  return mapping[matriculaCourseId] || matriculaCourseId
}

document.addEventListener('DOMContentLoaded', function () {
  function fetchStudentInfo() {
    return fetch('http://localhost:5000/entities/students/student?ra=1222&login=joabe.silva')
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
    // Create modal dynamically using Bootstrap's modal
    const modalHtml = `
          <div class="modal fade" id="enrollmentErrorModal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header bg-danger text-white">
                          <h5 class="modal-title">${title}</h5>
                          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <p class="text-danger">${message}</p>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                      </div>
                  </div>
              </div>
          </div>
      `;

    // Remove any existing modal first
    const existingModal = document.getElementById('enrollmentErrorModal');
    if (existingModal) {
      existingModal.remove();
    }

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Use jQuery to show modal (since jQuery and Bootstrap are already loaded)
    $('#enrollmentErrorModal').modal('show');
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
      courseSelect.value = studentData.courseId;
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