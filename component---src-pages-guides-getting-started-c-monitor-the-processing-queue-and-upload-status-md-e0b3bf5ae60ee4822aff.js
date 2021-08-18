(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[53981],{29656:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var r=a(22122),n=a(19756),o=(a(15007),a(64983)),u=a(99536),s=["components"],i={},d={_frontmatter:i},l=u.Z;function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.mdx)(l,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-3-monitor-the-processing-queue-and-upload-status"},"Step 3: Monitor the Processing Queue and Upload Status"),(0,o.mdx)("p",null,"You can monitor the status of the data upload in two steps:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Get the unique identifier for the data being uploaded"),(0,o.mdx)("li",{parentName:"ul"},"Retrieve the upload status using that identifier")),(0,o.mdx)("p",null,"The data upload is actually an FTP file transfer so the unique identifier is the File ID."),(0,o.mdx)("h2",{id:"retrieve-the-file-id-for-the-current-data-upload"},"Retrieve the File ID for the current data upload"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataSource.GetFileIDs()")," or the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataSource.GetFileInfo()")," to get the File ID of the file in the processing queue. The methods require the Data Source ID and the Report Suite ID to identify the file."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"/* DataSource.GetFileIDs - Get File IDs for a Data Source in a Report Suite */ \n$params = array( \n'dataSourceID'=>$dsId, \n'filter'=>'', \n'reportSuiteID'=>$rsId \n); \n$result = sendRequest('DataSource.GetFileIDs', $params ); \nvar_dump($result); \nsleep(2); \n?>\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'/* DataSource.GetFileIDs - Get File IDs for a Data Source in a Report Suite */ \nFileIDResult responsedataSourceGetFileIDs = port.dataSourceGetFileIDs(Integer.toString(dataSourceID), "", reportSuiteID); \nSystem.out.println("Status of responsedataSourceGetFileIDs is: "+responsedataSourceGetFileIDs.getStatus().getMessage());\n')),(0,o.mdx)("h2",{id:"monitor-the-file-upload-status"},"Monitor the File Upload Status"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataSource.GetFileStatus()"),", with the File ID and the Report Suite ID, to monitor the status of the file upload. The status information tells you if the file is queued for processing, processing, or processed. When data source processing completes, the data sent through the data source is available in Analytics."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"/* DataSource.GetFileStatus - Get the File Status for a Data Source in a Report Suite */ \n$params = array( \n'dataSourceFileID'=>$dsId, \n'reportSuiteID'=>$rsId \n); \n\n$result = sendRequest('DataSource.GetFileStatus', $params ); \nvar_dump($result); \n?>\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'/* DataSource.GetFileStatus - Get the File Status for a Data Source in a Report Suite */ \nFileStatusResult responsedataSourceGetFileStatus = port.dataSourceGetFileStatus(Integer.toString(responsedataSourceSetupGeneric.getDataSourceID()), reportSuiteID); \n\nSystem.out.println("Status of responsedataSourceGetFileStatus is: \n"+responsedataSourceGetFileStatus.getStatus().getMessage());\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,o.mdx)("a",{parentName:"p",href:"c_Data_Sources_Overview.md"},"Data Sources API Tutorial")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-monitor-the-processing-queue-and-upload-status-md-e0b3bf5ae60ee4822aff.js.map