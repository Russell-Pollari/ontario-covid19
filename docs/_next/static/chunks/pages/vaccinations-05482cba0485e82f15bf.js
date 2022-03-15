(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{8119:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var n=a(4942),r=a(2982),s=a(5861),i=a(7757),o=a.n(i),c=a(7294),u=a(5477),l=a(2318),d=a(6523),_=a(3167),f=a(6201),h=a(5893),p=function(e){var t=e.data,a=void 0===t?[]:t;if(!a.length)return null;var n=14010998,r=a[a.length-1],s=r.total_individuals_fully_vaccinated,i=r.total_individuals_at_least_one,o=r.total_individuals_3doses;return(0,h.jsxs)(f.Z,{title:"Vaccinations at a glance",children:[(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsxs)("strong",{children:[Math.round(i/n*100*100)/100,"%"]})," ","of the ",(0,h.jsx)("em",{children:"eligible"})," population of Ontario has had at least one shot."]}),(0,h.jsxs)("li",{children:[(0,h.jsxs)("strong",{children:[Math.round(s/n*100*100)/100,"%"]})," ","of the ",(0,h.jsx)("em",{children:"eligible"})," population of Ontario has had at least two shots."]}),(0,h.jsxs)("li",{children:[(0,h.jsxs)("strong",{children:[Math.round(o/n*100*100)/100,"%"]})," ","of the ",(0,h.jsx)("em",{children:"eligible"})," population of Ontario has had three shots."]})]}),(0,h.jsxs)("div",{className:"mt16 f12",children:[(0,h.jsx)("em",{children:"Eligible population"}),": Everyone 5 and older based on estimates from Statistics Canada on July 1st 2020."]})]})},v=a(8102),m=function(e){return e?Number(e).toLocaleString():null},y=function(e){return e?"".concat(e>=0?"+":"").concat(m(e)):null},g=[{label:"Date",key:"date_string"},{label:"Total doses administered",key:"total_doses_administered",formatValue:m},{label:"Daily vaccines",key:"previous_day_total_doses_administered",formatValue:y,highlight:"positive"},{label:"7 day average",key:"new_vaccines_rolling_average",formatValue:y,highlight:"positive"},{label:"Total people with 2 doses",key:"total_individuals_fully_vaccinated",formatValue:m,headerColSpan:"2"},{label:"",key:"previous_day_fully_vaccinated",formatValue:y,highlight:"positive"},{label:"Total people with 3 doses",key:"total_individuals_3doses",formatValue:m}],b=function(e){var t=e.dataSource,a=void 0===t?[]:t;return(0,h.jsx)(v.Z,{title:"Status of Vaccinations in Ontario",data:a,columns:g})},j=a(3349),w=function(e){return"number"===typeof e?e:Number((e||"0").replace(/,/g,""))},x=function(){return new Promise((function(e){(0,j.Z)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e.report_date)-new Date(t.report_date)}));for(var n=[0,0,0,0,0,0,0],r=[],s=1;s<a.length;s++){var i=a[s],o=new Date(i.report_date).getTime(),c=a[s-1];r.push(c);var u=new Date(c.report_date);for(u.setDate(u.getDate()+1);u.getTime()<o;){var l=Object.assign({},c,{report_date:u.toISOString().replace(/\.\d+Z/,"")});r.push(l),u.setDate(u.getDate()+1)}}r.push(a[a.length-1]),r.map((function(e){var t=e.report_date,a=e.total_doses_administered,r=e.previous_day_total_doses_administered,s=e.total_individuals_fully_vaccinated;e.date_string=new Date(t).toLocaleString("en-us",{month:"short",day:"numeric"}),e.total_doses_administered=w(a),e.previous_day_total_doses_administered=w(r),e.total_individuals_fully_vaccinated=w(s),e.previous_day_third_doses=r-w(e.previous_day_at_least_one)-w(e.previous_day_fully_vaccinated),n.shift(),n.push(e.previous_day_total_doses_administered);var i=n.reduce((function(e,t){return t+e}),0);return e.new_vaccines_rolling_average=Math.round(i/7),e})),e(r)}))}))},O=function(e){return"number"===typeof e?e:Number((e||"0").replace(/,/g,""))},D=function(){return new Promise((function(e){(0,j.Z)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=775ca815-5028-4e9b-9dd4-6975ff1be021&limit=13&sort=_id desc",(function(t){var a=t.result,n=a.records.filter((function(e){return"Undisclosed_or_missing"!=e.Agegroup}));a.records.sort((function(e,t){return e._id-t._id})),a.records.map((function(e){var t=e.Agegroup,a=e.Percent_at_least_one_dose,n=e.Percent_fully_vaccinated;return e.Agegroup=function(e){switch(e){case"12-17yrs":return"12-17";case"18-29yrs":return"18-29";case"30-39yrs":return"30s";case"40-49yrs":return"40s";case"50-59yrs":return"50s";case"60-69yrs":return"60s";case"70-79yrs":return"70s";case"Adults_18plus":return"18+";case"Ontario_12plus":return"12+";case"Ontario_5plus":return"5+";case"05-11yrs":return"5-11yrs";default:return e}}(t),e.Percent_at_least_one_dose=100*O(a),e.Percent_fully_vaccinated=100*O(n),e.percent_partially_vaccinated=e.Percent_at_least_one_dose-e.Percent_fully_vaccinated,e.percent_not_vaccinated=100-e.Percent_at_least_one_dose,e})),e(n)}))}))},P=function(){return new Promise((function(e){(0,j.Z)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=eed63cf2-83dd-4598-b337-b288c0a89a16&limit=1000000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e.Date)-new Date(t.Date)}));var n=a.map((function(e){var t=e.Date,a=e.covid19_cases_unvac,n=e.covid19_cases_partial_vac,r=e.covid19_cases_full_vac,s=e.covid19_cases_vac_unknown;return e.date_string=new Date(t).toLocaleString("en-us",{month:"short",day:"numeric"}),e.cases_unvac=O(a),e.cases_partial_vac=O(n),e.cases_full_vac=O(r),e.cases_vac_unknown=O(s),e}));e(n)}))}))},Z=function(){return new Promise((function(e){(0,j.Z)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=274b819c-5d69-4539-a4db-f2950794138c&limit=1000000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));var n=a.map((function(e){var t=e.date,a=e.icu_unvac,n=e.icu_partial_vac,r=e.icu_full_vac,s=e.hospitalnonicu_partial_vac,i=e.hospitalnonicu_full_vac,o=e.hospitalnonicu_unvac;return{date_string:new Date(t).toLocaleString("en-us",{month:"short",day:"numeric"}),icu_unvac:a,icu_full_vac:r,icu_partial_vac:n,hospital_partial_vac:O(n)+O(s),hospital_full_vac:O(r)+O(i),hospital_unvac:O(a)+O(o)}}));e(n)}))}))},S=a(8267),k=a(1323);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var N=function(){var e=(0,c.useState)([]),t=e[0],a=e[1],i=(0,c.useState)([]),f=i[0],v=i[1],m=(0,c.useState)([]),y=m[0],g=m[1],j=(0,c.useState)([]),w=j[0],O=j[1],N=(0,c.useState)(!0),E=N[0],T=N[1],B=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(v);case 2:return e.next=4,x().then(a);case 4:return e.next=6,P().then(g);case 6:return e.next=8,Z().then(O);case 8:T(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){B()}),[]);var A=[{title:"Summary",href:"#"}].concat((0,r.Z)(S.B.map((function(e){var t=e.title;return{title:t,href:"#".concat(t)}})))),C=function(e){switch(e){case k.Z.vaccinatedByAge:return f;case k.Z.totalDoses:case k.Z.totalVaccinated:case k.Z.dailyDoses:return t;case k.Z.casesByVax:return y;case k.Z.hospitalByVax:case k.Z.icuByVax:return w;default:return[]}};return(0,h.jsx)(d.Z,{menuItems:A,children:(0,h.jsxs)("div",{className:"ph16",children:[(0,h.jsx)(l.Z,{variant:"h4",children:"Covid-19 Vaccinations in Ontario"}),E?(0,h.jsxs)("p",{className:"tc",children:[(0,h.jsx)("strong",{children:"Hold tight.. just fetching the latest data"}),(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{})})]}):(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(p,{data:t}),(0,h.jsx)(b,{dataSource:t}),S.B.map((function(e,t){return(0,h.jsx)(_.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({dataSource:C(e.id)},e),t)}))]})]})})}},2784:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vaccinations",function(){return a(8119)}])}},function(e){e.O(0,[774,178,753,755,747,888,179],(function(){return t=2784,e(e.s=t);var t}));var t=e.O();_N_E=t}]);