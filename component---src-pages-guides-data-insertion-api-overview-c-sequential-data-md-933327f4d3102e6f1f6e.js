(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[58994],{39666:function(e,t,i){"use strict";i.r(t),i.d(t,{_frontmatter:function(){return m},default:function(){return h}});var s=i(22122),n=i(19756),a=(i(15007),i(64983)),o=i(99536),r=["components"],m={},u={_frontmatter:m},d=o.Z;function h(e){var t=e.components,i=(0,n.Z)(e,r);return(0,a.mdx)(d,(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"sequential-data-requirements"},"Sequential Data Requirements"),(0,a.mdx)("p",null,"To ensure accurate visit number values, visit counts, and event attribution on persisting variables, applications must send visitor data in sequential order for every visitor. Data for one visitor may be submitted before or between data for another visitor, but each visitor's data must be received by Adobe servers sequentially, based on the time-stamp of the hit."),(0,a.mdx)("p",null,"In some situations, it is possible to see two hits with the same time-stamp. For example, two hits might have the same time-stamp if an auto-playing video fires during the same second that the page loads. If two hits for one visitor have the same time-stamp, and order matters for those hits ","(","one contains variables that should persist to the next one",")",", you can change the time-stamp of the second hit by one second so we sort the two correctly."),(0,a.mdx)("p",null,"The Analytics data processing engine closes a visit after 30 minutes of inactivity. For time-stamped data, if the difference between time-stamps is greater than 30 minutes, the visit number is incremented and a new visit is counted."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-data-insertion-api-overview-c-sequential-data-md-933327f4d3102e6f1f6e.js.map