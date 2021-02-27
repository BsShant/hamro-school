let server = 'https://schoolackend.herokuapp.com/api';

export const login = async(values) =>{
    const res = await fetch(`${server}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    })
    const data = await res.json()
    return data;
}

export const getUser = async(token) =>{
    const res = await fetch(`${server}/auth/me`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
    })
    const data = await res.json();
    return data;
}

export const logout = async() =>{
    const res = await fetch(`${server}/auth/logout`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    return data;
}