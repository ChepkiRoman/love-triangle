/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var loveTrianglesCount = 0,
		firstCreature, secondCreature, thirdCreature;
	for (var i = 0; i < preferences.length; i++) {
		firstIndex = preferences[i];
		secondIndex = preferences[firstIndex - 1];
		thirdIndex = preferences[secondIndex - 1];
		if (thirdIndex == i + 1) {
			loveTrianglesCount++;
		}
	}
	return Math.floor(loveTrianglesCount / 3);
};
