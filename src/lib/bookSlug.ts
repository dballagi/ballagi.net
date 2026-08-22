export function bookSlug(id: string): string {
  return id
    .replace(/\.md$/, '')
    .split('/')
    .map(s =>
      s.toLowerCase()
       .replace(/\s+/g, '-')
       .replace(/[^a-z0-9\-]/g, '')
    )
    .join('/');
}
