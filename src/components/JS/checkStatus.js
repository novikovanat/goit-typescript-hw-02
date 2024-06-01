export default function responseCheck(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
}
