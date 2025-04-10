export default async function decorate(block) {
    // Prendo il primo paragrafo e lo inserisce nel blocco
    const text = block.textContent;
    block.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = text;
    block.appendChild(p);
  }