const getCVR = async (country='dk') => {
    const cvrNumber = document.getElementById('cvr').value;
    const response = await fetch(`https://cvrapi.dk/api?country=dk&vat=${cvrNumber}`);

    if (response.status === 200) {
        const data = response.json();
        console.log(data);
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
            <p>${data.zipcode}, ${data.city}</p>
            <p>contact-mail ${data.email}`;
        document.querySelector('.cvr-info').insertAdjacentHTML('afterbegin', html)
    })
}

document.getElementById('search-btn').addEventListener('click', renderCVR)