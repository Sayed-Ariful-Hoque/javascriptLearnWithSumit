
async function faceData() {
    const response = await fetch('demo.txt')
    console.log(response)

    const data = await response.json()
    console.log(data)
}
faceData()