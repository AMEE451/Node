export const postproduct = async (product) => {
    let req = await fetch('http://localhost:3050/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    let res = await req.json();
}