 // a function to store the text inside the textarea in a variable...

	function analyze(){	
       var words = 0,letters = 0,spaces = 0,commas = 0;
 	   
	   var text = document.getElementById('text').value;  // this will completely store the text in textarea as a string....	  
		
		for(var i = 0 ; i < text.length ; i++){
		      if(text[i] ==  ' ')
			    spaces += 1;
			  else 
			    letters += 1;
		 	}
		
		for(var i = 0 ; i < text.length ; i++){
		    if(text[i] == '.' || text[i] == ',')
			    commas += 1;
				}
				
		words = (spaces + commas) + 1;
		
		document.getElementById('spaces').innerHTML = spaces;
		document.getElementById('letters').innerHTML = letters;
		document.getElementById('words').innerHTML = words;
		
		most_common();
				
        }		 
      		// this code is taken from stackoverflow...
    function most_common(){
		var str = document.getElementById('text').value;
        console.log(findMostRepeatedWord(str)); // Result: "do"

	function findMostRepeatedWord(str) {
	  let words = str.match(/\w+/g);
	  console.log(words); // [ 'How', 'do', 'you', 'do' ]

	  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  //console.log(occurances); // { How: 1, do: 2, you: 1 }

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }
  document.getElementById('occurance').innerHTML = max;
  document.getElementById('common').innerHTML = mostRepeatedWord;
}
	}
	
	function changemode(val){
	
	 if(val == 1){
		document.getElementById('body').style.backgroundColor = "#3B3C36";   //color name = oynx..
		
		
	}
	 else{
	    document.getElementById('body').style.backgroundColor = "#E7FEFF";
		
	}
}
	