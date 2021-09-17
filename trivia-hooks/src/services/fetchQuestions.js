export default async function fetchQuestions(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
