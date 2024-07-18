let rowCount = 4;

for (let i = 0; i < rowCount; i++) {
    let row = "";

    for (let j = 0; j < rowCount; j++) {
        if (j < rowCount - i - 1) {
            row += "  "; // Two spaces for each empty position
        } else {
            row += "* "; // One space after each star
        }
    }

    console.log(row);
}
