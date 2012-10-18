

//---BEGIN



//--PRELOAD SCRIPT

<!--
var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}
preloadimages(
"/fns/images/right-nav/r-button.gif",
"/fns/images/right-nav/r-newsroom.gif",
"/fns/images/right-nav/r-bottom.gif",
"/fns/images/right-nav/r-background.gif",
"/fns/images/top-nav/masthead_logo.gif",
"/fns/images/top-nav/masthead-banner.gif",
"/fns/images/left-nav/button-go.gif",
"/fns/images/left-nav/search.gif",
"/fns/images/left-nav/spacer.gif",
"/fns/images/left-nav/search-usda-off.gif",
"/fns/images/left-nav/search-tips-off.gif",
 "/fns/images/left-nav/outreach-off.gif",
"/fns/images/left-nav/data-off.gif",
"/fns/images/left-nav/fm-off.gif",
"/fns/images/left-nav/forms-off.gif",
"/fns/images/left-nav/food-safety-off.gif",
"/fns/images/left-nav/grants-off.gif",
"/fns/images/left-nav/nutrition-off.gif",
"/fns/images/left-nav/regulations-off.gif",
"/fns/images/left-nav/research-off.gif",
"/fns/images/left-nav/services-off.gif",
"/fns/images/left-nav/browse.gif",
"/fns/images/left-nav/bottom.gif",
"/fns/images/top-nav/top-navbar.gif",
"/fns/images/top-nav/home-on.gif",
"/fns/images/top-nav/home-off.gif",
"/fns/images/general/dots.gif",
"/fns/images/top-nav/about-on.gif",
"/fns/images/top-nav/about-off.gif",
"/fns/images/top-nav/newsroom-on.gif",
"/fns/images/top-nav/newsroom-off.gif",
"/fns/images/top-nav/help-off.gif",
"/fns/images/top-nav/help-on.gif",
"/fns/images/top-nav/contacts-off.gif",
"/fns/images/top-nav/contacts-on.gif",
"/fns/images/top-nav/espanol-off.gif",
"/fns/images/top-nav/espanol-on.gif",
"/fns/images/top-nav/ingles-off.gif",
"/fns/images/top-nav/ingles-on.gif"
);
//-->

//---IMAGE ROLLOVER EFFECT FOR TOP NAVIGATION BAR.
//---Script used for rollover effect on top navigation images.
//---If used in other program areas path may need to change.

image1 = new Image();
image1.src = "/fns/images/top-nav/home-on.gif";

image2 = new Image();
image2.src = "/fns/images/top-nav/about-on.gif";

image3 = new Image();
image3.src = "/fns/images/top-nav/newsroom-on.gif";

image4 = new Image();
image4.src = "/fns/images/left-nav/help-on.gif";

image5 = new Image();
image5.src = "/fns/images/left-nav/contacts-on.gif";

image6 = new Image();
image6.src = "/fns/images/left-nav/espanol-on.gif";


//---IMAGE ROLLOVER EFFECT FOR LEFT NAVIGATION BAR.
//---Script used for rollover effect on top navigation images.
//---If used in other program areas path may need to change.

limage4 = new Image();
limage4.src = "/fns/images/left-nav/outreach-on.gif";

limage5 = new Image();
limage5.src = "/fns/images/left-nav/data-on.gif";

limage6 = new Image();
limage6.src = "/fns/images/left-nav/fm-on.gif";

limage7 = new Image();
limage7.src = "/fns/images/left-nav/forms-on.gif";

limage8 = new Image();
limage8.src = "/fns/images/left-nav/food-safety-on.gif";

limage9 = new Image();
limage9.src = "/fns/images/left-nav/grants-on.gif";

limage10 = new Image();
limage10.src = "/fns/images/left-nav/nutrition-on.gif";

limage11 = new Image();
limage11.src = "/fns/images/left-nav/regulations-on.gif";

limage12 = new Image();
limage12.src = "/fns/images/left-nav/research-on.gif";

limage13 = new Image();
limage13.src = "/fns/images/left-nav/services-on.gif";

limage14 = new Image();
limage14.src = "/fns/images/left-nav/search-usda-on.gif";

limage15 = new Image();
limage15.src = "/fns/images/left-nav/search-tips-on.gif";



spimage1 = new Image();
spimage1.src = "/fns/images/top-nav/sp-home-on.gif";

spimage2 = new Image();
spimage2.src = "/fns/images/top-nav/sp-about-on.gif";

spimage3 = new Image();
spimage3.src = "/fns/images/top-nav/sp-newsroom-on.gif";

spimage4 = new Image();
spimage4.src = "/fns/images/left-nav/sp-help-on.gif";

spimage5 = new Image();
spimage5.src = "/fns/images/left-nav/sp-contacts-on.gif";

spimage6 = new Image();
spimage6.src = "/fns/images/left-nav/sp-ingles-on.gif";



splimage4 = new Image();
splimage4.src = "/fns/images/left-nav/sp-outreach-on.gif";

splimage5 = new Image();
splimage5.src = "/fns/images/left-nav/sp-data-on.gif";

splimage6 = new Image();
splimage6.src = "/fns/images/left-nav/sp-fm-on.gif";

splimage7 = new Image();
splimage7.src = "/fns/images/left-nav/sp-forms-on.gif";

splimage8 = new Image();
splimage8.src = "/fns/images/left-nav/sp-food-safety-on.gif";

splimage9 = new Image();
splimage9.src = "/fns/images/left-nav/sp-grants-on.gif";

splimage10 = new Image();
splimage10.src = "/fns/images/left-nav/sp-nutrition-on.gif";

splimage11 = new Image();
splimage11.src = "/fns/images/left-nav/sp-regulations-on.gif";

splimage12 = new Image();
splimage12.src = "/fns/images/left-nav/sp-research-on.gif";

splimage13 = new Image();
splimage13.src = "/fns/images/left-nav/sp-services-on.gif";

splimage14 = new Image();
splimage14.src = "/fns/images/left-nav/sp-search-usda-on.gif";

splimage15 = new Image();
splimage15.src = "/fns/images/left-nav/sp-search-tips-on.gif";



//---END





