export default async function decorate(block) {
    block.innerHTML = '<p>Loading product data...</p>';
  
    try {
      const response = await fetch('https://api.restful-api.dev/objects/7');
      const json = await response.json();
  
      const { name, data } = json;
  
      const table = document.createElement('table');
      table.className = 'product-table';
  
      const caption = document.createElement('caption');
      caption.textContent = name;
      table.appendChild(caption);
  
      Object.entries(data).forEach(([key, value]) => {
        const row = document.createElement('tr');
        const cellKey = document.createElement('th');
        const cellValue = document.createElement('td');
        cellKey.textContent = key;
        cellValue.textContent = value;
        row.appendChild(cellKey);
        row.appendChild(cellValue);
        table.appendChild(row);
      });
  
      block.innerHTML = '';
      block.appendChild(table);
  
    } catch (error) {
      block.innerHTML = '<p>Failed to load product data.</p>';
      console.error('Error loading API data:', error);
    }
  }
  