function bracketeer(link) {
	return link.replace(/\[{2}[^[]*\]{2}/g, function(s) {
		var word = s.substr(2, s.length - 4).trim();
		return "<a href='"+word+"'>"+word+"</a>";
	}); 
}

module.exports = bracketeer;