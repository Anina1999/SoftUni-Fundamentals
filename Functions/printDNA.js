function printDNA(length) {
    let sequence = 'ATCGTTAGGG';
    let line1 = "**";       
    let line2 = "*--*";  
    let line3 = "*----*";   
    let line4 = "*--*";   

    let pattern = [line1, line2, line3, line4];

    let seqIndex = 0;

    for (let i = 0; i < length; i++) {
    
        let currentPattern = pattern[i % pattern.length];

        let firstChar = sequence[seqIndex % sequence.length];
        seqIndex++;
        
        let secondChar = sequence[seqIndex % sequence.length];
        seqIndex++;

        let parts = currentPattern.split('*'); 
        
        let line = parts[0] + firstChar + parts[1] + secondChar + parts[2];

        console.log(line);
    }
}

//printDNA(4);
