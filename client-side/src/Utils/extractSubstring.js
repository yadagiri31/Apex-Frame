export function extractSubstring(inputString) {
    // Use regular expression to match alphabetic characters
    const match = inputString.match(/^[A-Za-z]+/);
    
    // If a match is found, return the matched substring
    if (match) {
        return match[0];
    } else {
        // If no match is found (i.e., string contains no alphabetic characters), return an empty string
        return '';
    }
}