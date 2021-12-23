import axios from "axios";

async function books() {
    // let a = await axios.get('/data.json').then(resp=>console.log(resp.data))

    let a = await axios.get('/data.json').then(resp => resp)
    // console.log(a)
    return a

    // let a = await fetch('./data.json').then(response => {
    //     return response.json()
    // })

    // const response = await fetch('./data.json');
    // return response.json();
}

// export const data = await books()
// console.log(data)

export default books