export async function fetchCover(title: string, author: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=1&fields=cover_i`);
    const data = await res.json() as { docs?: { cover_i?: number }[] };
    const id = data.docs?.[0]?.cover_i;
    return id ? `https://covers.openlibrary.org/b/id/${id}-M.jpg` : null;
  } catch {
    return null;
  }
}
