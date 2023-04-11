const visualizationSelect = document.getElementById('visualization-select');
const visualizationContainer = document.getElementById('visualization-container');

visualizationSelect.addEventListener('change', () => {
  const selectedValue = visualizationSelect.value;
  
  const visualizations = visualizationContainer.children;
  for (let i = 0; i < visualizations.length; i++) {
    const visualization = visualizations[i];
    if (visualization.id === selectedValue) {
      visualization.classList.add('active');
    } else {
      visualization.classList.remove('active');
    }
  }
});