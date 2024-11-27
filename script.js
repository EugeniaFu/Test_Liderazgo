// Variables globales
const testForm = document.getElementById('leadership-test');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('result-text');

// Función para calcular resultados
function calculateResults() {
  const formData = new FormData(testForm);
  let authoritarian = 0;
  let democratic = 0;
  let laissezFaire = 0;

  // Mapeo de cada respuesta a estilos de liderazgo
  const mappings = {
    q1: 'laissezFaire',
    q2: 'authoritarian',
    q3: 'authoritarian',
    q4: 'democratic',
    q5: 'authoritarian',
    q6: 'democratic',
    q7: 'democratic',
    q8: 'democratic',
    q9: 'authoritarian',
    q10: 'democratic',
    q11: 'laissezFaire',
    q12: 'laissezFaire',
    q13: 'laissezFaire',
    q14: 'authoritarian',
    q15: 'authoritarian',
    q16: 'democratic',
    q17: 'democratic',
    q18: 'laissezFaire',
    q19: 'authoritarian',
    q20: 'authoritarian',
    q21: 'democratic',
    q22: 'laissezFaire',
    q23: 'democratic',
    q24: 'democratic',
    q25: 'democratic',
    q26: 'laissezFaire',
    q27: 'authoritarian',
    q28: 'authoritarian',
    q29: 'authoritarian',
    q30: 'authoritarian',
    q31: 'authoritarian',
    q32: 'authoritarian',
    q33: 'laissezFaire',
  };

  // Sumar valores según el estilo de liderazgo
  for (const [question, value] of formData.entries()) {
    if (value === '1') {
      const style = mappings[question];
      if (style === 'authoritarian') authoritarian++;
      if (style === 'democratic') democratic++;
      if (style === 'laissezFaire') laissezFaire++;
    }
  }

  // Determinar el estilo dominante
  const total = { authoritarian, democratic, laissezFaire };
  const dominantStyle = Object.keys(total).reduce((a, b) => (total[a] > total[b] ? a : b));

  // Mostrar resultado
  let message = '';
  if (dominantStyle === 'authoritarian') {
    message =
      'Tu estilo de liderazgo predominante es **Autoritario**. Tiendes a tomar decisiones sin consultar y priorizas la disciplina.';
  } else if (dominantStyle === 'democratic') {
    message =
      'Tu estilo de liderazgo predominante es **Democrático**. Prefieres colaborar y tomar decisiones en equipo.';
  } else if (dominantStyle === 'laissezFaire') {
    message =
      'Tu estilo de liderazgo predominante es **Laissez-Faire**. Prefieres delegar tareas y confiar en tu equipo.';
  }

  resultText.innerHTML = message;
  resultDiv.classList.remove('hidden');
}

// Evento para manejar el clic del botón
submitBtn.addEventListener('click', () => {
  if (testForm.checkValidity()) {
    calculateResults();
  } else {
    alert('Por favor, responde todas las preguntas antes de enviar.');
  }
});
