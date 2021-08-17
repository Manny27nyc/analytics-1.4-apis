(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[94762],{47700:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(15007),n(64983)),o=n(99536),d=["components"],m={},s={_frontmatter:m},l=o.Z;function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.mdx)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"step-1-create-a-request"},"Step 1: Create a Request"),(0,i.mdx)("p",null,"You use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataWarehouse.Request()")," method to request the delivery of a report through email, FTP or via the REST or SOAP interface. This method requires the parameters shown in the following table:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Property"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"rsid"),(0,i.mdx)("td",{parentName:"tr",align:null},"The ID of the report suite for this request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Contact","_","Name"),(0,i.mdx)("td",{parentName:"tr",align:null},"The name of the person making the request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Contact","_","Phone"),(0,i.mdx)("td",{parentName:"tr",align:null},"The phone number of the person making the request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Email","_","To"),(0,i.mdx)("td",{parentName:"tr",align:null},"The email address where you want to send the data file.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Email","_","Subject"),(0,i.mdx)("td",{parentName:"tr",align:null},"The text for the email subject line.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Report","_","Name"),(0,i.mdx)("td",{parentName:"tr",align:null},"The report name as you want it to appear in the email.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Date","_","Type"),(0,i.mdx)("td",{parentName:"tr",align:null},"The type of date. Supported values include: ",(0,i.mdx)("inlineCode",{parentName:"td"},"range"),": A custom date range. ",(0,i.mdx)("inlineCode",{parentName:"td"},"preset"),": A predefined date range")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Date","_","Granularity"),(0,i.mdx)("td",{parentName:"tr",align:null},"The granularity of the date value. Supported values include the following: none hour day week month quarter year")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Segment","_","Id"),(0,i.mdx)("td",{parentName:"tr",align:null},"The segment to use for the request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Metric","_","List"),(0,i.mdx)("td",{parentName:"tr",align:null},"The numerical values to include in the request ","(","visits, revenue, pageViews, etc.",")")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Breakdown","_","List"),(0,i.mdx)("td",{parentName:"tr",align:null},"The breakdowns to include in the request.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"FTP","_","Host"),(0,i.mdx)("td",{parentName:"tr",align:null},"The delivery location for the report. Supported values include: ",(0,i.mdx)("inlineCode",{parentName:"td"},"E-mail")," ","(","default",")",". Leave this field blank to have the report emailed. ",(0,i.mdx)("inlineCode",{parentName:"td"},"FTP Host Name"),": For report delivery by FTP. ",(0,i.mdx)("inlineCode",{parentName:"td"},"send\\_via\\_api"),": To programmatically use the REST interface to request the report.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"FTP","_","Port"),(0,i.mdx)("td",{parentName:"tr",align:null},"The FTP port number.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"FTP","_","Dir"),(0,i.mdx)("td",{parentName:"tr",align:null},"The FTP directory for file delivery.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"FTP","_","UserName"),(0,i.mdx)("td",{parentName:"tr",align:null},"User name for authentication to the specified FTP","_","Host.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"FTP","_","Password"),(0,i.mdx)("td",{parentName:"tr",align:null},"Password for authentication to the specified FTP","_","Host.")))),(0,i.mdx)("p",null,"Note that the name of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FTP_Host")," property is used for multiple purposes. Besides defining the FTP host server for delivery of the report by FTP, you can also use this property to bypass FTP delivery entirely and opt for email delivery ","(","the default",")"," or to retrieve the report programmatically using REST."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," You should only use SOAP for reports under 10MB."),(0,i.mdx)("p",null,"For this JJ. Esquire demo application, you will learn how to use the REST interface since it is the most robust of the three methods. Therefore, the following code, sets the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FTP_Host")," property to ",(0,i.mdx)("inlineCode",{parentName:"p"},"send_via_api")," and leaves the other FTP properties blank or default values."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataWarehouse.Request()")," method returns the report ID of the request. You will need this ID if you wish to cancel, check or retrieve the report using the API."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," The default variable name for the breakdown, Visit Number, is ",(0,i.mdx)("inlineCode",{parentName:"p"},"visit_num"),", and will be used in the code below. You can get a list of all the metrics and breakdowns for a report suite by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ReportSuite.GetAvailableMetrics")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"ReportSuite.GetAvailableElements")," methods respectively."),(0,i.mdx)("h2",{id:"code-samples"},"Code Samples"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$rsId = '<your report suite id>'; \n$contactName =  '<your contact name>';\n$contactPhone = '<your contact phone number>';\n$email = '<your email address>';\n\n/* Get Segments from DataWarehouse */\n$response = sendRequest('DataWarehouse.GetSegments', array('rsid'=>$rsId) );\nvar_dump($response);\n    \n$segmentId = $response[0][\"id\"];\n\n/* Define the Data Warehouse request variables */\n      $params = array(\n'rsid' => $rsId,        // Report Suite Id\n'Breakdown_List' => array('visit_num'),\n      'Contact_Name' => $contactName,\n      'Contact_Phone' => $contactPhone,\n'Date_From' => '12/15/10',\n'Date_Granularity' => 'day',\n'Date_Preset' => '',\n'Date_To' => '12/17/10',\n'Date_Type' => 'range',\n      'Email_Subject' => 'DW API test (subject) Did not use ftp host',\n'Email_To' => $email,\n'FTP_Dir' => '',\n'FTP_Host' => 'send_via_api',\n'FTP_Password' => '',\n'FTP_Port' => '22',\n'FTP_UserName' => '',\n'File_Name' => 'jjesquire_dw_report',\n'Metric_List' => array('revenue','event2'),\n'Report_Description' => 'DW API test (description)',\n        'Report_Name' => 'DW API test (name)',\n        'Segment_Id' => $segmentId\n    );\n/* Send the Data Warehouse request */\n$request_id = sendRequest('DataWarehouse.Request', $params );\nvar_dump($request_id);\n\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'/* Define the breakdown list */\nString[] breakdown_List = new String[1];\nbreakdown_List[0] = "visit_num";\n\n/* Define the metric list and set the metrics to offline revenue and online revenue.*/  \nString[] metric_List = new String[2];\n      metric_List[0] = "revenue";\n    /* event2 is set to Offline Revenue is our demo report suite */\n    metric_List[1] = "event2";\n\n/* Retrieve all the segment IDs in the report suite */\nDwsegment[] segment_id = \nport.dataWarehouseGetSegments("<your report suite id>");\n System.out.println("Segment id is: "+segment_id[0].getId());   \n\n       /* Send the Data Warehouse request */\nint reportID = port.dataWarehouseRequest(\n              breakdown_List, /* Breakdown List */\n              "<your contact name>", /* Contact Name */\n              "<your contact phone number>", /* Contact Phone */\n              "12/15/10", /* Date From */\n              "day", /* Date Granularity */\n              "", /* Date Preset */\n              "12/17/10", /* Date To */\n              "range", /* Date Type */\n              "DW API test (subject) Did not use ftp host", /* Email Subject */\n              "<your email address here>", /* Email To */\n              "", /* FTP Dir */\n              "send_via_api", /* FTP Host */\n              "", /* FTP Password */\n              22, /* FTP Port */\n              "", /* FTP Username */\n              "jjesquire_dw_report", /* File Name */\n              metric_List, /* Metric List */\n              "DW API test (description)", /* Report Desc */\n              "DW API test (name)", /* Report Name */\n              segment_id[0].getId(), /* Segment Id */\n               "<your report suite ID here>" /* Report Suite Id */\n    );\n\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"C","#"," Code")," "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'/* Define the breakdown list */\n       String[] breakdown_List = new String[1];\n      breakdown_List[0] = "visit_num";\n\n/* Define the metric list and set the metrics to offline revenue and online revenue.*/  \n      String[] metric_List = new String[2];\n      metric_List[0] = "revenue";\n      /* event1 is set to Offline Revenue is our demo report suite */\n     metric_List[1] = "event1";\n\n/* Retrieve all the segment IDs in the report suite */\n     dwsegment[] segment_id = client.DataWarehouseGetSegments("<your report suite id>");\n            // This will the the ID of the FirstTimeVisitors segment you created in the UI.\n            Console.WriteLine("Segment id is: " + segment_id[0].id);\n\n     /* Send the Data Warehouse request */\n    int reportID = client.DataWarehouseRequest(\n                   breakdown_List, /* Breakdown List */\n                   "<your contact name>", /* Contact Name */\n                   "<your contact phone number>", /* Contact Phone */\n                   "01/01/11", /* Date From */\n                   "day", /* Date Granularity */\n                   "", /* Date Preset */\n                   "01/18/11", /* Date To */\n                   "range", /* Date Type */\n                   "DW API test (subject) Did not use ftp host", /* Email Subject */\n                   "<your email address here>", /* Email To */\n                   "", /* FTP Dir */\n                   "send_via_api", /* FTP Host */\n                   "", /* Contact Phone */\n                   22, /* FTP Port */\n                   "", /* FTP Username */\n                   "jjesquire_dw_report", /* File Name */\n                   metric_List, /* Metric List */\n                   "DW API JJEsquire (description)", /* Report Desc */\n                   "DW API JJEsquire (name)", /* Report Name */\n                   segment_id[0].id, /* Segment Id */\n                   "<your report suite ID here>" jjesquire_dw_report                );\n\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,i.mdx)("a",{parentName:"p",href:"c_data_warehouse_API_tutorial.md"},"Data Warehouse API Tutorial")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-create-a-request-md-0ec3c174f9cee06ed2f1.js.map