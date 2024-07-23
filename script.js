wrd
function firstWord(s) {
  // your code here
	wrd= s.split(' ')[0]
}
for(w in wrd){
	if(w!=' ')
		return w
}
// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s))
