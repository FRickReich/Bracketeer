String.prototype.bracketeer = function(array) {
	return this.replace(/\[{2}[^[]*\]{2}/g, function(s) {
		var word = s.substr(2, s.length - 4).trim();
		
		if (!array.indexOf(word)) {
			return "<a href='"+word+"'>"+word+"</a>"; 
		} else {
			return "<a href='" + word + "' class='missing'>" + word + "</a>"; 
		}
	});
}

module.exports = bracketeer;