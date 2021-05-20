let arr = [
    {id: 10,
    name: 102,
    mori: 3029},
    {i: 10,
        m: 102,
        mo: 3029}
]
arr.map(item => {Object.values(item).map(key => {console.log(key)})});
// Object.keys(arr[0]).map(item => console.log(item))