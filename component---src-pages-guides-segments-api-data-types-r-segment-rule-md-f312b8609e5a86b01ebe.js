(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[92292],{91072:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),m=n(99536),i=["components"],l={},s={_frontmatter:l},o=m.Z;function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(o,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"segment_rule"},"segment","_","rule"),(0,d.mdx)("p",null,"Defines the data that is matched by a segment container."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"container")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"r_segment_container.md#"},"segment","_","container")),(0,d.mdx)("td",{parentName:"tr",align:null},'Nested segment container. A segment rule must have either "container" or "operator" ',"(","you cannot include both in the same rule",")",'. When a container is included, all other rule fields are ignored except "exclude".')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"metric")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},'Metric to segment, required if "element" is not present. Must be a metric id as returned from Report.GetMetrics.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"element")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Element ","(","dimension",")",' to segment, required if "metric" is not present or if "classification" is present. Must be an element id as returned from Report.GetElements')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"classification")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Element classification to segment, name of the classification as returned from ReportSuite.GetClassifications.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operator")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},'Required if "container" is not present. See the "',(0,d.mdx)("strong",{parentName:"td"},"Rule Operators"),'" section below.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"value")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},'Required except when using one of the exists operators, options depend on the accompanying "metric" or "element". See ',(0,d.mdx)("a",{parentName:"td",href:"http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_definition"},"Segment Definition Changes")," for a list of dimensions that use enumerated lists.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"after")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"r_segment_rule_restriction.md#"},"segment","_","rule","_","restriction")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","Optional",")",' The After operator is used to specify a minimum limit between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. See ',(0,d.mdx)("a",{parentName:"td",href:"http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_example_time_between_after"},"Using the After Operator"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"within")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"r_segment_rule_restriction.md#"},"segment","_","rule","_","restriction")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","Optional",")",' The Within operator specifies a maximum limit on the amount of time between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. See ',(0,d.mdx)("a",{parentName:"td",href:"http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_example_time_between_within"},"Using the Within Operator"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"exclude")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:boolean")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," Exclude rather than include data that matches the segment rule. Defaults to false.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," Not used, can be provided will not be saved.")))),(0,d.mdx)("h2",{id:"rule-operators"},"Rule Operators"),(0,d.mdx)("p",null,'A rule operator has many different options. Those options depend on the accompanying "metric" or "element". Some combinations of metric/element + operator affect the compatibility of the whole segment definition with different Analytics reporting interfaces. Definition compatibility can be obtained from Segments.',(0,d.mdx)("a",{parentName:"p",href:"../methods/r_Get.md#"},"Get")," after the segment is saved. A segment definition that is incompatible with data warehouse and other Analytics reporting interfaces returns an error when attempting to save."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," Operators marked ",(0,d.mdx)("strong",{parentName:"p"},"(","dw only",")")," indicate that they work with data warehouse segments only."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Operator"),(0,d.mdx)("th",{parentName:"tr",align:null},"The selected dimension, segment, or metric event..."))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"equals")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that match exactly for a numeric or string value. ",(0,d.mdx)("strong",{parentName:"td"},"Note:"),' If using wildcard characters, use the "matches" operator.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","equals")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns all items that do not contain the exact match of the value entered. ",(0,d.mdx)("strong",{parentName:"td"},"Note:"),' If using wildcard characters, use the "does not match" operator.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"matches")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that match exactly based on a given numeric or string value. ",(0,d.mdx)("strong",{parentName:"td"},"Note:")," Use this operator when using wildcard ","(","globbing",")"," features.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","matches")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns all items that do not contain the exact match of the value entered. ",(0,d.mdx)("strong",{parentName:"td"},"Note:")," Use this operator when using wildcard ","(","globbing",")"," features.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"less","_","than")," ","(","dw only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items whose numeric count is less than the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"less","_","than","_","or","_","equals")," ","(","dw only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items whose numeric count is less than or equal to the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"greater","_","than")," ","(","dw only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items whose numeric count is greater than the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"greater","_","than","_","or","_","equals")," ","(","dw only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items whose numeric count is greater than or equal to the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"contains")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns items that compare to the substrings of the values entered. For example, if the rule for "Page" contains "Search", then it will match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching".')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","contains")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns the inverse of the "contains" rule. Specifically, all items that match the entered value will be excluded from the entered values. For example, if the rule for "Page" does not contain "Search", then it will not match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching". These values will be excluded from the results.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"contains","_","all")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns items compared to the substrings, including multiple values joined together. For example, entering "Search Results" with this operator would match "Search Results" and "Results of Search", but not "Search" or "Results" independently. It would match Search AND Results found together.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","contains","_","all")),(0,d.mdx)("td",{parentName:"tr",align:null},'Identifies items compared to substrings—including multiple values joined together—and then only return items without these values. For example, entering "Search Results" with this operator would identify "Search Results" and "Results of Search" ',"(",'but not "Search" or "Results" independently',")"," and then exclude these items.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"contains","_","any")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns items compared to the substrings, including multiple values joined or independently identified. For example, entering "Search Results" with this operator would match "Search Results", "Results of Search", "Search", and "Results". It would match either "Search" OR "Results" found together or independently.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","contains","_","any")),(0,d.mdx)("td",{parentName:"tr",align:null},'Identifies items based on substrings and then returns values that do not contain these substrings. It can have multiple joined values or values independently identified. For example, entering "Search Results" would match "Search Results", "Results of Search", "Search", and "Results" where either "Search" or "Results" are found together or independently. It would then exclude items that contain these substrings.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"starts","_","with")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that start with the character or strings of the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","starts","_","with")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns all items that do not start with the characters or strings of the values entered. This is the inverse of "starts with" operator.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"ends","_","with")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that end with the character or strings of the value entered.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","ends","_","with")),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns all items that do not end with the characters or strings of the value entered. This is the inverse of "ends with" operator.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","metric","_","exists")," ","(","metrics only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that contain an empty string identified as a null value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"metric","_","exists****")," ","(","metrics only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns items that do not contain a null value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"exists")," ","(","elements only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns the number of items that exist. For example, if you evaluate the Pages Not Found dimension using the "exist" operator, the number of error pages that exist is returned.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"not","_","exists")," ","(","elements only",")"),(0,d.mdx)("td",{parentName:"tr",align:null},'Returns all items that do not exist. For example, if you evaluate the Pages Not Found dimension using the " does not exist" operator, the number of pages where this error page did not exist is returned.')))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,d.mdx)("a",{parentName:"p",href:"../data_types/datatypes.md"},"Data Types")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-segments-api-data-types-r-segment-rule-md-f312b8609e5a86b01ebe.js.map