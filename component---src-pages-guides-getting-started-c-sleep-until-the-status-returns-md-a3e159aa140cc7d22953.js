(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[72396],{33957:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return h}});var s=n(22122),r=n(19756),a=(n(15007),n(64983)),o=n(99536),u=["components"],c={},p={_frontmatter:c},m=o.Z;function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.mdx)(m,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"step-3-sleep-until-the-status-returns"},"Step 3: Sleep Until the Status Returns"),(0,a.mdx)("p",null,"There may be a long delay before you can get the report data or call the method to retrieve it. You need to wait to pick up the report until the request returns a status of “completed”."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'/**\n*  1.Repeatedly check on request in the queue\n*      a) check frequency based on $max_checks and $check_wait_seconds parameters    \n*  2.Returns the report when ready\n*/  \n$attempts = 0;\n$nextSleepSeconds = 0;\n$max_checks=10;\n$check_wait_seconds=10;\n$max_report_checks = 500; /* Ultimate system maximum checks on the report queue */\n$reportDone = false;\nwhile( $nextSleepSeconds = nextSleep( $attempts, $max_checks, $check_wait_seconds) )\n{\n    if($debug) echo("sleeping for... $nextSleepSeconds seconds.\\n");\n    sleep($nextSleepSeconds);        \n\n    /* Check on the DW request */\n    $result = sendRequest(\'DataWarehouse.CheckRequest\', \narray(\'Request_Id\'=>$request_id) );\n    var_dump($result);    \n    echo "check on DW request = " . $result[\'message\'];\n    $status = $result[\'message\'];\n    if($debug) echo("Request Status: ". $status ."\\n");\n\n    /* Check if report is ready */\n    if($status == $REPORT_STATUS_COMPLETED)\n    {\n /* Report Completed */\n     $reportDone = true;\n     break;          \n  \n    } else if( strstr($status, \'fail\') || strstr($status, \'error\') ){\n /* Report failed, exit out */\n     throw new Exception("dataWarehouse checkRequest(): " . $status );//. " - ". $response[\'error_msg\'], 0);                 \n    \n    } else {\n /* Report is not ready yet */\n     if($debug) echo $status . "\\n";\n    }\n    $attempts++;\n}\n\n/* Check if the report completed or timed-out */\nif($reportDone)\n{\n    /* Report has Completed */\n          echo "DW report is done ";    \n\n} else { \n    /* Report is not ready yet */   \n          echo("DataWarehouse: Report response timeout.");\n          exit(); \n}\n\n/**\n* Determines next sleep time for report queue checking.\n*      Uses a backing off algorithm so that long requests don\'t have to check as often.\n*\n* @param    $attempts     int    The number of checks so far\n* @param    $max_checks    int User specified maximum number of checks\n*\n* @return    FALSE to stop checking OR the number of seconds for the next sleep\n*/\nfunction nextSleep( $attempts, $max_checks, $check_wait_seconds ){\n    global $max_report_checks;\n    if( $max_checks <= 0){\n     if($attempts >= $max_report_checks)\n         return -1;\n         \n     if($attempts <= 4 ){\n         return 3;\n     }else{\n         return min( ($attempts - 4) * 3, 30);           \n     } \n    }else{\n     if($attempts < $max_checks)\n         return $check_wait_seconds;\n    }\n    return FALSE;\n}       \n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'/* Sleep till the dataWarehouseCheckRequest method returns Waiting to Start or In Progress messages */\nwhile(request.getMessage().equalsIgnoreCase("Waiting to Start") || request.getMessage().equalsIgnoreCase("In Progress")) \n            {\n                Thread.sleep(10000);\n                System.out.println("Waiting for completed status..."+request.getMessage());\n\n/* Store the status of the Data Warehouse request */\n                request = port.dataWarehouseCheckRequest(reportID);\n            }\n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"C","#"," Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'/* Sleep till the dataWarehouseCheckRequest method returns Waiting to Start or In Progress messages */\nwhile (request.message.Equals("Waiting to Start") || request.message.Equals("In Progress"))\n            {\n                Thread.Sleep(10000);\n                Console.WriteLine("Waiting for completed status..." + request.message);\n\n/* Store the status of the Data Warehouse request */\n                request = client.DataWarehouseCheckRequest(reportID);\n            }\n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,a.mdx)("a",{parentName:"p",href:"c_data_warehouse_API_tutorial.md"},"Data Warehouse API Tutorial")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-sleep-until-the-status-returns-md-a3e159aa140cc7d22953.js.map