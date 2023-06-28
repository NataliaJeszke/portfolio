export async function getReposGH() {
    const url = "https://api.github.com/users/nataliajeszke/repos";
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  }