//solve #1
function fancyBarcodes(input) {
    let countOfBarcodes = Number(input.shift());
    let barcodePattern = /@#+(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/g;

    for (let line of input) {
        let matches = line.matchAll(barcodePattern);
        let found = false;

        for (let match of matches) {
            found = true;
            let barcode = match.groups['barcode'];
            let digits = barcode.match(/\d/g);
            let productGroup = digits ? digits.join('') : '00';
            console.log(`Product group: ${productGroup}`);
        }

        if (!found) {
            console.log("Invalid barcode");
        }
    }
}

//fancyBarcode(["6",

//"@###Val1d1teM@###",

//"@#ValidIteM@#",

//"##InvaliDiteM##",

//"@InvalidIteM@",

//"@#Invalid_IteM@#",

//"@#ValiditeM@#"]);


//solve #2
function fancyBarcode(data) {
    let totalBarcodes = Number(data[0]);

    let barcodeRegex = /(@#+)[A-Z][a-zA-Z0-9]{4,}[A-Z]\1/;
    let digitsRegex = /\d/g;
    for (let i = 1; i <= totalBarcodes; i++) {
        let barcode = data[i];

        if (barcodeRegex.test(barcode)) {
            let allDigitMatches = barcode.match(digitsRegex);
            let result = 'Product group: ';

            if (allDigitMatches !== null) {
                result += allDigitMatches.join('');
            } else {
                result += '00';
            }
            console.log(result);

        } else {
            console.log('Invalid barcode');
        }
    }
}
