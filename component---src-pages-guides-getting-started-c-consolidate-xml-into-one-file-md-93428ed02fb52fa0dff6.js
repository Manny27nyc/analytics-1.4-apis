(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[71037],{77085:function(e,n,s){"use strict";s.r(n),s.d(n,{_frontmatter:function(){return a},default:function(){return l}});var t=s(22122),r=s(19756),o=(s(15007),s(64983)),i=s(99536),p=["components"],a={},d={_frontmatter:a},m=i.Z;function l(e){var n=e.components,s=(0,r.Z)(e,p);return(0,o.mdx)(m,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-4-consolidate-xml-into-one-file"},"Step 4: Consolidate XML Into One File"),(0,o.mdx)("p",null,"Next you will substitute the XML generated by Report Builder, which includes the Twitter-specific parameters, in the wrapper XML code generated by API Explorer."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Replace the reportDescription element in API Explorer with the reportDescription element from Report Builder code as shown below."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.omniture.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n  <SOAP-ENV:Header>\n    <wsse:Security xmlns:wsse="http://www.omniture.com" wsse:mustUnderstand="1">\n      <wsse:UsernameToken wsse:Id="User">\n        <wsse:Username>your user name</wsse:Username>\n        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">your password</wsse:Password>\n        <wsse:Nonce>OTgwNGQxZTQwMjc5YjkwYjhjNDNlNWE1</wsse:Nonce>\n        <wsse:Created>2011-01-27T18:58:24Z</wsse:Created>\n      </wsse:UsernameToken>\n    </wsse:Security>\n  </SOAP-ENV:Header>\n  <SOAP-ENV:Body>\n    <ns1:Report.QueueRanked>\n         <reportDescription href="#id1"/>\n    </ns1:Report.QueueRanked>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add the remaining Report Builder code after the closing ",(0,o.mdx)("strong",{parentName:"p"},"QueueRanked")," tag in API Explorer as shown in the following code."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml version="1.0" encoding="UTF-8"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.omniture.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n  <SOAP-ENV:Header>\n    <wsse:Security xmlns:wsse="http://www.omniture.com" wsse:mustUnderstand="1">\n      <wsse:UsernameToken wsse:Id="User">\n        <wsse:Username>your user name</wsse:Username>\n        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">your password</wsse:Password>\n        <wsse:Nonce>ZDE0NWYzMDNiMzQ0NjAwNDdkYTkyNWU2</wsse:Nonce>\n        <wsse:Created>2010-12-21T21:06:04Z</wsse:Created>\n      </wsse:UsernameToken>\n    </wsse:Security>\n  </SOAP-ENV:Header>\n  <SOAP-ENV:Body>\n    <ns1:Report.QueueRanked>\n      <reportDescription href="#id1"/>\n    </ns1:Report.QueueRanked>\n \n<types:ReportDescription id="id1" xsi:type="types:ReportDescription">\n      <reportSuiteID xsi:type="xsd:string">\n            jjesquire4\n      </reportSuiteID>\n      <date xsi:nil="true" />\n            <dateFrom xsi:type="xsd:string">\n                  2011-01-23\n            </dateFrom>\n            <dateTo xsi:type="xsd:string">\n                  2011-01-23\n            </dateTo>\n      <dateGranularity xsi:nil="true" />\n      <metrics href="#id2" />\n            <sortBy xsi:type="xsd:string">\n                  event3\n            </sortBy>\n            <elements href="#id3" />\n            <locale xsi:type="tns:reportDefinitionLocale">\n                  en_US\n            </locale>\n            <Id xsi:type="xsd:string">TCIBHYJISHBIZWVNYKSDD</Id>\n            <Type xsi:type="tns:reportType">ranked</Type>\n</types:ReportDescription>\n \n<soapenc:Array id="id2" soapenc:arrayType="tns:reportDefinitionMetric[1]">\n<Item href="#id4" />\n</soapenc:Array>\n \n<soapenc:Array id="id3" soapenc:arrayType="tns:reportDefinitionElement[1]">\n<Item href="#id5" />\n</soapenc:Array>\n \n<tns:reportDefinitionMetric id="id4" xsi:type="tns:reportDefinitionMetric">\n<id xsi:type="xsd:string">\n   event3\n</id>\n<segment xsi:nil="true" />\n<segmentID xsi:nil="true" />\n</tns:reportDefinitionMetric>\n \n<tns:reportDefinitionElement id="id5" xsi:type="tns:reportDefinitionElement">\n<id xsi:type="xsd:string">\nevar44\n      </id>\n<classification xsi:type="xsd:string" />\n<top xsi:type="xsd:int">\n10\n</top>\n<startingWith xsi:type="xsd:int">\n1\n</startingWith>\n<search xsi:nil="true" />\n<selected xsi:nil="true" />\n<expanded xsi:nil="true" />\n</tns:reportDefinitionElement>\n  \n    </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Click on the ",(0,o.mdx)("strong",{parentName:"p"},"Get Response")," button again to submit the request in API Explorer and ensure that you get the valid response, ",(0,o.mdx)("strong",{parentName:"p"},"Your report has been queued"),"."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:tns="http://www.omniture.com/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n  <SOAP-ENV:Body>\n    <ns1:Report.QueueRankedResponse xmlns:ns1="http://www.omniture.com/">\n      <return xsi:type="tns:reportQueueResponse">\n        <status xsi:type="xsd:string">queued</status>\n        <statusMsg xsi:type="xsd:string">Your report has been queued</statusMsg>\n        <reportID xsi:type="xsd:int">37731986</reportID>\n      </return>\n    </ns1:Report.QueueRankedResponse>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n')))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,o.mdx)("a",{parentName:"p",href:"c_define_report_requests.md"},"Script for Defining Report Requests")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-consolidate-xml-into-one-file-md-93428ed02fb52fa0dff6.js.map