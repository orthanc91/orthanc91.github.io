function renderPolicyDetails(policy) {
  const details = document.getElementById('policyDetails');
  if (!policy) {
    details.innerHTML = '<h2>Select a policy to view details</h2>';
    return;
  }
  details.innerHTML = `
    <h2>${policy.name}</h2>
    <p><strong>Description:</strong> ${policy.description}</p>
    <p><strong>Registry Key:</strong> ${policy.registryKey}</p>
    <p><strong>Value Name:</strong> ${policy.valueName}</p>
    <p><strong>On Value:</strong> ${policy.onValue}</p>
    <p><strong>Off Value:</strong> ${policy.offValue}</p>
  `;
}
