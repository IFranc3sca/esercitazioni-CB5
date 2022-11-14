/**
 * Seleziona un elemento che corrisponde alla classe passata come argomento
 *
 * @param {string} el - class name
 * @returns HTMLElement
 */
const q = (el) => document.querySelector(el);

/**
 * Seleziona un elemento che corrisponde all'id passato come argomento
 *
 * @param {string} el - specific id name
 * @returns HTMLElement
 */
const d = (el) => document.getElementById(el);

/**
 * Invia una richiesta GET
 *
 * @param {string} URL
 * @returns data
 */
const GET = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  return await data;
};

export { q, d, GET };
