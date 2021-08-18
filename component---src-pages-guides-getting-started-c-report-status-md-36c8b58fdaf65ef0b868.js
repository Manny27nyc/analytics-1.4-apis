(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[13752],{48724:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return h}});var s=n(22122),r=n(19756),a=(n(15007),n(64983)),o=n(99536),u=["components"],p={},c={_frontmatter:p},i=o.Z;function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.mdx)(i,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"step-2-check-the-report-status"},"Step 2: Check the Report Status"),(0,a.mdx)("p",null,"All of the report queuing methods place the defined report into a queue for processing."),(0,a.mdx)("p",null,"You can check the status of the report in the processing queue by passing the report ID to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"report.GetStatus()")," method. The method will return a structure containing status information for the specified report ID."),(0,a.mdx)("p",null,"The status will be “done” when the report is ready to be retrieved."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'/**\n*  1.Repeatedly check on request in the queue (using Report.GetStatus)\n*      a) check frequency based on $max_checks and $check_wait_seconds \n*  2.Returns the report when ready\n*/  \n$attempts = 0;\n$nextSleepSeconds = 0;\n$max_checks=20;\n$check_wait_seconds=2;\n$reportDone = false;\nwhile( $nextSleepSeconds = nextSleep( $attempts, $max_checks, $check_wait_seconds) )\n{\n    if($debug) echo("sleeping for... $nextSleepSeconds seconds.\\n");\n    sleep($nextSleepSeconds);        \n\n    if($debug) echo("Checking on queue: $queue (" . date("H:i:s") . ")\\n");\n\n    /* Check the status */\n    $status = rp_getStatus($queue);\n    \n    /* Check if the report is ready */\n    if($debug) echo("Request Status: ". $status ."\\n");\n    if($status == $REPORT_STATUS_DONE)\n    {\n /* Report is ready */\n     $reportDone = true;\n     break;          \n  \n    } else if( strstr($status, \'fail\') || strstr($status, \'error\') ){\n       /* Report failed, exit out */     \nthrow new Exception("rp_queueAndGetReport(): " . $status );//. " - ". $response[\'error_msg\'], 0);                    \n    } else {\n /* Report not ready yet */\n     if($debug) echo $status . "\\n";\n    }\n    $attempts++;\n}\n\n/**\n *  Does a token free status check on a single report\n *  @returns string status\n */                   \nfunction rp_getStatus($reportID){\n    $response = sendRequest(\'Report.GetStatus\',array(\'reportID\' => $reportID));\n    return $response[\'status\'];\n}\n\n/**\n * Determines next sleep time for report queue checking.\n * Uses a backing off algorithm so that long requests don\'t have to check as often.\n\n *\n * @param    $attempts     int    The number of checks so far\n * @param    $max_checks   int User specified maximum number of checks\n *\n * @return    FALSE to stop checking OR the number of seconds for the next sleep\n */\nfunction nextSleep( $attempts, $max_checks, $check_wait_seconds ){\n    global $max_report_checks;\n    if( $max_checks <= 0){\n     if($attempts >= $max_report_checks)\n         return -1;  \n     if($attempts <= 4 ){\n         return 3;\n     }else{\n         return min( ($attempts - 4) * 3, 30);           \n     }\n    }else{\n     if($attempts < $max_checks)\n         return $check_wait_seconds;\n    }\n    return FALSE;\n}   \n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'Thread.sleep(2000);\n/* Get the report status (using Report.GetStatus) */\nReport_status status = port.reportGetStatus(reportID);\nSystem.out.println("Got after reportGetStatus!"+status);\n\n/* counters for checking status */\nint checkCount = 0;\nint maxChecks = 20;\n\n/* Repeatedly check on request in the queue (using Report.GetStatus) */\nwhile (!status.getStatus().equals("done"))\n{\nSystem.out.println("status: " + status.getStatus());\nif(! status.getStatus().equals("done") && ! \nstatus.getStatus().equals("ready"))\nthrow new Exception("Unexpected status: " + status.getStatus() +    ", " + status.getError_msg());\n\ncheckCount++;\n    if(checkCount >= maxChecks)\n    throw new Exception("Report timeout: report hasn\'t returned after " + maxChecks + "checks");\n\nstatus = port.reportGetStatus(reportID);\n    if(!status.getStatus().equals("done"))\n    Thread.sleep(2000);\n}\n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"C","#"," Code")," "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'Thread.Sleep(5000);\n\n/* Get the report status (using Report.GetStatus) */\n       report_status status = client.ReportGetStatus(response.reportID);\n\n/* counters for checking status */\nint checkCount = 0;\nint maxChecks = 20;\n\n/* Repeatedly check on request in the queue (using Report.GetStatus) */\nwhile (status.status != "done")\n{\n    Console.WriteLine("status: " + status.status);\n    if(status.status != "done" && status.status != "ready")\nthrow new Exception("Unexpected status: " + status.status +     ", " + status.error_msg);\n\n      checkCount++;\n    if(checkCount >= maxChecks)\n    throw new Exception("Report timeout: report hasn\'t returned after " + maxChecks + "checks");\n\n      status = client.ReportGetStatus(reportID);\n    if(status.status != "done")\n    Thread.Sleep(2000);\n}\n\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,a.mdx)("a",{parentName:"p",href:"c_Reporting_API_Tutorial.md"},"Reporting API Tutorial")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-report-status-md-36c8b58fdaf65ef0b868.js.map