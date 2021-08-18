(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[36787],{74405:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var r=a(22122),i=a(19756),n=(a(15007),a(64983)),m=a(99536),l=["components"],s={},o={_frontmatter:s},d=m.Z;function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.mdx)(d,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"analytics-metrics"},"Analytics Metrics"),(0,n.mdx)("p",null,"Provides a list of metrics available in Analytics."),(0,n.mdx)("p",null,"A ",(0,n.mdx)("em",{parentName:"p"},"metric")," is a structure that specifies the type of event data captured in the report."),(0,n.mdx)("h2",{id:"calculated-metrics"},"Calculated Metrics"),(0,n.mdx)("p",null,"Calculated metrics are returned along with the other reporting API metrics. The IDs of these metrics are in the form"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"f:<number>\n")),(0,n.mdx)("p",null,"Where ",(0,n.mdx)("inlineCode",{parentName:"p"},"<number>")," is some integer value."),(0,n.mdx)("p",null,"The metric type, decimal precision, and formula ","(","where applicable",")"," are included for all metrics."),(0,n.mdx)("h2",{id:"overtime-only-metrics"},"Overtime-Only Metrics"),(0,n.mdx)("p",null,"Some metrics are only valid in overtime reports. Use Report.GetMetrics with the dateGranularity parameter to programmatically get a list of these metrics."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"averagetimespentonsite"),(0,n.mdx)("li",{parentName:"ul"},"averagevisitdepth"),(0,n.mdx)("li",{parentName:"ul"},"customersdaily"),(0,n.mdx)("li",{parentName:"ul"},"customersloyal"),(0,n.mdx)("li",{parentName:"ul"},"customersmonthly"),(0,n.mdx)("li",{parentName:"ul"},"customersnew"),(0,n.mdx)("li",{parentName:"ul"},"customersquarterly"),(0,n.mdx)("li",{parentName:"ul"},"customersreturn"),(0,n.mdx)("li",{parentName:"ul"},"customersweekly"),(0,n.mdx)("li",{parentName:"ul"},"customersyearly"),(0,n.mdx)("li",{parentName:"ul"},"mobileviews"),(0,n.mdx)("li",{parentName:"ul"},"mobilevisitorsdaily"),(0,n.mdx)("li",{parentName:"ul"},"mobilevisits"),(0,n.mdx)("li",{parentName:"ul"},"returnvisits"),(0,n.mdx)("li",{parentName:"ul"},"returnvisitsdaily")),(0,n.mdx)("p",null,"If you try to run an overtime report on an unsupported metric, a ",(0,n.mdx)("inlineCode",{parentName:"p"},"metric_unsupported_in_overtime")," error occurs."),(0,n.mdx)("h2",{id:"permissions"},"Permissions"),(0,n.mdx)("p",null,"Specific users may not have access to certain metrics. The metrics returned by ",(0,n.mdx)("inlineCode",{parentName:"p"},"GetMetrics")," reflect those restrictions. Requesting a metric that one doesn't have permission to access will result in a ",(0,n.mdx)("inlineCode",{parentName:"p"},"metric_inaccessible")," error."),(0,n.mdx)("h2",{id:"metric-descriptions"},"Metric Descriptions"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Category"),(0,n.mdx)("th",{parentName:"tr",align:null},"Metrics"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"carts totalCarts lifetimeCarts lifetimeTotalCarts participationCarts lifetimeParticipationCarts"),(0,n.mdx)("td",{parentName:"tr",align:null},"Checkout cart metrics -Cart Open - The number of times a customer opened a shopping cart by adding the first item. Occurs the first time an item is added to the shopping cart. This value comes from the scOpen event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"cartAdditions totalCartAdditions lifetimeCartAdditions lifetimeTotalCartAdditions participationCartAdditions lifetimeParticipationCartAdditions"),(0,n.mdx)("td",{parentName:"tr",align:null},"Checkout cart addition metrics -Cart Additions - The number of times an item was added to a shopping cart. This value comes from the scAdd event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"cartRemovals  totalCartRemovals lifetimeCartRemovals lifetimeTotalCartRemovals participationCartRemovals lifetimeParticipationCartRemovals"),(0,n.mdx)("td",{parentName:"tr",align:null},"Checkout cart removal metrics -Cart Removals - Number of times an item was removed from a shopping cart. This value comes from the scRemove event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"cartViews totalCartViews lifetimeCartViews lifetimeTotalCartViews participationCartViews lifetimeParticipationCartViews"),(0,n.mdx)("td",{parentName:"tr",align:null},"Checkout cart view metrics -Cart Views - Event in which the contents of the shopping cart are viewed by the customer. This value comes from the scView event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"checkouts totalCheckout lifetimeCheckout lifetimeTotalCheckouts participationCheckouts lifetimeParticipationCheckouts"),(0,n.mdx)("td",{parentName:"tr",align:null},"Checkout activity metrics -Checkouts - An event that occurs when customers arrive at the checkout stage of a purchase. The checkout stage usually occurs just before a purchase is finalized, and usually involves the customer entering personal information ","(","such as their shipping and billing information",")",". You have control over the events on your site that qualify as checkouts. This value comes from the scCheckout event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"instances"),(0,n.mdx)("td",{parentName:"tr",align:null},"Number of times a specific value is captured. Instances take into account all image request types, and do not factor in conversion variable persistence. For example, if a user arrives on your site via example.com, the first image request on your site contains the referrer of example.com. Looking at instances in the referrers report shows one Instance attributed to example.com even if this value persists for additional page views or link tracking calls on your site.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"orders totalOrders lifetimeOrders lifetimeTotalOrders participationOrders lifetimeParticipationOrders"),(0,n.mdx)("td",{parentName:"tr",align:null},"Order activity metrics -Orders - The number of orders made on your website during the selected time period. You can break down individual time periods by other metrics to show the items ","(","such as products or campaigns",")"," that contributed to the most orders during that time frame.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"revenue totalRevenue lifetimeRevenue lifetimeTotalRevenue participationRevenue lifetimeParticipationRevenue"),(0,n.mdx)("td",{parentName:"tr",align:null},"eCommerce revenue metrics -Revenue - Revenue is captured on the purchase event, and is defined as the total dollar amount for the sum of the order for each product. This value comes from the purchase event.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"units totalUnits lifetimeUnits lifetimeTotalUnits participationUnits lifetimeParticipationUnits"),(0,n.mdx)("td",{parentName:"tr",align:null},"Units purchased metrics -Units - The total units that were ordered for the selected time period. Because you have many units purchased per order, Units is a vital metric that reveals general inventory movement.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"customersNew customersReturn customersLoyal customersDaily customersWeekly customersMonthly customersQuarterly customersYearly"),(0,n.mdx)("td",{parentName:"tr",align:null},"Customer metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"bounces bounceRate totalTimeSpent pathviews"),(0,n.mdx)("td",{parentName:"tr",align:null},"Pathing Metrics.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"Event",(0,n.mdx)("em",{parentName:"td"},"#")," ","(","for example, event2",")"),(0,n.mdx)("td",{parentName:"tr",align:null},"Custom event metric ","(","1-100",")")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"mobilecarrier"),(0,n.mdx)("td",{parentName:"tr",align:null},"Mobile device metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"socialmentions socialreach socialtotalsentiment sociallikeadds socialpageviews socialpostviews socialfbstorytellers socialfbstories socialpubrecommends socialpubcomments socialpubsubscribers socialpubposts"),(0,n.mdx)("td",{parentName:"tr",align:null},"Social metrics. Available only if Social is enabled.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,n.mdx)("td",{parentName:"tr",align:null},"videotime videostart videocomplete videosegmentviews videoadstart videoadcomplete"),(0,n.mdx)("td",{parentName:"tr",align:null},"Video metrics. Available only if v15 video measurement is enabled.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"mobileViews mobileVisits mobileVisitorsDaily"),(0,n.mdx)("td",{parentName:"tr",align:null},"Mobile device metrics. Available only if mobile application reporting is enabled.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"pageViews totalPageViews"),(0,n.mdx)("td",{parentName:"tr",align:null},"Page view metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"visits totalVisits averageTimeSpentOnSite averageVisitDepth returnvisits returnvisitsdaily"),(0,n.mdx)("td",{parentName:"tr",align:null},"Site visit metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"visitors visitorsNew visitorsHourly totalVisitorsHourly visitorsDaily totalVisitorsDaily visitorsWeekly totalVisitorsWeekly visitorsMonthly totalVisitorsMonthly visitorsQuarterly totalVisitorsQuarterly visitorsYearly totalVisitorsYearly"),(0,n.mdx)("td",{parentName:"tr",align:null},"Site visitor metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"videoViews videoVisits videoVisitorsDaily"),(0,n.mdx)("td",{parentName:"tr",align:null},"Video usage metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"averagePageDepth averageTimeSpentOnPage entries exits reloads singleAccess"),(0,n.mdx)("td",{parentName:"tr",align:null},"Pathing metrics")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,n.mdx)("td",{parentName:"tr",align:null},"bots"),(0,n.mdx)("td",{parentName:"tr",align:null},"Bot traffic metrics")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-api-metrics-md-afffa79ecf0e48c5aa38.js.map