function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

const statement = 'I am a hard working person';
console.log(reverseWords(statement))