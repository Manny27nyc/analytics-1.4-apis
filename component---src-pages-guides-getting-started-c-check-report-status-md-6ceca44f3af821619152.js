(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[15298],{9315:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return l}});var a=n(22122),r=n(19756),p=(n(15007),n(64983)),o=n(99536),m=["components"],i={},s={_frontmatter:i},d=o.Z;function l(e){var t=e.components,n=(0,r.Z)(e,m);return(0,p.mdx)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"script-for-checking-report-status"},"Script for Checking Report Status"),(0,p.mdx)("p",null,"Next you will create an ",(0,p.mdx)("strong",{parentName:"p"},"On Demand")," script to check the status of your report request."),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In ",(0,p.mdx)("strong",{parentName:"p"},"API Explorer"),", select the ",(0,p.mdx)("strong",{parentName:"p"},"Report.GetStatus")," method from the dropdown list.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Select everything between the ",(0,p.mdx)("strong",{parentName:"p"},"body")," tags of the request and copy it."),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},'<ns1:Report.GetStatus>\n      <reportID xsi:nil="true"/>\n</ns1:Report.GetStatus>\n'))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Paste it into a new text file on your computer and name it ",(0,p.mdx)("strong",{parentName:"p"},"getReportStatusOD"),".")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Clean up the XML code by removing the namespace tag ","(",(0,p.mdx)("strong",{parentName:"p"},"ns1"),")"," and the ",(0,p.mdx)("strong",{parentName:"p"},"xsi")," parameter.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Wrap the XML within ",(0,p.mdx)("strong",{parentName:"p"},"genesis")," tags and add the ",(0,p.mdx)("strong",{parentName:"p"},"REPORT","_","ID")," variable to reference the Partner integration."))),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre"},'\nWizard script name: getReportStatusOD\n \n<genesis>\n  <Report.GetStatus>\n      <reportID replaceWith="param">REPORT_ID</reportID>\n  </Report.GetStatus>\n</genesis>\n')),(0,p.mdx)("p",null,"This Check Status On Demand script is now complete and you will use it in the next tutorial, ",(0,p.mdx)("a",{parentName:"p",href:"c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#"},"2. Partner Application Configuration Tutorial"),", when you create the Integration Wizard."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,p.mdx)("a",{parentName:"p",href:"c_scripting.md"},"1. On Demand Scripts Tutorial")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-check-report-status-md-6ceca44f3af821619152.js.map