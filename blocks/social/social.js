//Esporto una funzione asincrona chiamata decorate, che prende un argomento block. block è un elemento DOM, un container con vari figli HTML da decorare o trasformare.

export default async function decorate(block) {

  //Converto block.children (che è una HTMLCollection) in un array per poter usare forEach. Scorre ogni figlio diretto del blocco (child).
  [...block.children].forEach((child) => {

    //Prendo l'attributo data-icon-name dall'immagine (<img>) presente nel child. Questo valore viene usato come "nome dell'icona".
    const iconName = child.querySelector('img').getAttribute('data-icon-name');

    //Imposto l'attributo title dell'elemento <a> (anchor) con iconName. Questo fornisce un tooltip quando l’utente passa sopra il link.
    child.querySelector('a').title = iconName;
    //Imposto l’attributo alt dell’immagine con iconName, migliorando l’accessibilità e la SEO.
    child.querySelector('img').alt = iconName;

    //Recupero i riferimenti al primo <span> e al primo <a> nel child.
    // add for xwalk
    const spanTag = child.querySelector('span');
    const anchorTag = child.querySelector('a');
    if (anchorTag.querySelector('span')) {
      // do not do anything since span already inside anchor in doc-based
    } else {
      // in x-walk, move the span tag inside the anchor a tag and delete the outside span tag
      if (spanTag && spanTag.parentElement.tagName.toLowerCase() === 'p') {
        const parentPTag = spanTag.parentNode;
        parentPTag.parentNode.removeChild(parentPTag);
      }

      //Pulisco il contenuto testuale del link <a> e ci inserisce lo <span> (che quindi ora è dentro al link). Questo rende la struttura HTML corretta secondo le aspettative del sistema.
      anchorTag.textContent = '';
      anchorTag.appendChild(spanTag);
    }
  });
}
