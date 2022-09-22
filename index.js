function writeCards(names, event) {
    let texts = []
    for (let count = 0; count < names.length; count++) {
        texts.push(`Thank you, ${names[count]}, for the wonderful surprise gift!`)

    }

    return texts

}

function countDown(num) {
    for (let count =0; count <= num; count ++){
        console.log(num - count)
    }

}

