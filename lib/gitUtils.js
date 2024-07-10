// utils/gitUtils.js

const { execSync } = require('child_process');

/**
 * Retrieves the date of the last Git commit.
 * @returns {string} Last commit date in string format.
 */
const getLastCommitDate = () => {
	try {
		return execSync('git log -1 --format=%cd', {encoding: 'utf-8'}).trim();
	} catch (error) {
		console.error('Error fetching last commit date:', error.message);
		return 'N/A';
	}
};

module.exports = { getLastCommitDate };
