#eABI for jQuery - Element Attribute Based DOM Injection

##What is it?

eABI allows you to dynamically drop in content based on a javascript condition.
I created eABI to drop in extra content on content-first media-query based webpages
once certain conditions, such as styles driven by media-queries, were met.

The idea came from an article by [Jeremy Keith](http://adactio.com/journal/5042/),
except without the ajax, and includes a resize listener and a function callback.

##How it works

The function eABI appends data to an element once a certain condition is met.
####For example
```
$('#foo').eABI({
	'data' : 'This is a test',
	
	condition : function(){
		return $('#foo').css('display') == 'block';	
	},
	
	callback: function(){
		alert('It Works!')
	}
});
```

If the condition is met on load, the data will be appended to the chosen selector,
and then the callback will be run. If the condition is NOT met, a resize() listener
will be called, checking the condition every time the browser window size changes,
and then appending the data and running the callback.