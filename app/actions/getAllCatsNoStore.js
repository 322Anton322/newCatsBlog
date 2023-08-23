export async function getAllCatsNoStore() {
    const res = await fetch('http://10.10.21.200:1337/api/cats', { cache: 'no-store' }).then(response => response.json())
    return res
}