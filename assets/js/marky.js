var links_json = [
	{
    "id" : "1",
    "title" : "Dribbble",
    "url" : "http://dribbble.com/steveostudios",
    "color": "d34579",
    "icon": "dribbble"
	},
	{
    "id" : "2",
    "title" : "Dropbox",
    "url" : "http://dropbox.com",
    "color": "2476ce",
    "icon": "dropbox"
	},
	{
    "id" : "3",
    "title" : "YouVerson",
    "url" : "https://www.bible.com/users/steveostudios/reading-plans",
    "color": "525254",
    "icon": "bookmark"
	},
	{
    "id" : "4",
    "title" : "Trello",
    "url" : "http://trello.com",
    "color": "1b5e84",
    "icon": "trello"
	},
	{
    "id" : "5",
    "title" : "Postach.io",
    "url" : "http://postach.io",
    "color": "2fb18c",
    "icon": "rss-square"
	},
	{
    "id" : "6",
    "title" : "Pocket",
    "url" : "http://getpocket.com",
    "color": "c23c45",
    "icon": "heart"
	},
  {
    "id" : "6",
    "title" : "SECC",
    "url" : "http://southeastchristian.com",
    "color": "ff0000",
    "icon": "plus"
  }
];

$( document ).ready(function() {
  var links = "";
  var i = 0;
	links_json.forEach(function(link) {
		links += '<div class="link col-lg-2 col-sm-3 col-xs-6"><a href="'+ link.url +'" title="'+ link.title +'" style="background: #'+ link.color +';"><i class="fa fa-'+ link.icon +' fa-3x"></i></a></div>';
	});
	$('div.links').html(links);
});