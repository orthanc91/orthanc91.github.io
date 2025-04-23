document.addEventListener('DOMContentLoaded', () => {
  const categories = [
    {
      name: 'System',
      policies: [
        {
          name: 'Disable USB ports',
          description: 'Prevents the use of USB ports.',
          registryKey: 'HKLM\\Software\\Policies\\Example',
          valueName: 'DisableUSB',
          onValue: 1,
          offValue: 0
        }
      ]
    }
  ];

  const categoryList = document.getElementById('categoryList');
  const searchInput = document.getElementById('searchInput');

  function renderCategories() {
    categoryList.innerHTML = '';
    categories.forEach(category => {
      const li = document.createElement('li');
      li.textContent = category.name;
      li.onclick = () => renderPolicyDetails(category.policies[0]);
      categoryList.appendChild(li);
    });
  }

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = categories.filter(c => 
      c.name.toLowerCase().includes(term) ||
      c.policies.some(p => p.name.toLowerCase().includes(term))
    );
    categoryList.innerHTML = '';
    filtered.forEach(category => {
      const li = document.createElement('li');
      li.textContent = category.name;
      li.onclick = () => renderPolicyDetails(category.policies[0]);
      categoryList.appendChild(li);
    });
  });

  renderCategories();
});
