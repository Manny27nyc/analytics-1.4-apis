(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[52453],{60677:function(n,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return p},default:function(){return l}});var r=t(22122),a=t(19756),o=(t(15007),t(64983)),s=t(99536),i=["components"],p={},d={_frontmatter:p},u=s.Z;function l(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.mdx)(u,(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-3-send-page-specific-data-to-analytics"},"Step 3: Send Page-Specific Data to Analytics"),(0,o.mdx)("p",null,"Now that the page-specific analytics data for the JJ. Esquire demo application has been formatted within XML tags, you are ready to send the data to Analytics."),(0,o.mdx)("p",null,"The code below first formats the HTTP POST headers and appends the XML formatted Analytics data. Next, it opens a URL connection to the host for Analytics and sends the HTTP POST request."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"PHP Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'/* Send the analytics data to SiteCatlyst */ \nsendPOSTRequest($host, $xmlData); \n\n/** \n* Sends hit-level data to Analytics. \n* @param $host - the host name for Analytics data collection \n* @param $xml - an associative array containing the properties of the hit-level data beacon \n*/ \nfunction sendPOSTRequest($host, $xml) \n{ \n/* Create POST, Host and Content-Length headers */ \n$head = "POST /b/ss//6 HTTP/1.0\\n"; \n$head .= "Host: $host\\n"; \n$head .= "Content-Length: " . (string)strlen($xml) . "\\n\\n"; \n/* combine the head and XML */ \n$request = $head . $xml; \n$fp = fsockopen($host, 80, $errno, $errstr, 30); \necho "Opening connection to $host\\n"; \nif ($fp) { \n/* send data */ \nfwrite($fp, $request); \necho "Sending data...\\n$request\\n"; \n/* get response */ \n$response = ""; \nwhile (!feof($fp)) { \n$response .= fgets($fp, 1028); \n} \nfclose($fp); \n/* display results */ \necho "RESULTS:\\n"; \nprint_r($response); \necho "\\n"; \n/* check for errors */ \nif (preg_match("/status\\>FAILURE\\<\\/status/im", $response)) { \necho "\nFailure\n\\n"; \necho "\nNote the reason tag in the response, fix and try again.\\n"; \n} else { \n\n/* Success */ \nreturn true; \n} \n} else { \necho "\n\nCouldn\'t open port to Analytics servers\n\\n"; \nif (!$rsid) { \necho "\nNo report suite specified\n\\n"; \n} else { \necho "\n$errstr ($errno)\n\n\\n"; \n} \n} \nreturn false; \n} \n//end: sendPOSTRequest\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java Code")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'URL url = null; \nURLConnection urlConn = null; \nDataOutputStream printout = null; \nBufferedReader input = null; \nString u = "http:///b/ss//6 HTTP/1.0"; \nString tmp = null; \n\nurl = new URL( u ); \nurlConn = url.openConnection(); \nurlConn.setDoInput( true ); \nurlConn.setDoOutput( true ); \nurlConn.setUseCaches( false ); \nurlConn.setRequestProperty( "Content-Type", "application/x-www-form-urlencoded" ); \n\nprintout = new DataOutputStream(urlConn.getOutputStream()); \nprintout.writeBytes( di.toString() ); \nprintout.flush(); \nprintout.close(); \n\ninput = new BufferedReader( new InputStreamReader(urlConn.getInputStream( ) ) ); \n\nSystem.out.println( di ); \n\nSystem.out.println("Response from server is: "); \nwhile( null != ( ( tmp = input.readLine() ) ) ) \n{ \nSystem.out.println(tmp); \n} \nprintout.close(); \ninput.close();\n')),(0,o.mdx)("p",null,"When the Data Insertion API receives HTTP POST data, it performs basic XML tag validation. If it finds an error, the API returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Failure")," response. If it does not find any errors, the API returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Success")," response and the data is queued for processing."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note:")," View ",(0,o.mdx)("a",{parentName:"p",href:"../data-insertion-api/reference/r_post_response_codes.md"},"HTTP POST response codes")," for details about all of the response codes."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,o.mdx)("a",{parentName:"p",href:"c_Data_Insertion_Overview.md"},"Data Insertion API Tutorial")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-c-send-page-specific-data-to-analytics-md-958a19e89e8e72fc965a.js.map