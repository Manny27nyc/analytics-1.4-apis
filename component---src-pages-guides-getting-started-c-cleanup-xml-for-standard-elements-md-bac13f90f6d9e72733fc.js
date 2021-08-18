(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7357],{79677:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return l}});var i=t(22122),r=t(19756),o=(t(15007),t(64983)),a=t(99536),s=["components"],p={},d={_frontmatter:p},m=a.Z;function l(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)(m,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-5-cleanup-xml-for-standard-elements"},"Step 5: Cleanup XML for Standard Elements"),(0,o.mdx)("p",null,"The code you generated in the previous sections is syntactically valid, but needs to be modified for use in the Integration Wizard that you will create in the next tutorial, ",(0,o.mdx)("a",{parentName:"p",href:"c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#"},"2. Partner Application Configuration Tutorial"),". In this section, you will focus on converting the XML code and removing extraneous elements, including parameters with no values."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Copy the code in API Explorer and paste it to a text file on your computer.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Name the file ",(0,o.mdx)("strong",{parentName:"p"},"followers","_","per","_","twitter","_","handle"),". After you are done with the modifications, you will copy the final code into the Integration Wizard.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Delete everything outside of ","(","and including",")"," the soap ",(0,o.mdx)("strong",{parentName:"p"},"Body")," element and surround the XML with ",(0,o.mdx)("strong",{parentName:"p"},"<genesis",">")," tags."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n...\n  <SOAP-ENV:Body>\n<genesis>\n \n<ns1:Report.QueueRanked>\n      <reportDescription href="#id1"/>\n    </ns1:Report.QueueRanked>\n \n<types:ReportDescription id="id1" xsi:type="types:ReportDescription">\n      <reportSuiteID xsi:type="xsd:string">\n            jjesquire4\n      </reportSuiteID>\n      <date xsi:nil="true" />\n            <dateFrom xsi:type="xsd:string">\n                  2011-01-23\n            </dateFrom>\n            <dateTo xsi:type="xsd:string">\n                  2011-01-23\n            </dateTo>\n      <dateGranularity xsi:nil="true" />\n      <metrics href="#id2" />\n            <sortBy xsi:type="xsd:string">\n                  event3\n            </sortBy>\n            <elements href="#id3" />\n            <locale xsi:type="tns:reportDefinitionLocale">\n                  en_US\n            </locale>\n            <Id xsi:type="xsd:string">TCIBHYJISHBIZWVNYKSDD</Id>\n            <Type xsi:type="tns:reportType">ranked</Type>\n</types:ReportDescription>\n \n<soapenc:Array id="id2" soapenc:arrayType="tns:reportDefinitionMetric[1]">\n<Item href="#id4" />\n</soapenc:Array>\n \n<soapenc:Array id="id3" soapenc:arrayType="tns:reportDefinitionElement[1]">\n<Item href="#id5" />\n</soapenc:Array>\n \n<tns:reportDefinitionMetric id="id4" xsi:type="tns:reportDefinitionMetric">\n<id xsi:type="xsd:string">\n    event3\n</id>\n<segment xsi:nil="true" />\n<segmentID xsi:nil="true" />\n</tns:reportDefinitionMetric>\n \n<tns:reportDefinitionElement id="id5" xsi:type="tns:reportDefinitionElement">\n<id xsi:type="xsd:string">\n   evar44\n</id>\n<classification xsi:type="xsd:string" />\n<top xsi:type="xsd:int">\n10\n</top>\n<startingWith xsi:type="xsd:int">\n1\n</startingWith>\n<search xsi:nil="true" />\n<selected xsi:nil="true" />\n<expanded xsi:nil="true" />\n</tns:reportDefinitionElement>\n \n</genesis>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Next, remove all type declarations from the call, instances of ",(0,o.mdx)("strong",{parentName:"p"},"ns1"),", the locale, the ",(0,o.mdx)("strong",{parentName:"p"},"Id")," in the ReportDescription, the ",(0,o.mdx)("strong",{parentName:"p"},"soapenc")," and ",(0,o.mdx)("strong",{parentName:"p"},"tns")," reference and any parameters with no value. The runtime only interprets methods and parameters without the declarative SOAP structure."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<genesis>\n \n<Report.QueueRanked>\n      <reportDescription href="#id1"/>\n </Report.QueueRanked>\n \n<ReportDescription id="id1" >\n      <reportSuiteID>\n            jjesquire4\n      </reportSuiteID>\n      <date/>\n            <dateFrom>\n                  2011-01-23\n            </dateFrom>\n            <dateTo>\n                  2011-01-23\n            </dateTo>\n      <dateGranularity />\n      <metrics href="#id2" />\n            <sortBy>\n                  event3\n            </sortBy>\n            <elements href="#id3" />\n            <Type>ranked</Type>\n</ReportDescription>\n \n<soapenc:Array id="id2" >\n<Item href="#id4" />\n</soapenc:Array>\n \n<soapenc:Array id="id3" >\n<Item href="#id5" />\n</soapenc:Array>\n \n<tns:reportDefinitionMetric id="id4" >\n<id>\n   event3\n</id>\n</tns:reportDefinitionMetric>\n \n<reportDefinitionElement id="id5">\n<id>\nevar44\n      </id>\n<classification/>\n<top>\n10\n</top>\n<startingWith>\n1\n</startingWith>\n \n</reportDefinitionElement>\n \n</genesis>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Then remove all ",(0,o.mdx)("strong",{parentName:"p"},"href"),"'s and embed the referenced code directly in each element."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"<genesis>\n \n<Report.QueueRanked>\n      <ReportDescription>\n     \n      <reportSuiteID>\n          jjesquire4\n      </reportSuiteID>\n     \n      <dateFrom>\n          2010-12-20\n      </dateFrom>\n     \n      <dateTo>\n          2010-12-20\n      </dateTo>\n     \n     <metrics>\n         <Item/>\n \n    <reportDefinitionMetric>\n      <id>\n          event3\n      </id>\n    </reportDefinitionMetric>\n   \n    <sortBy>\n         event3\n    </sortBy>\n    <Type>\n         ranked\n    </Type>\n \n    <reportDefinitionElement>\n      <id>\n          evar44\n      </id>\n      <top>\n          10\n      </top>\n      <startingWith>\n          1\n      </startingWith>\n    </reportDefinitionElement>\n \n </genesis>\n")))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,o.mdx)("a",{parentName:"p",href:"c_define_report_requests.md"},"Script for Defining Report Requests")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-cleanup-xml-for-standard-elements-md-bac13f90f6d9e72733fc.js.map