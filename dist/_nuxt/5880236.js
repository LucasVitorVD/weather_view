(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{383:function(t,o,e){var content=e(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(114).default)("3c77b1a8",content,!0,{sourceMap:!1})},384:function(t,o,e){var content=e(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(114).default)("191e1598",content,!0,{sourceMap:!1})},385:function(t,o,e){"use strict";e(383)},386:function(t,o,e){var n=e(113)((function(i){return i[1]}));n.push([t.i,".section-1{position:relative;width:70%}.section-1 .img{background-size:cover;height:100%;width:100%}.section-1 .status{align-items:center;background-color:#1a1a1a;border-radius:5px;bottom:100px;color:#fdfdfd;display:flex;flex-wrap:wrap;gap:1rem;height:auto;justify-content:space-around;left:100px;padding:.5rem;position:absolute;width:60%}.section-1 .status #temp{font-size:2.5rem}.section-1 .status .location-infos{display:flex;flex-direction:column}.section-1 .status .location-infos .location-details{font-size:.8rem}.section-1 .status .location-infos .location-details p{margin:0;padding:0}.section-1 .status .location-infos #location-name{font-size:2rem;margin-bottom:0;padding-bottom:0}.section-1 .status .location-infos #weather-icon{width:40px}.section-1 .status .location-infos #description{text-transform:capitalize}",""]),n.locals={},t.exports=n},387:function(t,o,e){"use strict";e(384)},388:function(t,o,e){var n=e(113)((function(i){return i[1]}));n.push([t.i,".section-2{backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background:hsla(0,0%,5%,.15);border:1px solid hsla(0,5%,53%,.18);display:flex;flex-direction:column;gap:2rem;height:100%;padding-left:1.3rem;width:30%}.section-2 .form{width:100%}.section-2 .form .field-component{display:flex;justify-content:space-between}.section-2 .form .input-area{display:flex;flex:1 auto auto;flex-direction:column;gap:1rem}.section-2 .form #location-input{background-color:transparent;border:none;border-bottom:1px solid #ccc;color:#fdfdfd;font-size:1rem;font-weight:700;margin-top:2rem;outline:none;padding:.5rem}.section-2 .form #location-input::-moz-placeholder{color:#ccc}.section-2 .form #location-input::placeholder{color:#ccc}.section-2 .form .search-button{background-color:orange;border:none;border-radius:0;cursor:pointer;height:3.75rem;padding:.5rem;transition:.2s;width:3.75rem}.section-2 .form .search-button:hover{opacity:.8}.section-2 .suggested-location ul{color:#ccc;display:flex;flex-direction:column;height:250px;justify-content:space-around;list-style:none}.section-2 .suggested-location ul li{cursor:pointer;padding:.5rem;transition:.2s}.section-2 .suggested-location ul li:hover{border-bottom:1px solid #ccc;color:#fdfdfd}.section-2 .error-label{color:red}",""]),n.locals={},t.exports=n},389:function(t,o,e){var content=e(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(114).default)("6d15fc16",content,!0,{sourceMap:!1})},390:function(t,o,e){"use strict";e.r(o);var n=e(69),c=e(0),r={name:"Section-1",components:{BIcon:n.a,BIconWind:c.bA,BIconDroplet:c.rk},computed:{weatherInfos:function(){return this.$store.state.weatherData.weatherInfos},locationImage:function(){return this.$store.state.weatherData.locationImage}}},l=(e(385),e(75)),component=Object(l.a)(r,(function(){var t,o=this,e=o._self._c;return e("section",{staticClass:"section-1"},[e("b-img",{staticClass:"img",attrs:{src:null!==(t=o.locationImage.regularImg)&&void 0!==t?t:o.locationImage.fullImg,alt:o.locationImage.alt}}),o._v(" "),e("div",{staticClass:"status"},[e("h1",{attrs:{id:"temp"}},[o._v(o._s(o.weatherInfos.temp)+" Cº")]),o._v(" "),e("div",{staticClass:"location-infos"},[e("h2",{attrs:{id:"location-name"}},[o._v(o._s(o.weatherInfos.locationName))]),o._v(" "),e("div",{staticClass:"location-details"},[e("p",[e("span",{staticClass:"weather-status"},[e("b-icon-droplet"),o._v("\n            "+o._s(o.weatherInfos.locationHumidity)+"%")],1),o._v("\n          |\n          "),e("span",{attrs:{id:"wind-status"}},[e("b-icon-wind"),o._v("\n            "+o._s(o.weatherInfos.locationWindSpeed)+"km/h")],1)])])]),o._v(" "),e("div",{staticClass:"location-infos temp-details"},[e("b-img",{attrs:{src:o.weatherInfos.weatherStatusIcon,alt:"Condições do tempo",id:"weather-icon"}}),o._v(" "),e("span",{staticClass:"location-details",attrs:{id:"description"}},[o._v(o._s(o.weatherInfos.weatherDescription))])],1)])],1)}),[],!1,null,null,null);o.default=component.exports},391:function(t,o,e){"use strict";e.r(o);e(22),e(138);var n=e(69),c=e(0),r={name:"Section_2",components:{BIcon:n.a,BIconSearch:c.pv},data:function(){return{search:"",suggestedLocations:["Canada","China","Nova York","California"]}},computed:{isError:function(){return this.$store.state.weatherData.isError}},methods:{submit:function(t){var o=t;this.$store.dispatch("weatherData/getWeatherInfos",o),this.$store.dispatch("weatherData/getLocationImage",o)}}},l=(e(387),e(75)),component=Object(l.a)(r,(function(){var t=this,o=t._self._c;return o("section",{staticClass:"section-2"},[o("b-form",{staticClass:"form",on:{submit:function(o){return o.preventDefault(),t.submit(t.search)}}},[o("div",{staticClass:"field-component"},[o("div",{staticClass:"input-area"},[o("b-form-input",{staticClass:"shadow-none",attrs:{type:"text",id:"location-input",placeholder:"Local...",autocomplete:"off"},model:{value:t.search,callback:function(o){t.search=o},expression:"search"}}),t._v(" "),t.isError?o("label",{staticClass:"error-label"},[t._v("Local inválido!")]):t._e()],1),t._v(" "),o("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[o("b-icon-search",{staticStyle:{color:"#0d222e"}})],1)],1)]),t._v(" "),o("div",{staticClass:"suggested-location"},[o("ul",t._l(t.suggestedLocations,(function(e){return o("li",{key:e,on:{click:function(o){return o.preventDefault(),t.submit(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])],1)}),[],!1,null,null,null);o.default=component.exports},392:function(t,o,e){"use strict";e(389)},393:function(t,o,e){var n=e(113)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap);"]),n.push([t.i,'*{box-sizing:border-box;font-family:"Ubuntu",sans-serif;margin:0;padding:0}.app-container{align-items:center;background-size:cover;display:flex;flex-direction:column;height:100vh;justify-content:center;width:100%}.main-content{display:flex;height:90%;justify-content:space-between;width:90%}',""]),n.locals={},t.exports=n},399:function(t,o,e){"use strict";e.r(o);var n=e(390),c=e(391),r={name:"IndexPage",components:{Section_1:n.default,Section_2:c.default},computed:{locationImage:function(){var t=this.$img(this.$store.state.weatherData.locationImage.fullImg);return{image:"url('".concat(t,"')")}}}},l=(e(392),e(75)),component=Object(l.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"app-container",style:{backgroundImage:t.locationImage.image}},[o("b-card",{staticClass:"main-content",staticStyle:{display:"flex","flex-direction":"row","border-radius":"0","background-color":"transparent"},attrs:{"no-body":""}},[o("Section_1"),t._v(" "),o("Section_2")],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);