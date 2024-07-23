wrd=[]
function firstWord(s) {
  // your code here
	wrd= s.trim().split(" ")
	for(w of wrd){
		if(w!=" ")
			return w
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))
