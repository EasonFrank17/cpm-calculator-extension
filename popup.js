// 获取DOM元素
const totalCostInput = document.getElementById('totalCost');
const totalImpressionsInput = document.getElementById('totalImpressions');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const cpmValueDiv = document.getElementById('cpmValue');
const errorDiv = document.getElementById('error');

// 计算CPM的函数
function calculateCPM(totalCost, totalImpressions) {
  // CPM = (总花费 / 总展示量) × 1000
  return (totalCost / totalImpressions) * 1000;
}

// 显示错误消息
function showError(message) {
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
  resultDiv.classList.add('hidden');
}

// 隐藏错误消息
function hideError() {
  errorDiv.classList.add('hidden');
}

// 显示结果
function showResult(cpm) {
  cpmValueDiv.textContent = `$${cpm.toFixed(2)}`;
  resultDiv.classList.remove('hidden');
  hideError();
}

// 验证输入
function validateInputs(totalCost, totalImpressions) {
  if (totalCost === '' || totalImpressions === '') {
    showError('请输入所有必填项');
    return false;
  }

  const cost = parseFloat(totalCost);
  const impressions = parseFloat(totalImpressions);

  if (isNaN(cost) || isNaN(impressions)) {
    showError('请输入有效的数字');
    return false;
  }

  if (cost < 0 || impressions < 0) {
    showError('数值不能为负数');
    return false;
  }

  if (impressions === 0) {
    showError('总展示量不能为0');
    return false;
  }

  return true;
}

// 处理计算按钮点击事件
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

// 支持按Enter键计算
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

// 当输入改变时隐藏之前的错误
totalCostInput.addEventListener('input', hideError);
totalImpressionsInput.addEventListener('input', hideError);
