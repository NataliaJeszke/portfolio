// export async function getDescription(name:string) {
//     const url = `https://raw.githubusercontent.com/NataliaJeszke/${name}/main/description.json`
//     const urlMaster = `https://raw.githubusercontent.com/NataliaJeszke/${name}/master/description.json`
  
//       try {
//         const res = await fetch(url);
//         const resMaster = await fetch(urlMaster);
//         if (res.ok) {
//           const data = await res.json();
//           console.log(data);
//           return data;
//         } else if (resMaster.ok) {
//             const data = await resMaster.json();
//             console.log(data);
//             return data;
//         }
//       } catch (error) {
//         console.log(error);
//       }

//     console.log('Failed to fetch description from all URLs');
//     return "loading..."
//   }

export async function getDescription(project:string) {
  const url = `https://raw.githubusercontent.com/NataliaJeszke/${project}/master/description.json`;
  const urlMaster = `https://raw.githubusercontent.com/NataliaJeszke/${project}/main/description.json`;

  const res = await fetch(url || urlMaster)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()

}
