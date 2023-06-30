export default async function getReposDB() {
  const url = process.env.API_URL;
  const res = await fetch(`${url}`);
  if (!res.ok) {
    throw new Error("Failed to fetch repos from DB");
  }
  return res.json();
}
