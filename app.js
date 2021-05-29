const getCVR = async (country='dk') => {
    const cvrNumber = document.getElementById('cvr').value;
    const response = await fetch(`https://cvrapi.dk/api?country=dk&vat=${cvrNumber}`);

    if (response.status === 200) {
        const data = response.json();
        return data;
    } else {
        throw new Error("Unable to fetch cvr data"); 
    }
}

function renderCVR() {
    getCVR()
    .then(data => {
        console.log(data)
        let html = `
            <p>${data.name}</p>
            <p>${data.address}</p>
            <p>${data.zipcode}, ${data.city}</p>`;
        document.querySelector('.cvr-info').insertAdjacentHTML('afterbegin', html)
    })
}

document.getElementById('search-btn').addEventListener('click', renderCVR)