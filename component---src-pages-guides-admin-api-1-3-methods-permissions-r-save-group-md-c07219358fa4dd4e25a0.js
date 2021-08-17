(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[19785],{13762:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return s}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),m=n(99536),p=["components"],i={},l={_frontmatter:i},o=m.Z;function s(e){var t=e.components,n=(0,r.Z)(e,p);return(0,d.mdx)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"savegroup"},"SaveGroup"),(0,d.mdx)("p",null,"Saves group settings. If the group does not exist it creates a new group with the specified settings."),(0,d.mdx)("h2",{id:"permissionssavegroup-parameters"},"Permissions.SaveGroup parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"group","_","description")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"A group description.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"group","_","name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"A group name.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"group","_","type","*")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,d.mdx)("td",{parentName:"tr",align:null},"A group type. Supported types include: ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),": Custom group. ",(0,d.mdx)("inlineCode",{parentName:"td"},"1"),": Pre-defined group.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"groupid","*")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:string")),(0,d.mdx)("td",{parentName:"tr",align:null},"A permission group identifier.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"report","_","access","_","list")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../../data_types/r_report_categories.md#"},"tns:report","_","categories")),(0,d.mdx)("td",{parentName:"tr",align:null},"A list of permissions categories for the group's members. Supported categories include: ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),": No access. ",(0,d.mdx)("inlineCode",{parentName:"td"},"1"),": Some access. ",(0,d.mdx)("inlineCode",{parentName:"td"},"2"),": All access.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"report","_","id","_","list")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"array(xsd:int)")),(0,d.mdx)("td",{parentName:"tr",align:null},"List of report IDs if the reports are in a partial group.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"rsid","_","list")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"array(xsd:string)")),(0,d.mdx)("td",{parentName:"tr",align:null},"List of report suite IDs accessible by the group.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"user","_","list")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"array(xsd:string)")),(0,d.mdx)("td",{parentName:"tr",align:null},"List of user accounts to assign to this group.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"perm","_","info")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../../data_types/r_perm_info.md#"},"tns:perm","_","info")),(0,d.mdx)("td",{parentName:"tr",align:null},"The permissions data to associate with the permissions group.")))),(0,d.mdx)("p",null,"*"," When creating a new group, do not include ",(0,d.mdx)("inlineCode",{parentName:"p"},"group_type")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"groupid")," in the request. The Marketing Cloud creates these values as part of the group creation process. After creating a new group, use ",(0,d.mdx)("a",{parentName:"p",href:"r_getGroups.md#"},"GetGroups")," to see the new group's ",(0,d.mdx)("inlineCode",{parentName:"p"},"groupid")," value."),(0,d.mdx)("h2",{id:"permissionssavegroup-response"},"Permissions.SaveGroup response"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"xsd:int")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," if the add user operation is successful. Otherwise, returns ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),".")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,d.mdx)("a",{parentName:"p",href:"../../methods/permissions/c_api_admin_methods_permissions.md"},"Permissions")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-admin-api-1-3-methods-permissions-r-save-group-md-c07219358fa4dd4e25a0.js.map