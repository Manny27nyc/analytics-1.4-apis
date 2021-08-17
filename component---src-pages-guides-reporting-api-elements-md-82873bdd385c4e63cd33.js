(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[95086],{34335:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return u}});var n=a(22122),r=a(19756),m=(a(15007),a(64983)),l=a(99536),d=["components"],i={},o={_frontmatter:i},p=l.Z;function u(e){var t=e.components,a=(0,r.Z)(e,d);return(0,m.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"analytics-elements"},"Analytics Elements"),(0,m.mdx)("p",null,"Provides a list of elements available in Analytics."),(0,m.mdx)("p",null,"An ",(0,m.mdx)("em",{parentName:"p"},"element")," is a structure that further breaks down ","(","organizes",")"," the a report's metrics data. For example, you can generate a report that breaks down a page view ","(","metric",")"," report by the Web browsers ","(","element",")"," used to access the page. The resulting report lists page views by Web browser type. As part of the report definition, you can specify the elements to include in the report in a ",(0,m.mdx)("a",{parentName:"p",href:"data_types/r_reportDescriptionElement.md#"},"reportDescriptionElement"),"."),(0,m.mdx)("h2",{id:"permissions"},"Permissions"),(0,m.mdx)("p",null,"Specific users may not have access to certain elements. The metrics returned by ",(0,m.mdx)("inlineCode",{parentName:"p"},"GetElements")," reflect those restrictions. Requesting an element that one doesn't have permission to access will result in a ",(0,m.mdx)("inlineCode",{parentName:"p"},"element_inaccessible")," error. "),(0,m.mdx)("p",null,"In some cases, elements that are returned by ",(0,m.mdx)("inlineCode",{parentName:"p"},"GetElements")," may not work with a certain engine, even if access is enabled. For example, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"timevisit")," element is not supported in a Data Warehouse request, even if it is returned by ",(0,m.mdx)("inlineCode",{parentName:"p"},"GetElements"),". In such a case, you should see an error message when using the element indicating that the element is not supported in that engine."),(0,m.mdx)("h2",{id:"element-breakdowns"},"Element Breakdowns"),(0,m.mdx)("p",null,'The reporting API has two groups of elements: Traffic and Commerce. Elements may only be broken down by elements in the same group, as listed in the "Breakdown Type" column in the table below. Breakdowns are not supported on fallout and pathing reports.'),(0,m.mdx)("p",null,"You can pass any of these elements to ",(0,m.mdx)("a",{parentName:"p",href:"methods/r_GetElements.md#"},"GetElements")," to get a list of valid breakdowns for a specific element. "),(0,m.mdx)("h2",{id:"element-descriptions"},"Element Descriptions"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Breakdown Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"accountsummary"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Corresponds to the Account Summary report in Analytics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"browser"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser ","(","for example, Internet Explorer 7.0, Firefox 2.0.8",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"browserheight"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Browser frame height ","(","in pixels",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"browsertype"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser vendor ","(","for example, Microsoft, Mozilla, Apple",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"browserwidth"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Browser frame width ","(","in pixels",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"category"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Groups of products, organized into a category.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"connectiontype"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Internet connection type used to access site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"cookiesenabled"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser that has cookies enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"customerloyalty"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The Customer Loyalty classification.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"domain"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"ISPs and organizations used to access site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"entrypage"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Page used to enter the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"entrypageoriginal"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Page used to enter the site for the first time.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"evar ",(0,m.mdx)("em",{parentName:"td"},"#")),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specified eVar.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"firsttouchchannel"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"First touch marketing channel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"firsttouchchanneldetail"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Detailed version of the First touch marketing channel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"geocountry"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Country.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"georegion"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Geographical region.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"geocity"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"City.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"geodma"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Designated Market Area.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"hier1-5"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Hierarchy report. To specify a specific level to report, add a add a ",(0,m.mdx)("inlineCode",{parentName:"td"},"level")," and ",(0,m.mdx)("inlineCode",{parentName:"td"},"parentID")," parameter to the element structure: ",(0,m.mdx)("inlineCode",{parentName:"td"},'{\t"id":"hier2",\t"level":"3", "parentID":"75483925"}')," The ",(0,m.mdx)("inlineCode",{parentName:"td"},"parentID")," is obtained from the results of the previous level: ",(0,m.mdx)("inlineCode",{parentName:"td"},'{ "name": "Home Page", "url": "", "counts": ["72"],   "parentID": "75483925"}')," Not supported by inline segments.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"javaenabled"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser that has Java enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"javascriptenabled"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser that has JavaScript enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"javascriptversion"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Version of JavaScript used on the Web browser.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"language"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Web browser language.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"lasttouchchannel"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Last touch marketing channel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"lasttouchchanneldetail"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Detailed version of the Last touch marketing channel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"linkcustom"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Link usage ","(","user-preferred links",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"linkdownload"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Links to downloaded content.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"linkexit"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Third-party links where client exits your site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"listvar","#"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specified list variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobileaudiosupport"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Audio formats supported by mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilecarrier"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile service provider. Not supported by inline segments.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilecolordepth"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Number of simultaneous display colors supported by mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilecookiesupport"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device with cookies enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobiledevicename"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobiledevicetype"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device type.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobiledevicenumbertransmit"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Indicates if Device Number Transmit is On or Off on the mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobiledrm"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The type of Digital Rights Management ","(","DRM",")"," supported by the mobile device ","(","Forward Lock, Combined Delivery, Separate Delivery",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobileImagesupport"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device with image support enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobileInformationservices"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The information services supported by the mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilejavavm"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The Java version running on the mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilemaildecoration"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"A boolean value that indicates if the mobile device supports Email decorations ","(","animation",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilemanufacturer"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The mobile device manufacturer.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilemaxbookmarkurllength"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The maximum bookmark URL length supported by the mobile device, in characters.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilemaxbrowserurllength"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The maximum Web browser URL length supported by the mobile device, in characters.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilemaxmailurllength"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The maximum Email URL length supported by the mobile device, in characters.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilenetprotocols"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The network protocols supported by the mobile device ","(","GPRS, Edge, etc.",")")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobileos"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The operating system running on the mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilepushtotalk"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean value that indicates if the mobile device supports Push to Talk ","(","PTT",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilescreenheight"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device screen height ","(","in pixels",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilescreensize"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device screen size ","(","in inches",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilescreenwidth"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device screen width ","(","in pixels",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobilevideosupport"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Mobile device with video support enabled.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"monitorcolordepth"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The number of simultaneous display colors supported by the mobile device.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"monitorresolution"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Client's monitor resolution.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"operatingsystem"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Client operating system.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"page"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Page names.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"pagedepth"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The visitor's maximum page depth ","(","number of clicks into the Web site",")",", calculated from the landing page. Not supported by inline segments.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"pagesnotfound"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The number of times a visitor encountered a missing page ","(","HTTP 404 error",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"pathlength"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Number of pages viewed during the visit.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"product"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Individual products.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"prop ",(0,m.mdx)("em",{parentName:"td"},"#")),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specified property.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"trackingcode"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Campaign tracking code results.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"referrer"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Domain or URL that client came from.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"referrertype"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Type of referrer. Options include Hard drive, Other Web site, Search engine, Social, andTyped/Bookmarked.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"referringdomain"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Domains that referred client to the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"referringdomainoriginal"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Domains that referred client to the site on their first visit.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"reportsuite"),(0,m.mdx)("td",{parentName:"tr",align:null},"n/a ","(","reportSuite is the only element on summary reports",")"),(0,m.mdx)("td",{parentName:"tr",align:null},"Used to generate report suite ",(0,m.mdx)("a",{parentName:"td",href:"summary_report.md#"},"summary reports"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"returnfrequency"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Number of clients that return, and how soon they return.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchengine"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Search engine used to locate site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginekeyword"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Search engine keyword used to locate the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginenatural"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Search engine used to locate the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginenaturalkeyword"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The natural ","(","not paid",")"," search engine keyword used to find the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginenaturalpagerank"),(0,m.mdx)("td",{parentName:"tr",align:null}," "),(0,m.mdx)("td",{parentName:"tr",align:null},"Search engine results rank.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginepaid"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Search engine with paid result placement.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"searchenginepaidkeyword"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The paid search engine keyword used to find the site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"server"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Pages hosted by the same server.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sitesection"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Groups of Web pages, organized into a site.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialterm"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Term selected to identify relevant social content.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialcontentprovider"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Provider of the social data.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialauthor"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Content author.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sociallink"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Social link.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialtermslist"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"List of social terms.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialaveragesentiment"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Sentiment rating of social content.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialproperty"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"A facebook page or application.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"socialassettrackingcode"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Asset identifier.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"state"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"U.S. state.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"surveybase"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unclassified Survey element. Use this element with classifications retrieved via ReportSuite.GetClassifications where ",(0,m.mdx)("inlineCode",{parentName:"td"},"c_view = survey"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"timeprior"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Client time zone.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"timezone"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Client time zone.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"timevisit"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Duration of client visit.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"tntbase"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unclassified Test & Target element. Use this element with classifications retrieved via ReportSuite.GetClassifications where ",(0,m.mdx)("inlineCode",{parentName:"td"},"c_view = tnt"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"topLevelDomain"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Originating domain extension ","(",".com, .net, .gov, .edu, .org, and country extensions",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"trackingcode"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Tracking code.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"video"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Video name. ","(","v15",")")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"videoad"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Video ad.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"videosegment"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Segment name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"videocontenttype"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Content type associated with a video.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"videos"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Videos viewed. ","(","v14",")")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"videoplayers"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Video player used to view videos.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"visitnumber"),(0,m.mdx)("td",{parentName:"tr",align:null},"traffic+commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Number of visits to site. Not supported by inline segments.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"zip"),(0,m.mdx)("td",{parentName:"tr",align:null},"commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Client zip code.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-api-elements-md-82873bdd385c4e63cd33.js.map