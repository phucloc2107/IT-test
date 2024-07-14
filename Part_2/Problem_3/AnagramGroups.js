// Problem 3: Anagram Groups
// Write a function that groups a list of strings into anagrams. Each group should contain the
// strings that are anagrams of each other.
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


function Anagrams(strings) {
    const anagramGroups = {};
  
    for (let i = 0; i < strings.length; i++) {
      // Sort the characters of the string to form a key
      const sortedStr = strings[i].split('').sort().join('');
  
      // Add the string to the corresponding anagram group
      if (anagramGroups[sortedStr]) {
        anagramGroups[sortedStr].push(strings[i]);
      } else {
        anagramGroups[sortedStr] = [strings[i]];
      }
    }
  
    // Convert the object values to an array of arrays
    return Object.values(anagramGroups);
  }
  
  // Example usage
  const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log(Anagrams(strings));
  