_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("HALo"),r=a("z7pX"),o=a("vJKn"),i=a.n(o),s=a("rg98"),l=a("q1tI"),u=a.n(l),c=a("iae6"),d=a("ofer"),h=a("7oih"),p=a("YFqc"),f=a.n(p),g=a("R/WZ"),m=a("kKAo"),b=u.a.createElement,_=Object(g.a)({paper:{margin:16,padding:16,display:"inline-block",maxWidth:584,width:"100%",verticalAlign:"top"}}),v=function(e){var t=e.title,a=e.children,n=_();return b(m.a,{className:n.paper},t&&b(d.a,{variant:"h6"},t),a)},w=u.a.createElement,k=[{date:"2021/08/01",update:w("span",null,"Added some more ",w(f.a,{href:"/vaccinations"},"vaccine stats"),". Thanks"," ",w("a",{href:"https://github.com/aboodmufti",target:"_blank",rel:"noopener noreferrer"},"Abood Mufti")," "," for the pull request!")},{date:"2021/06/06",update:w("span",null,"Added a chart showing ",w(f.a,{href:"/vaccinations#Vaccination rate by age group"},"vaccination rates by age group"),". Thanks"," ",w("a",{href:"https://github.com/aboodmufti",target:"_blank",rel:"noopener noreferrer"},"Abood Mufti")," "," for the pull request!")},{date:"2021/05/28",update:"Added a plot showing the estimated reproduction number\u2014how many new people each confirmed case will infect (above 1 = bad, below 1 = good)."},{date:"2021/05/24",update:w("span",null,"Breaking down ",w(f.a,{href:"/vaccinations#Daily%20vaccines%20administered"},"daily vaccines")," by type of dose. Thanks"," ",w("a",{href:"https://github.com/aboodmufti",target:"_blank",rel:"noopener noreferrer"},"Abood Mufti")," "," for the pull request!")},{date:"2021/05/11",update:w("span",null,"Added a logo and favicon. Thanks to ",w("a",{href:"https://twitter.com/mikedrach",target:"_blank",rel:"noopener noreferrer"},"Mike Drach")," for designing it!")},{date:"2021/04/12",update:w("span",null,"Added new cases and the 7 day average for each ",w(f.a,{href:"/phus"},"PHU"),". Thanks"," ",w("a",{href:"https://github.com/albertjvm",target:"_blank",rel:"noopener noreferrer"},"Albert")," ","for the pull request!")},{date:"2021/04/12",update:w("span",null,"Optimized the query and added more plots to the ",w(f.a,{href:"/stats"},"stats page"),". Thanks"," ",w("a",{href:"https://github.com/TikiTDO",target:"_blank",rel:"noopener noreferrer"},"TikiTDO")," ","for the pull requests!")},{date:"2021/04/09",update:w("span",null,"Using adult population for vaccine percentages ",w(f.a,{href:"/vaccinations"},"here"),".")},{date:"2021/04/09",update:w("span",null,'Added "Variants of concern" cases to table and Total cases plot. This data seems to be lagging, so I cannot calculate the daily change.')},{date:"2021/03/28",update:w("span",null,"Moved ",w(f.a,{href:"/vaccinations"},"vaccination charts")," to a new page.")},{date:"2021/03/27",update:w("span",null,"Added ",w(f.a,{href:"/stats"},"a page")," to show case statistics.")},{date:"2021/03/14",update:"Added plot showing total people fully vaccinated."},{date:"2021/03/14",update:"Making things a little prettier."},{date:"2021/03/10",update:w("span",null,"Added ",w(f.a,{href:"/phus"},"a page")," to filter stats by public health unit (PHU).")},{date:"2021/03/07",update:w("span",null,"Added some features to the Summary table and added a 7 day moving average for daily vaccines. Thanks"," ",w("a",{href:"https://github.com/IsaacBerman",target:"_blank",rel:"noopener noreferrer"},"IsaacBerman")," ","for the pull requests!")},{date:"2021/02/20",update:"Added a plot showing daily vaccinations."},{date:"2021/02/07",update:w("span",null,"Some minor prettifications. Thanks"," ",w("a",{href:"https://github.com/TikiTDO",target:"_blank",rel:"noopener noreferrer"},"TikiTDO")," ","for the pull requests!")}],y=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],n=Object(l.useState)(!1),r=n[0],o=n[1];Object(l.useEffect)((function(){a(r?k:k.slice(0,3))}),[r]);return w(v,{title:"Recent updates"},w("ul",null,t.map((function(e,t){var a=e.date,n=e.update;return w("li",{key:t},w("strong",null,a)," ",n)}))),w("div",{className:"blue hover-dark-blue pointer",onClick:function(){return o(!r)}},r?"Show less":"Show all"))},T=a("XkeK"),C=u.a.createElement,D=function(e){return e?e.toLocaleString():""},O=function(e){return"".concat(e>=0?"+":"").concat(D(e))},I=[{label:"Date",key:"date_string"},{label:"Active cases",key:"active_cases",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_active_cases",formatValue:O,highlight:"negative"},{label:"Total cases",key:"Total Cases",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_cases",formatValue:O,highlight:"negative"},{label:"Deaths",key:"Deaths",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_deaths",formatValue:O,highlight:"negative"},{label:"Patients hospitalized",key:"Number of patients hospitalized with COVID-19",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_hospital",formatValue:O,highlight:!0},{label:"Patients in ICU",key:"Number of patients in ICU due to COVID-19",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_icu",formatValue:O,highlight:"negative"},{label:"Variants of concern cases",key:"vocsTotal",formatValue:D}],S=function(e){var t=e.dataSource,a=void 0===t?[]:t;return C(T.a,{title:"Status of cases in Ontario",data:a,columns:I})},V=a("Cmmz"),A=u.a.createElement,N=function(){return A(v,{title:"About"},A("ul",null,A("li",null,"Summaries and visualizations of Covid-19 data taken from"," ",A("a",{href:"https://data.ontario.ca/dataset?keywords_en=COVID-19",target:"_blank",rel:"noopener noreferrer"},"Ontario's data catalogue"),"."),A("li",null,"I've been maintaining this dashboard for over a year now! If you've gotten value from it, consider"," ",A("a",{href:"https://www.buymeacoffee.com/russellpollari"},"buying me a coffee"),"."),A("li",null,"Want to contribute and make it better? Fork it on ",A("a",{href:"https://github.com/Russell-Pollari/ontario-covid19"},"GitHub"),".")))},j=a("StWE"),R=["Total_Lineage_B.1.1.7_Alpha","Total_Lineage_B.1.351_Beta","Total_Lineage_P.1_Gamma","Total_Lineage_B.1.617.2_Delta"],E=function(){return new Promise((function(e){Object(j.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e["Reported Date"])-new Date(t["Reported Date"])}));var n=[0,0,0,0,0,0,0],r=[0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0],i=[0,0,0,0,0,0,0],s=0,l=0,u=0,c=0,d=0,h=0;a.map((function(e){e.new_cases=e["Total Cases"]-s,e.new_deaths=Math.max(e.Deaths-l,0),e.icu_no_ventilator=e["Number of patients in ICU due to COVID-19"]-e["Number of patients in ICU on a ventilator due to COVID-19"],e.date_string=new Date(e["Reported Date"]).toLocaleString("en-us",{month:"short",day:"numeric"}),e.active_cases=e["Total Cases"]-e.Resolved-e.Deaths,e.new_active_cases=e.active_cases-u,e.new_resolved=e.Resolved-c,e.new_hospital=e["Number of patients hospitalized with COVID-19"]-d,e.new_icu=e["Number of patients in ICU due to COVID-19"]-h,e.percent_positive=(e.new_cases/e["Total tests completed in the last day"]*100).toFixed(2),(e.percent_positive>100||isNaN(e.percent_positive))&&(e.percent_positive=0),i.shift(),i.push(Number(e.percent_positive||0)),e.tests_positive_rolling_average=(i.reduce((function(e,t){return t+e}),0)/7).toFixed(2),o.shift(),o.push(e["Total tests completed in the last day"]||0),e.tests_rolling_average=Math.round(o.reduce((function(e,t){return t+e}),0)/7),n.shift(),n.push(e.new_cases);var t=n.reduce((function(e,t){return t+e}),0);e.new_cases_rolling_average=Math.round(t/7),r.shift(),r.push(e.new_deaths);var a=r.reduce((function(e,t){return t+e}),0);return e.new_deaths_rolling_average=Math.round(a/7),h=e["Number of patients in ICU due to COVID-19"],d=e["Number of patients hospitalized with COVID-19"],s=e["Total Cases"],l=e.Deaths,c=e.Resolved,u=e.active_cases,e.vocsTotal=R.reduce((function(t,a){return t+e[a]}),0),e.totalNonVOC=e["Total Cases"]-e.vocsTotal,e})),e(a)}))}))},P=function(){return new Promise((function(e){Object(j.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=1ffdf824-2712-4f64-b7fc-f8b2509f9204&limit=10000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e.date_start)-new Date(t.date_start)}));var n=a.map((function(e){return e.date_string=new Date(e.date_start).toLocaleString("en-us",{month:"short",day:"numeric"}),e.error_bars=[e.Re-e.lower_CI,e.upper_CI-e.Re],e}));e(n)}))}))},q=a("mPjd"),M=u.a.createElement;t.default=function(){var e=Object(l.useState)(),t=e[0],a=e[1],o=Object(l.useState)([]),u=o[0],p=o[1],f=Object(l.useState)(!0),g=f[0],m=f[1],b=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P().then(a),e.next=3,E().then(p);case 3:m(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){b()}),[]);var _=[{title:"Summary",href:"#"},{title:q.d.title,href:"#".concat(q.d.title)}].concat(Object(r.a)(q.c.map((function(e){return{title:e.title,href:"#".concat(e.title)}}))));return M(h.a,{menuItems:_},M(d.a,{variant:"h4"},"Covid-19 in Ontario"),M(N,null),M(y,null),g?M("p",{className:"tc"},M("strong",null,"Hold tight.. just fetching the latest data"),M("div",null,M(c.a,null))):M(l.Fragment,null,M(S,{dataSource:u}),M(V.a,Object(n.a)({},q.d,{dataSource:t})),q.c.map((function(e,t){return M(V.a,Object(n.a)({key:t,dataSource:u,syncId:"syncCharts"},e))}))))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RXBc")}])}},[["vlRD",0,2,1,3,4,5,6]]]);