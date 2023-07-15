var checkStraight_Line = function(coordinates) {
    if (coordinates.length === 2) {
        return true;
    }

    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);

    for (let i = 2; i < coordinates.length; i++) {
        const newSlope = (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0]);

        if (newSlope !== slope) {
            return false;
        }
    }

    return true;
};
const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
console.log(checkStraight_Line(coordinates)); // Output: true
