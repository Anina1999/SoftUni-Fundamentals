function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;

    //logic
    for (let i = base; i > 2; i -= 2) {
        steps++;

        let totalArea = i * i;
        let innerArea = (i - 2) * (i - 2);
        stone += innerArea * increment;
        let outerArea = totalArea - innerArea;
        if (steps % 5 === 0) {
            lapis += outerArea * increment;
        } else {
            marble += outerArea * increment;
        }
    }
    steps++;
    if (base % 2 === 0) {
        gold += 4 * increment;
    } else {
        gold += 1 * increment;
    }

    let finalHeight = Math.floor(steps * increment);

    //return result
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${finalHeight}`);
}

//thePyramidOfKingDjoser(11, 1);
