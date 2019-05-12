
function includesText(text, baseText) {
  if (typeof text === 'string' && typeof baseText === 'string') {
    if (text.toUpperCase().indexOf(baseText.toUpperCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(includesText('PA', 'Patricia'))

console.log(includesText('pa', 'Patricia'))

console.log(includesText('Patricia', 'Pa'))

