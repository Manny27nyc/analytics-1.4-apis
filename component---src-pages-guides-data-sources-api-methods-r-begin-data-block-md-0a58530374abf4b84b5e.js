(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[85587],{11074:function(t,e,a){"use strict";a.r(e),a.d(e,{_frontmatter:function(){return l},default:function(){return p}});var n=a(22122),r=a(19756),d=(a(15007),a(64983)),m=a(99536),i=["components"],l={},s={_frontmatter:l},o=m.Z;function p(t){var e=t.components,a=(0,r.Z)(t,i);return(0,d.mdx)(o,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"begindatablock"},"BeginDataBlock"),(0,d.mdx)("p",null,"Submits the first HTTP data block in a Data Sources submission."),(0,d.mdx)("h2",{id:"datasourcebegindatablock-parameters"},"DataSource.BeginDataBlock Parameters"),(0,d.mdx)("p",null,"Individual data blocks can contain no more than 10,000 data rows ","(","to keep the HTTP POST below 10MB",")",", so you might need to submit data in multiple data blocks."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"reportSuiteID")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the report suite where you want to submit the data block.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"dataSourceID")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the Data Source where you want to submit the data block. You can get this ID by calling ",(0,d.mdx)("a",{parentName:"td",href:"../../data-sources-api/methods/r_getIDs.md"},"DataSource.GetIDs"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"blockName")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the file that appears in the Data Sources log. If not specified, a block name is generated for you.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"columnNames")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../data_types/r_col_array.md#"},"tns:colArray")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The names of the data columns ","(","the column headings",")"," submitted via Data Sources.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"rows")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../data_types/r_row_array.md#"},"tns:rowArray"),"*"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"The data to submit to Analytics collection servers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"endOfBlock")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates if this is the last block in the data submission. You can use the ",(0,d.mdx)("inlineCode",{parentName:"td"},"endOfBlock")," parameter in the following ways. ",(0,d.mdx)("strong",{parentName:"td"},"Self-terminating:")," Include ",(0,d.mdx)("inlineCode",{parentName:"td"},"<endOfBlock/>")," to indicate that this is the last block in the data source. Data Sources then queues the Data Source for processing. ",(0,d.mdx)("strong",{parentName:"td"},"With Parameter:")," Include either false or 0 as an ",(0,d.mdx)("inlineCode",{parentName:"td"},"endOfBlock")," parameter to indicate this block is NOT the last in the data source. ",(0,d.mdx)("strong",{parentName:"td"},"Note:")," If supported by your SOAP client, you can also exclude the ",(0,d.mdx)("inlineCode",{parentName:"td"},"endOfBlock")," parameter to indicate that this block is not the last in the data source.")))),(0,d.mdx)("p",null,"*","The XML for the row parameter in the BeginDataBlock call is similar to the following. This XML sample does not include the ",(0,d.mdx)("inlineCode",{parentName:"p"},"<endOfBlock/>")," parameter, indicating that additional data is forthcoming through a ",(0,d.mdx)("a",{parentName:"p",href:"r_appendDataBlock.md#"},"DataSource.AppendDataBlock")," call."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'<reportSuiteID xsi:type="xsd:string">myReportSuite</reportSuiteID>\n<dataSourceID xsi:type="xsd:string">12345</dataSourceID>\n<blockName xsi:type="xsd:string">myTestFile</blockName>\n<columnNames xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="xsd:string[3]">\n  <item xsi:type="xsd:string">date</item>\n  <item xsi:type="xsd:string">evar 1</item>\n  <item xsi:type="xsd:string">event 2</item>\n</columnNames>\n<rows xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:colArray[2]">\n  <item xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="xsd:string[3]">\n    <item xsi:type="xsd:string">1/1/2009</item>\n    <item xsi:type="xsd:string">product1</item>\n    <item xsi:type="xsd:string">2.50</item>\n  </item>\n  <item xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="xsd:string[3]">\n    <item xsi:type="xsd:string">1/2/2009</item>\n    <item xsi:type="xsd:string">product2</item>\n    <item xsi:type="xsd:string">4.25</item>\n  </item>\n</rows>\n')),(0,d.mdx)("h2",{id:"datasourcebegindatablock-response"},"DataSource.BeginDataBlock Response"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"status")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates if the call was successful. Valid return values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"Failed")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"Success"),". If the call fails, Data Sources returns an error message.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"blockID")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID used to append additional data blocks to this Data Sources submission. This parameter is assigned a value only when the data block does not include the ",(0,d.mdx)("inlineCode",{parentName:"td"},"<endOfBlock/>")," tag.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"fileID")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID generated by the Processing Queue to identify a particular Data Sources submission. This value is a uniform identifier, independent of the particular data submission method ","(","HTTP vs. FTP",")",". This parameter is assigned a value only when the data block includes the ",(0,d.mdx)("inlineCode",{parentName:"td"},"<endOfBlock/>")," tag.")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,d.mdx)("a",{parentName:"p",href:"../methods/c_data_sources_methods.md"},"Methods")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-data-sources-api-methods-r-begin-data-block-md-0a58530374abf4b84b5e.js.map