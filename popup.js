// Get DOM elements
const totalCostInput = document.getElementById('totalCost');
const totalImpressionsInput = document.getElementById('totalImpressions');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const cpmValueDiv = document.getElementById('cpmValue');
const errorDiv = document.getElementById('error');

// Calculate CPM function
function calculateCPM(totalCost, totalImpressions) {
  // CPM = (Total Cost / Total Impressions) × 1000
  return (totalCost / totalImpressions) * 1000;
}

// Display error message
function showError(message) {
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
  resultDiv.classList.add('hidden');
}

// Hide error message
function hideError() {
  errorDiv.classList.add('hidden');
}

// Display result
function showResult(cpm) {
  cpmValueDiv.textContent = `$${cpm.toFixed(2)}`;
  resultDiv.classList.remove('hidden');
  hideError();
}

// Validate inputs
function validateInputs(totalCost, totalImpressions) {
  if (totalCost === '' || totalImpressions === '') {
    showError('Please enter all required fields');
    return false;
  }

  const cost = parseFloat(totalCost);
  const impressions = parseFloat(totalImpressions);

  if (isNaN(cost) || isNaN(impressions)) {
    showError('Please enter valid numbers');
    return false;
  }

  if (cost < 0 || impressions < 0) {
    showError('Values cannot be negative');
    return false;
  }

  if (impressions === 0) {
    showError('Total impressions cannot be zero');
    return false;
  }

  return true;
}

// Handle calculate button click event
calculateBtn.addEventListener('click', () => {
  const totalCost = totalCostInput.value.trim();
  const totalImpressions = totalImpressionsInput.value.trim();

  if (validateInputs(totalCost, totalImpressions)) {
    const cost = parseFloat(totalCost);
    const impressions = parseFloat(totalImpressions);
    const cpm = calculateCPM(cost, impressions);
    showResult(cpm);
  }
});

// Support Enter key to calculate
totalCostInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});

totalImpressionsInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});

// Hide previous error when input changes
totalCostInput.addEventListener('input', hideError);
totalImpressionsInput.addEventListener('input', hideError);
