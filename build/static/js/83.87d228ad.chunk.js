(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[83],{1191:function(e,a,t){"use strict";t.r(a),t.d(a,"Chartist",(function(){return h}));var r=t(12),n=t(13),s=t(15),c=t(14),i=t(16),l=t(0),d=t.n(l),o=t(209),m=t.n(o),h=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).simpleLineData={labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},t.simpleLineOptions={fullWidth:!0,chartPadding:{right:40}},t.times=function(e){return Array.apply(null,new Array(e))},t.lineScattererData=t.times(52).map(Math.random).reduce((function(e,a,t){e.labels.push(t+1);for(var r=0;r<e.series.length;r++)e.series[r].push(100*Math.random());return e}),{labels:[],series:t.times(4).map((function(){return[]}))}),t.lineScattererOptions={showLine:!1,axisX:{labelInterpolationFnc:function(e,a){return a%13===0?"W"+e:null}}},t.lineScattererResponsiveOptions=[["screen and (min-width: 640px)",{axisX:{labelInterpolationFnc:function(e,a){return a%4===0?"W"+e:null}}}]],t.stackedBarChartData={labels:["Q1","Q2","Q3","Q4"],series:[["800000","1200000","1400000","1300000"],["200000","400000","500000","300000"],["100000","200000","400000","600000"],["400000","600000","200000","0000"]]},t.stackedBarChartOptions={stackBars:!0,axisY:{labelInterpolationFnc:function(e){return e/1e3+"k"}}},t.hoizontalBarChartData={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4],[2,6,7,1,3,5,9],[2,6,7,1,3,5,19]]},t.hoizontalBarChartOptions={seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:20}},t.pieData={series:[5,3,4]},t.pieOptions={labelInterpolationFnc:function(e){return Math.round(e/t.pieData.series.reduce((function(e,a){return e+a}))*100)+"%"}},t.doughnutLabels=["safari","chrome","explorer","firefox"],t.doughnutData={series:[20,40,10,30]},t.doughnutOptions={donut:!0,donutWidth:60,donutSolid:!0,startAngle:270,showLabel:!0,labelInterpolationFnc:function(e,a){var r=Math.round(e/t.doughnutData.series.reduce((function(e,a){return e+a}))*100)+"%";return t.doughnutLabels[a]+" "+r}},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Chartist"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Charts")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Chartist")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Simple Line Chart"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.simpleLineData,type:"Line",options:this.simpleLineOptions})))),d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Line Scatterer"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.lineScattererData,type:"Line",options:this.lineScattererOptions,"responsive-options":this.lineScattererResponsiveOptions}))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Stacked Bar Chart"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.stackedBarChartData,type:"Bar",options:this.stackedBarChartOptions})))),d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Horizontal Bar Chart"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.hoizontalBarChartData,type:"Bar",options:this.hoizontalBarChartOptions}))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Pie Chart"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.pieData,type:"Pie",options:this.pieOptions})))),d.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Doughnut Chart"),d.a.createElement(m.a,{className:"ct-perfect-fourth",data:this.doughnutData,type:"Pie",options:this.doughnutOptions}))))))}}]),a}(l.Component);a.default=h}}]);
//# sourceMappingURL=83.87d228ad.chunk.js.map