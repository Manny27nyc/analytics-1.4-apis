(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[84416],{39349:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var a=n(22122),d=n(19756),m=(n(15007),n(64983)),r=n(99536),l=["components"],i={},p={_frontmatter:i},o=r.Z;function u(e){var t=e.components,n=(0,d.Z)(e,l);return(0,m.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"event"},"event"),(0,m.mdx)("p",null,"Data structure that contains information about an Event ","(","Traffic variable",")","."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"custom","_","event")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,m.mdx)("td",{parentName:"tr",align:null},"Flag that indicates if this is a custom event. ",(0,m.mdx)("inlineCode",{parentName:"td"},"0"),": Not a custom event.  ",(0,m.mdx)("inlineCode",{parentName:"td"},"1"),": Custom event.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"default","_","metric")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,m.mdx)("td",{parentName:"tr",align:null},"Flag that indicates if this is a default metric. ",(0,m.mdx)("inlineCode",{parentName:"td"},"0"),": Not a default metric.  ",(0,m.mdx)("inlineCode",{parentName:"td"},"1"),": Default metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"event","_","name")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The Event name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"event","_","number")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,m.mdx)("td",{parentName:"tr",align:null},"The Event number, If this is a custom event ","(","1 - 100",")",".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"event","_","type")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"r_event_type_enum.md#"},"event","_","type","_","enum")),(0,m.mdx)("td",{parentName:"tr",align:null},"The Event type.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"relation","_","string")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,m.mdx)("td",{parentName:"tr",align:null},"A string representation of ",(0,m.mdx)("inlineCode",{parentName:"td"},"rel_id"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"in","_","queue")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,m.mdx)("td",{parentName:"tr",align:null},"Flag that indicates whether the item is in the Pending Approval queue. Supported values include: ",(0,m.mdx)("inlineCode",{parentName:"td"},"1"),": In the Pending Approval queue. ",(0,m.mdx)("inlineCode",{parentName:"td"},"0"),": Not in the Pending Approval queue. ",(0,m.mdx)("strong",{parentName:"td"},"Note:")," Populated in method response only. Leave ",(0,m.mdx)("inlineCode",{parentName:"td"},"in_queue")," blank for method requests.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"status")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,m.mdx)("td",{parentName:"tr",align:null},"If ",(0,m.mdx)("inlineCode",{parentName:"td"},"in_queue = 0"),", then ",(0,m.mdx)("inlineCode",{parentName:"td"},"status = 0"),". If ",(0,m.mdx)("inlineCode",{parentName:"td"},"in_queue = 1"),", status is one of the following values: ",(0,m.mdx)("inlineCode",{parentName:"td"},"1"),": Pending approval to Save. ",(0,m.mdx)("inlineCode",{parentName:"td"},"2"),": Pending approval to Delete. ",(0,m.mdx)("strong",{parentName:"td"},"Note:")," Populated in method response only. Leave ",(0,m.mdx)("inlineCode",{parentName:"td"},"status")," blank for method requests.")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,m.mdx)("a",{parentName:"p",href:"../data_types/c_datatypes.md"},"Data Types")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-admin-api-1-3-data-types-r-event-md-c5c7623474c10cc963ea.js.map