(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[51994],{89571:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return s}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),i=n(99536),l=["components"],m={},o={_frontmatter:m},p=i.Z;function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,d.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"metrics-and-dimensions"},"Metrics and Dimensions"),(0,d.mdx)("p",null,"Lists the metrics and dimensions that can be retrieved using Analytics Livestream."),(0,d.mdx)("p",null,"Periodically, new fields will be introduced to the Livestream output. Your Livestream client should be configured to handle this scenario and continue to process and translate the known fields."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Metric/Dimension"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"bot"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains either ",(0,d.mdx)("inlineCode",{parentName:"td"},"<Bot>")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"<Not a bot>")," to indicate bot and none bot traffic.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"browser"),(0,d.mdx)("td",{parentName:"tr",align:null},"Browser as identified by the user agent string.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"browserHeight"),(0,d.mdx)("td",{parentName:"tr",align:null},"Height in pixels of browser window.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"browserWidth"),(0,d.mdx)("td",{parentName:"tr",align:null},"Width in pixels of browser window.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"carrier"),(0,d.mdx)("td",{parentName:"tr",align:null},"The wireless provider for the mobile device. ",(0,d.mdx)("br",null)," Example: for mobile hits with valid IP, ",(0,d.mdx)("inlineCode",{parentName:"td"},'"carrier": "AT&T"'),"; for other hits, ",(0,d.mdx)("inlineCode",{parentName:"td"},'"carrier": ""'),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"connectionType"),(0,d.mdx)("td",{parentName:"tr",align:null},"Connection type of the browsers computer.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"currency"),(0,d.mdx)("td",{parentName:"tr",align:null},"Type of currency for the transaction.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"customVisId"),(0,d.mdx)("td",{parentName:"tr",align:null},"A visitor ID passed in with the hit to be used as the visitor ID for the hit ","(","instead of using visid","_","high and visid","_","low",")",".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"campaign"),(0,d.mdx)("td",{parentName:"tr",align:null},"The campaign value passed in on the hit. If set, campaign is included in the eVars list: ",(0,d.mdx)("inlineCode",{parentName:"td"},'"evars": {  "evars": {    "campaign": "DFA:172612:21725632:182361",    "eVar1": "Summer Shoe Promo"  }},'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"eVar1-250"),(0,d.mdx)("td",{parentName:"tr",align:null},"Custom commerce variable passed in on hit. If set, eVars are included in the eVars list: ",(0,d.mdx)("inlineCode",{parentName:"td"},'"evars": {  "evars": {    "eVar1": "Summer Shoe Promo",   "eVar4": "Sandals"  }},'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"event1-1000"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'"event1": [{\t"count": 1,\t"exponent": 0,\t"unique": ""}]'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"exclude"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates if this hit is excluded in Analytics reporting. ",(0,d.mdx)("br",null)," ",(0,d.mdx)("inlineCode",{parentName:"td"},'"exclude": { "id": "0", "value": "no", "description": "include" }'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"geoCity"),(0,d.mdx)("td",{parentName:"tr",align:null},"Populated based on GeoReporting settings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"geoCountry"),(0,d.mdx)("td",{parentName:"tr",align:null},"Populated based on GeoReporting settings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"geoDMA"),(0,d.mdx)("td",{parentName:"tr",align:null},"Populated based on GeoReporting settings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"geoRegion"),(0,d.mdx)("td",{parentName:"tr",align:null},"Populated based on GeoReporting settings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"geoZip"),(0,d.mdx)("td",{parentName:"tr",align:null},"Populated based on GeoReporting settings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"hier1-4"),(0,d.mdx)("td",{parentName:"tr",align:null},"Delimited list of values as passed in on the image request. The delimiter is chosen by the client during implementation. ",(0,d.mdx)("inlineCode",{parentName:"td"},'\t"1": {\t\t"delim": ":",\t\t"values": [\t\t\t"Search Results"\t\t]\t}}'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"hitIdHigh"),(0,d.mdx)("td",{parentName:"tr",align:null},"Used to uniquely identify a hit. The combination of hitid","_","low and hitid","_","high creates a unique ID for the row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"hitIdLow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Used to uniquely identify a hit. The combination of hitid","_","low and hitid","_","high creates a unique ID for the row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"hitSource"),(0,d.mdx)("td",{parentName:"tr",align:null},"A flag for the back-end processing to know what type of hit the data is.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"homePage"),(0,d.mdx)("td",{parentName:"tr",align:null},"Homepage flag, whether or not this page was the user's homepage")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"ip"),(0,d.mdx)("td",{parentName:"tr",align:null},"IP address of user's computer, from users ISP.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"isErrorPage"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates if the page was flagged as an error page by setting ",(0,d.mdx)("inlineCode",{parentName:"td"},'s.pageType="errorPage"'),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"javaEnabled"),(0,d.mdx)("td",{parentName:"tr",align:null},"Flag indicating whether or not java is enabled.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"javascriptVersion"),(0,d.mdx)("td",{parentName:"tr",align:null},"Version of JavaScript supported by browser.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"language"),(0,d.mdx)("td",{parentName:"tr",align:null},"Language")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"lat"),(0,d.mdx)("td",{parentName:"tr",align:null},"Latitude of the hit based on the location associated with the IP address.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"languageAbbrev"),(0,d.mdx)("td",{parentName:"tr",align:null},"Language abbreviation of the browser")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"lon"),(0,d.mdx)("td",{parentName:"tr",align:null},"Longitude based on the location associated with the IP address.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mcAudiences"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"mcAudiences")," field is a multi-value field / “list-variable”. The multiple values represent the segment IDs from Adobe Audience Manager’s Server Side Forwarding integration and are given in the subdocument’s value array, with the variable's delimiter as an ASCII character code in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"delim")," property. ",(0,d.mdx)("inlineCode",{parentName:"td"},'"mcAudiences": {"values":["1111","2222","9999"], "delim":44}'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mcVisIdHigh"),(0,d.mdx)("td",{parentName:"tr",align:null},"Part 1 of the Experience Cloud ID set by the ",(0,d.mdx)("a",{parentName:"td",href:"https://marketing.adobe.com/resources/help/en_US/mcvid/"},"Visitor ID Service"),". A 64-bit number in base 10, padded with zeros to 19 digits, and then concatenated.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mcVisIdLow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Part 2 of the Experience Cloud ID set by the ",(0,d.mdx)("a",{parentName:"td",href:"https://marketing.adobe.com/resources/help/en_US/mcvid/"},"Visitor ID Service"),". A 64-bit number in base 10, padded with zeros to 19 digits, and then concatenated.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mvvar1-3"),(0,d.mdx)("td",{parentName:"tr",align:null},"Multivariate variables. This is List Variable in Analytics. For example ",(0,d.mdx)("inlineCode",{parentName:"td"},'"mvvars":{"1":{"m":{"values":["list1 test,value 2,value 3"],"delim":124}}}'),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileAudioSupport"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileColorDepth"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileCookieSupport"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileDeviceName"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileDeviceType"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileManufacturer"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileScreenHeight"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileScreenWidth"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mobileVideoSupport"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"monitorColorDepth"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"monitorHeight"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"monitorWidth"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mvvars"),(0,d.mdx)("td",{parentName:"tr",align:null},'Mvvars are multi-value fields provided to allow customers to implement custom multi-value projects. Also known as "list variables".  Each variable (mvvar1-3) is indexed by JSON key "1","2" or "3": ',(0,d.mdx)("inlineCode",{parentName:"td"},'"mvvars": {"2":{"m":{"values":["custom1=A","custom2=Z"],"delim":44}}}'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"operatingSystem"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pageName"),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the page ","(","if set",")",".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pageURL"),(0,d.mdx)("td",{parentName:"tr",align:null},"The address of the page in the address bar of the browser.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"plugins"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"prop1-75"),(0,d.mdx)("td",{parentName:"tr",align:null},"Custom traffic variables passed in on hit. If set, props are included in the props list. ",(0,d.mdx)("inlineCode",{parentName:"td"},'"props": {\t"prop1": "Search Results"}'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"products"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'"products": [{    "category": "Clothing", "evars": {},    "events": {        "event61": [{        "count": 3        }]    },    "name": "Mens Black Running Shoes",    "revenue": 1799,\t//Divide by 100 to get revenue    "units": 15  }]'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"purchaseId"),(0,d.mdx)("td",{parentName:"tr",align:null},"Unique ID for the transaction.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"receivedTimeGMT"),(0,d.mdx)("td",{parentName:"tr",align:null},"Time hit was received by Adobe in GMT. Uses the Unix timestamp ","(","epoch time from 1/1/1970",")",". Set by Adobe servers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"referrer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Page prior to the current page.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"reportSuite"),(0,d.mdx)("td",{parentName:"tr",align:null},"Data collection report suite.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"searchEngine"),(0,d.mdx)("td",{parentName:"tr",align:null},"Search engine")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"service"),(0,d.mdx)("td",{parentName:"tr",align:null},"Deprecated. pe or ss - type of hit coming through. The page","_","event column gives the same information but in more detail.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"site section"),(0,d.mdx)("td",{parentName:"tr",align:null},"The custom traffic variable for channel. If set, site","_","section is included in the props list: ",(0,d.mdx)("inlineCode",{parentName:"td"},'"props": {\t"site_section": "home"}'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"state"),(0,d.mdx)("td",{parentName:"tr",align:null},"Geographical region ","(","i.e. Arizona, Utah, Saxony ","[","German Region","]",")"," passed in on JavaScript.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"timeGMT"),(0,d.mdx)("td",{parentName:"tr",align:null},"Time data was collected in GMT. Uses the Unix timestamp ","(","epoch time from 1/1/1970",")",". For non-timestamped data it will be set by Adobe servers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"tnt"),(0,d.mdx)("td",{parentName:"tr",align:null},"The test-and-target field used in Target. The ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionId")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionName")," never have values. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"This field is populated when two conditions are present:",(0,d.mdx)("br",null)," - The ",(0,d.mdx)("inlineCode",{parentName:"td"},"TNT")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"ECOMMERCE")," options are both enabled for the Report Suite. ",(0,d.mdx)("br",null)," - A hit (browser action) includes a non-empty ",(0,d.mdx)("inlineCode",{parentName:"td"},"tnt")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"tntAction")," field. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"When the ",(0,d.mdx)("inlineCode",{parentName:"td"},"tntAction")," is not empty, this field contains all unique entries from ",(0,d.mdx)("inlineCode",{parentName:"td"},"tntAction"),", except for ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionId")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionName"),". ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"Example:",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},'"tnt":[{"campaignId":"46352","recipeId":"123","trafficType":"1","actionId":"","actionName":""},{"campaignId":"13234","recipeId":"23","trafficType":"0","actionId":"","actionName":""}]'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"tntAction"),(0,d.mdx)("td",{parentName:"tr",align:null},"The enhanced test-and-target field used in Target. Unlike the ",(0,d.mdx)("inlineCode",{parentName:"td"},"tnt")," field, the ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionId")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"actionName")," have values set. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," This field is populated when two conditions are present: ",(0,d.mdx)("br",null),"- The ",(0,d.mdx)("inlineCode",{parentName:"td"},"TNT")," is enabled for the Report Suite ",(0,d.mdx)("br",null),"- A hit (browser action) includes a non-empty ",(0,d.mdx)("inlineCode",{parentName:"td"},"tntAction")," ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"Example: ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},'"tntAction":[{"campaignId":"52060","recipeId":"81","trafficType":"1","actionId":"0","actionName":"Experience Entrance"},{"campaignId":"13234","recipeId":"23","trafficType":"0","actionId":"1","actionName":"Experience Visit"}]'))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"topLevelDomain"),(0,d.mdx)("td",{parentName:"tr",align:null},"Domain of users ISP.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"transactionId"),(0,d.mdx)("td",{parentName:"tr",align:null},"A unique identifier where various data points can be uploaded later via Data Sources.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"truncated"),(0,d.mdx)("td",{parentName:"tr",align:null},"A ","(","Y/N",")"," field that determines if the query string of the hit was truncated or not")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"userAgent"),(0,d.mdx)("td",{parentName:"tr",align:null},"User agent as found in the HTTP header sent from the browser.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"usesPersistentCookie"),(0,d.mdx)("td",{parentName:"tr",align:null},"A flag indicating if 3rd party cookies and/or persistent cookies are enabled.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"visIdHigh"),(0,d.mdx)("td",{parentName:"tr",align:null},"Part 1 of the visitorID. The combination of two visitor IDs ","(","visid","_","high and visid","_","low",")"," creates a unique visitor ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"visIdLow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Part 2 of the visitorID. The combination of two visitor IDs ","(","visid","_","high and visid","_","low",")"," creates a unique visitor ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"visIdType"),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies how the visitorID was calculated.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"zip"),(0,d.mdx)("td",{parentName:"tr",align:null},"Zip code ","(","i.e. 84604,85381",")"," passed in by JavaScript.")))),(0,d.mdx)("h2",{id:"more-info-on-events"},"More info on Events"),(0,d.mdx)("p",null,' "',(0,d.mdx)("strong",{parentName:"p"},"count"),'": This is the value of the event. For counter events it is a 1 or 0. For currency or increment events it is an integer. All values are stored as integers for the sake of speed. You can move the decimal by the number of places listed in the exponent. ',"(","e.g. If count is 150 and the exponent is –2 then the value of the event is 1.50"),(0,d.mdx)("p",null,' "',(0,d.mdx)("strong",{parentName:"p"},"exponent"),'": This is the number of decimal places to move "count".'),(0,d.mdx)("p",null,' "',(0,d.mdx)("strong",{parentName:"p"},"unique"),'": This is used for event serialization and will have the serialization value for de-duplication. This feature is used rarely.'),(0,d.mdx)("p",null," Events are represented by the following strings:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},'"revenue"'),(0,d.mdx)("li",{parentName:"ul"},'"productViews"'),(0,d.mdx)("li",{parentName:"ul"},'"carts"'),(0,d.mdx)("li",{parentName:"ul"},'"checkouts"'),(0,d.mdx)("li",{parentName:"ul"},'"cartAdditions"'),(0,d.mdx)("li",{parentName:"ul"},'"cartRemovals"'),(0,d.mdx)("li",{parentName:"ul"},'"cartViews"'),(0,d.mdx)("li",{parentName:"ul"},'"event',"#",'" ',"(","where ","#"," represents custom event 1-1000",")")),(0,d.mdx)("h2",{id:"data-processing-order"},"Data Processing Order"),(0,d.mdx)("p",null,"The metrics and dimensions in Livestream are partially processed according to the following data processing order list:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Data collection ","(","JavaScript, mobile libraries, data insertion, dynamic variables, and so on",")"),(0,d.mdx)("li",{parentName:"ol"},"Processing Rules"),(0,d.mdx)("li",{parentName:"ol"},"VISTA"),(0,d.mdx)("li",{parentName:"ol"},"Geolookup ","(","by default, can be changed to occur before VISTA",")"),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("strong",{parentName:"li"},"Analytics Livestream")," "),(0,d.mdx)("li",{parentName:"ol"},"Persist Attributes ","(","not available in Livestream",")"),(0,d.mdx)("li",{parentName:"ol"},"Visit Attributes/Metrics ","(","not available in Livestream",")")),(0,d.mdx)("h2",{id:"livestream-sample-json-output"},"Livestream sample JSON output"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'{   \n  "bot": "<Not a bot>"\n  "browser": "Google Chrome 32.0",  Browser name\n  "browserHeight": 1350,    // The height of the browser, in pixels \n  "browserType": "Google",\n  "browserWidth": 820, \n  "carrier": "AT&T",\n  "connectionType": "LAN/WiFi", \n  "currency": "USD", \n  "customVisId": "420520", \n  "domain": "sfr.net",  \n  “evars”: {\n    "evars": {\n      "campaign": "DFA:172612:21725632:182361",\n      "evar1": "Summer Shoe Promo"\n    }\n  },\n  "events": {\n    "event1": [{\n      "count": 1,\n      "exponent":0,\n      "unique":""\n    }]\n  },\n  "exclude": { \n    "id": "0",\n    "value": "no",\n    "description": "include"\n  },\n  "geoCity": "paris",\n  "geoCountry": "fra",\n  "geoDMA": 0,\n  "geoRegion": "j",\n  "geoZip": "75001",\n  "hierarchies": { \n    "site-­hier": {\n      "delim": 58,\n      "values": "home page:clothing:mens:shoes"\n    }\n  },\n  "hitIdHigh": 2948027281753079808,\n  "hitIdLow": 4948646782672799561,\n  "hitSource": 1,   // 1=modstats, 5=data sources, etc \n  "ip": "91.71.30.70",\n  "javaEnabled": true, // \n  "javascriptVersion": "1.6", \n  "language": "English", \n  "languageAbbrev": "en-­US",\n  "monitorColorDepth": "16 million colors", \n  "monitorHeight": 1080,\n  "monitorWidth": 1650,\n  "mvvars": {\n    "1": {\n      "m": {\n        "values": [\n          "event_category:summer sale",\n          "event_type:click",\n          "source_platform:iOS"\n        ],\n        "delim": 44\n      }\n    }\n  },  \n  "operatingSystem": "Macintosh", \n  "pageName": "Page #8552",\n  "pageURL": "http://example.com/page8552.html", \n  "products": [{\n    "category": "Clothing", "evars": {},\n    "events": {\n        "event61": [{\n          "count": 3,\n          "exponent":0,\n          "unique":""\n        }]\n    },\n    "name": "Mens Black Running Shoes",\n    "revenue": 1799,    //Divide by 100 to get revenue\n    "units": 15\n  }],\n  "receivedTimeGMT": 1372782179,    // Time hit was received by Adobe \n  "referrer": "http://example.com/page139.html",\n  "reportSuite": "examplecomprod", \n  "searchEngine": "Google",\n  "service": "ss", // ss=superstats, pe=page event, etc\n  "timeGMT": 1372782179,    // Time data was collected\n  "topLevelDomain": ".net",\n  "tnt":[{\n    "campaignId": "13234",\n    "recipeId": "23",\n    "trafficType": "0",\n    "actionId": "",\n    "actionName": ""\n  }],\n  "tntAction":[{\n    "campaignId": "13234",\n    "recipeId": "23",\n    "trafficType": "0",\n    "actionId": "1",\n    "actionName": "Experience Visit"\n  }],\n  "transactionId": "",\n  "truncated": false,   //Hit was truncated to modstats? \n  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/29.0.1547.76 Safari/537.36",\n  "usesPersistentCookie": 1,    //1=yes, 2=no, 0=unknown \n  "visIdHigh": 1944017885723175213,\n  "visIdLow": 2512895455560210216,\n  "visIdType": 3  // 3=server gen’d visid, 0=custom\n}\n\n\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-live-stream-api-metrics-dimensions-md-ea055402f4aaa9878cc1.js.map