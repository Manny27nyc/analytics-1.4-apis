(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[31682],{88651:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return d}});var i=a(22122),n=a(19756),r=(a(15007),a(64983)),o=a(99536),s=["components"],p={},c={_frontmatter:p},l=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.mdx)(l,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"3-integrate-partner-data-tutorial"},"3. Integrate Partner Data Tutorial"),(0,r.mdx)("p",null,"In the first two tutorials of the series, ",(0,r.mdx)("a",{parentName:"p",href:"c_scripting.md#"},"1. On Demand Scripts Tutorial")," and ",(0,r.mdx)("a",{parentName:"p",href:"c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#"},"2. Partner Application Configuration Tutorial"),", Partners learned how to create On Demand scripts for Partner reports and how to upload them during the creation of the Integration Wizard. The Integration Wizard packages all of the scripts, variables and data needed for Customer integration and automates the process of mapping Partner and Customer variables to each other."),(0,r.mdx)("p",null,"While the other tutorials and articles in this series are focused on Partner tasks, this one is focused on Customer tasks. As a Partner, keep in mind that you are performing the Customer's role to help you better understand the product integration process."),(0,r.mdx)("p",null,"In this tutorial, you will learn how to execute the data connectors product Integration Wizard and then add the data connectors-provided JavaScript code to your existing Analytics JavaScript code. This will pass data connectors product data back to the Adobe Data Collection Layer along with your Analytics online analytics data."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," This tutorial assumes that you know how to collect Analytics metrics using Analytics JavaScript Tagging."),(0,r.mdx)("h2",{id:"prerequisite-knowledge-system-permissions-and-environment-setup"},"Prerequisite knowledge, system permissions and environment setup"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"This article is for web developers with knowledge of HTML and JavaScript."),(0,r.mdx)("li",{parentName:"ul"},"You must have a valid ",(0,r.mdx)("em",{parentName:"li"},"Report Suite ID")," in order to complete this tutorial. Follow the directions in the ",(0,r.mdx)("a",{parentName:"li",href:"c_Authentication_and_Setup.md#"},"Authentication and Setup Tutorial"),".")),(0,r.mdx)("h2",{id:"download-code-files-for-this-tutorial"},"Download code files for this tutorial"),(0,r.mdx)("p",null,"This tutorial displays code inline to the discussion but you can also download the code for PHP, Java or C","#"," to explore on your own."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://microsite.omniture.com/t2/api-xml/en_US/get_started/zips/Partner_API_integrate_starter.zip"},"Partner","_","API","_","integrate","_","starter.zip")," "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://microsite.omniture.com/t2/api-xml/en_US/get_started/zips/Partner_API_integrate_solution.zip"},"Partner","_","API","_","integrate","_","solution.zip")," ")),(0,r.mdx)("p",null,"Follow the directions in the ",(0,r.mdx)("a",{parentName:"p",href:"c_Authentication_and_Setup.md#"},"Authentication and Setup Tutorial")," article."),(0,r.mdx)("h2",{id:"an-overview-of-data-connectors-integration"},"An overview of Data Connectors integration"),(0,r.mdx)("p",null,"Before Analytics Customers can use a data connectors product, they must first run the data connectors product Integration Wizard and map some of their application variables and events to the data connectors product's variables and events."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/cb523/integrate002.webp 320w","/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/797b9/integrate002.webp 640w","/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/06fd5/integrate002.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/72799/integrate002.png 320w","/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/6af66/integrate002.png 640w","/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/8c557/integrate002.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-1.4-apis/static/0d060e446e757cd6ca94921e14bbc1f9/8c557/integrate002.png",alt:"integrate002",title:"integrate002",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Once the Customer has run the Integration Wizard, the Adobe Engineering team takes the information from the active integration and builds the ",(0,r.mdx)("em",{parentName:"p"},"Data Connectors JavaScript code"),". The Customer then adds this JavaScript code to their existing Analytics JavaScript library file ","(",(0,r.mdx)("strong",{parentName:"p"},"s","_","code.js"),")","."),(0,r.mdx)("p",null,"Once you have integrated the Analytics JavaScript code into your web pages, each web page request sends analytics data to the Adobe Data Collection Layer."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"735px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/cb523/integrate003.webp 320w","/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/797b9/integrate003.webp 640w","/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/9144d/integrate003.webp 735w"],sizes:"(max-width: 735px) 100vw, 735px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/72799/integrate003.png 320w","/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/6af66/integrate003.png 640w","/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/7608e/integrate003.png 735w"],sizes:"(max-width: 735px) 100vw, 735px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-1.4-apis/static/f3cd1f0f8fd0fbac4561ca75b8f57741/7608e/integrate003.png",alt:"integrate003",title:"integrate003",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"When you integrate data connectors product data, you can optionally delay the JavaScript processing to the Adobe Data Collection Layer so that the system has time to retrieve the necessary data from the Partner servers ","(","see Figure 4",")","."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," Data connectors products are created by Partners. The product data may come from either Adobe or Partner servers."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"731px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/cb523/integrate004.webp 320w","/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/797b9/integrate004.webp 640w","/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/19e9a/integrate004.webp 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/72799/integrate004.png 320w","/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/6af66/integrate004.png 640w","/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/6e9ba/integrate004.png 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-1.4-apis/static/e4e77a50cbf757e1486b258ea4e9890a/6e9ba/integrate004.png",alt:"integrate004",title:"integrate004",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"In this tutorial, you will perform the following steps to integrate the data connectors product data into your own application:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Active_the_Integration_for_your_Analytics_Report_Suite.md#"},"Step 1: Active the Integration for your Analytics Report Suite")," "),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Review_Analytics_JavaScript_Code.md#"},"Step 2: Review Analytics JavaScript Code in the JJ. Esquire Demo Application")," "),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Add_Data_Connectors_JavaScript_Code_to_your_Analytics_JavaScript_Library_File.md#"},"Step 3: Add Data Connectors JavaScript Code to your Analytics JavaScript Library File")," "),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Display_Product_Data_in_the_JJ._Esquire_Demo_Application.md#"},"Step 4: Display Product Data in the JJ. Esquire Demo Application")," "),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Verify_retrieval_of_Partner_Data_using_Adobe_DigitalPulse_Debugger.md#"},"Step 5: Verify retrieval of Partner Data using AdobePulse Debugger")," "),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"c_Run_Analytics_Reports_to_Verify_Partner_Data_Collection.md#"},"Step 6: Run Analytics Reports to Verify Partner Data Collection")," ")),(0,r.mdx)("p",null,"Once the data connectors product data has been sent to the Adobe Data Center it will be included in Analytics reports. You will learn more about how the Partners can pull reports on this integrated data using the Partner API in the ",(0,r.mdx)("a",{parentName:"p",href:"c_Create_Data_Connectors_Partner_Reports_using_the_Partner_API.md#"},"4. Partner Reports Tutorial")," and the ",(0,r.mdx)("a",{parentName:"p",href:"c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md#"},"7. Data Warehouse Tutorial")," articles."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Active_the_Integration_for_your_Analytics_Report_Suite.md"},"Step 1: Active the Integration for your Analytics Report Suite")),"  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Review_Analytics_JavaScript_Code.md"},"Step 2: Review Analytics JavaScript Code in the JJ. Esquire Demo Application")),"  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Add_Data_Connectors_JavaScript_Code_to_your_Analytics_JavaScript_Library_File.md"},"Step 3: Add Data Connectors JavaScript Code to your Analytics JavaScript Library File")),"  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Display_Product_Data_in_the_JJ._Esquire_Demo_Application.md"},"Step 4: Display Product Data in the JJ. Esquire Demo Application")),"  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Verify_retrieval_of_Partner_Data_using_Adobe_DigitalPulse_Debugger.md"},"Step 5: Verify retrieval of Partner Data using AdobePulse Debugger")),"  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"c_Run_Analytics_Reports_to_Verify_Partner_Data_Collection.md"},"Step 6: Run Analytics Reports to Verify Partner Data Collection")),"  ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-integrate-data-connectors-partner-data-into-customer-application-md-2eadd3bd78be4bfa6e80.js.map