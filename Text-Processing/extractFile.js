//solve #1
function extractFile(filePath) {
    let lastEscape = filePath.lastIndexOf('\\');
    let fileFullName = filePath.slice(lastEscape + 1);
    let lastDot = fileFullName.lastIndexOf('.');

    let file = fileFullName.slice(0, lastDot);
    let extension = fileFullName.slice(lastDot + 1);

    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}

//extractFile('C:\\Internal\\training-internal\\Template.pptx');

//solve #2
function extractFile(filePath) {
    let fileFullName = filePath.split('\\').pop();
    let lastDotIndex = fileFullName.lastIndexOf('.');

    let f = fileFullName.substring(0, lastDotIndex);
    let ex = fileFullName.substring(lastDotIndex + 1);
    //let f = fileFullName.slice(0, lastDotIndex);
    //let ex = fileFullName.slice(lastDotIndex);

    console.log(`File name: ${f}`);
    console.log(`File extension: ${ex}`);

}
