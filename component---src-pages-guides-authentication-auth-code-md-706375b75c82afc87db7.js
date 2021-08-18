(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[16102],{64645:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return s}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),i=n(99536),o=["components"],m={},p={_frontmatter:m},l=i.Z;function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,d.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"obtain-an-authorization-code"},"Obtain an Authorization Code"),(0,d.mdx)("p",null,"The authorization code is granted after the user has provided his or her credentials and has authorized the scope requested by your application."),(0,d.mdx)("p",null,"An authorization code is obtained by making a request to the authorization URL:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"https://marketing.adobe.com/authorize\n")),(0,d.mdx)("p",null,"Provide the following parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Get Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The client ID is defined when you ",(0,d.mdx)("a",{parentName:"td",href:"auth_register_app.md#"},"register your app"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"response_type")),(0,d.mdx)("td",{parentName:"tr",align:null},'This should be set to "code" for the Authorization Code Grant. The Implicit Grant Type is also supported by changing ',(0,d.mdx)("inlineCode",{parentName:"td"},"response_type=code")," to ",(0,d.mdx)("inlineCode",{parentName:"td"},"response_type=token"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"state")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","required",")"," A session key string similar to a CSRF Token used to validate the user's session. For details, see ",(0,d.mdx)("a",{parentName:"td",href:"http://tools.ietf.org/html/rfc6749#section-10.12"},"http://tools.ietf.org/html/rfc6749","#","section-10.12"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"redirect_uri")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","optional",")"," The endpoint to redirect the user after the authorization step. If a ",(0,d.mdx)("inlineCode",{parentName:"td"},"redirect_uri")," is provided, the same ",(0,d.mdx)("inlineCode",{parentName:"td"},"redirect_uri")," must also be included in the token request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"scope")),(0,d.mdx)("td",{parentName:"tr",align:null},"(","optional",")"," The requested scope. See ",(0,d.mdx)("a",{parentName:"td",href:"auth_scope.md#"},"Authentication Scope Reference"),".")))),(0,d.mdx)("p",null,"After this request is sent and the user authorizes the client, the user is redirected back to the supplied ",(0,d.mdx)("inlineCode",{parentName:"p"},"redirect_uri")," endpoint, with an authorization code in the query string ","(",(0,d.mdx)("inlineCode",{parentName:"p"},"https://client.example.com/cb?code=xxx"),")","."),(0,d.mdx)("p",null,"You can now ",(0,d.mdx)("a",{parentName:"p",href:"auth_exchange.md#"},"exchange the code for a token"),". If you specified an implicit grant type, the token is returned instead of the authorization code."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-auth-code-md-706375b75c82afc87db7.js.map