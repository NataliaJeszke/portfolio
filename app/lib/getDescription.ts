export async function getDescription(project: string) {
  const url = `https://raw.githubusercontent.com/NataliaJeszke/${project}/master/description.json`;
  const urlMaster = `https://raw.githubusercontent.com/NataliaJeszke/${project}/main/description.json`;

  const res = await fetch(url || urlMaster);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
