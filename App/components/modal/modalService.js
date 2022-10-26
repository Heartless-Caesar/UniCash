// const postProducts = (cupon) => {
//     return fetch('https://unicash-resgate.herokuapp.com/v2', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjMyMDIzNTYsImV4cCI6MTY5NDczODM1NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSJ9.MeFhVNQ-ENnSWeo_Aq3lMoAz2oouquYz9vtGvy1Ya4uj7210icY_haCI38ZIpAP0zb-kLgQFKjSVAKYgjXDdiA',
//         },
//         body: JSON.stringify(cupon)
//     }).then((response) => response)
// }

function postProducts(cupon) {
    return (response = fetch(
        'https://unicash-resgate.herokuapp.com/v2/orders/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjMyMDIzNTYsImV4cCI6MTY5NDczODM1NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSJ9.MeFhVNQ-ENnSWeo_Aq3lMoAz2oouquYz9vtGvy1Ya4uj7210icY_haCI38ZIpAP0zb-kLgQFKjSVAKYgjXDdiA',
            },
            body: JSON.stringify(cupon),
        }
    ).then((response) => {
        return response.status
    }))
}

export default postProducts
