import{c as e,j as t,F as n}from"./vendor.b2294414.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();let i,a;class o{constructor(){this.selectedArea="central",this.selectedWeather="rainfall",this.selectedMonth="1",this.selectedYear="2021"}}function s(){console.log("send-info-request function started.");var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&function(e){var t=e.responseXML.getElementsByTagName("entry"),n=[];for(let i=0;i<t.length;i++){var o=!1,s=!1,r=t[i].getElementsByTagName("month")[0].childNodes[0].nodeValue,l=t[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;r==a.selectedMonth&&(s=!0),l==a.selectedYear&&(o=!0),o&&s&&n.push(i)}var d="";if(n.length>0)for(let i=0;i<t.length;i++){var c=!1;for(let e=0;e<n.length;e++)if(i==n[e]){c=!0;break}if(c){console.log("adding index "+i+" data into slide collection");var p=" ( [Date]: ";p+=t[i].getElementsByTagName("date")[0].childNodes[0].nodeValue,p+=" ) ( [Location]: ",p+=t[i].getElementsByTagName("location")[0].childNodes[0].nodeValue,p+=" ) ( [Type]: ",p+=a.selectedWeather.toString(),p+=" ) ( [Entry]: ",p+=t[i].getElementsByTagName(a.selectedWeather.toString())[0].childNodes[0].nodeValue,d+='<div class="swiper-slide"><p>'+(p+=" ) ").toString()+"</p></div>"}}else d+='<div class="swiper-slide"><p>No entries recorded for selected month!</p></div>';document.getElementById("SLcontainer").innerHTML="",document.getElementById("SLcontainer").innerHTML=d,i.updateSlides(),i.slideTo(0,500,!1)}(this)};var t=a.selectedArea;"central"==t?e.open("GET","log-central.xml",!0):"south"==t&&e.open("GET","log-south.xml",!0),e.send(),console.log("send-info-request function completed.")}function r(e,t){var n=e,i=document.getElementsByName("my-radio");for(let a of i)a.checked="";document.getElementById(n).checked="checked",t.selectedArea=document.getElementById(n).value}function l(e,{$:t,$f7:n,$on:l}){return l("pageInit",(()=>{let e,t;a=new o,document.getElementById("radio1").addEventListener("click",(function(){r("radio1",a)})),document.getElementById("radio2").addEventListener("click",(function(){r("radio2",a)})),r("radio1",a),e=n.calendar.create({inputEl:"#calendarinput"}),document.getElementById("calendarinput").addEventListener("change",(()=>{let n;n=e.getValue();let i=new Date(n);var o=i.getMonth()+1,s=i.getFullYear();console.log("month :"+o+" year :"+s);var r=function(e){var t="spring",n="dry";1==e[0]?t="spring":2==e[0]?t="summer":3==e[0]?t="autumn":4==e[0]&&(t="winter");1==e[1]?n="dry":2==e[1]&&(n="wet");return[t,n]}(function(e){var t=[1,1];switch(e){case 1:case 2:t=[4,1];break;case 3:case 4:t=[1,1];break;case 5:t=[1,2];break;case 6:case 7:case 8:t=[2,2];break;case 9:case 10:t=[3,2];break;case 11:t=[3,1];break;case 12:t=[4,1];break;default:t=null}return t}(o));t.setValue(r),a.selectedMonth=o.toString(),a.selectedYear=s.toString()})),t=n.smartSelect.create({el:"#smartSelectList"});const l="rainfall temperature dryspell frost mist fog sunny overcast".split(" ");n.autocomplete.create({inputEl:"#autocomplete-showall",openIn:"dropdown",source:function(e,t){for(var n=[],i=0;i<l.length;i++)l[i].toLowerCase().indexOf(e.toLowerCase())>=0&&n.push(l[i]);t(n)}}),document.getElementById("autocomplete-showall").addEventListener("change",(()=>{a.selectedWeather=document.getElementById("autocomplete-showall").value})),i=n.swiper.create(".swiper-container",{speed:400,spaceBetween:100}),document.getElementById("txtDataBtn").addEventListener("click",s)})),function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div class="page" data-name="home">
    <!-- Top Navbar -->
    <div class="navbar navbar-large">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="title">WeatherStationDat</div>
        <div class="title-large">
          <div class="title-large-text">WeatherStationDat</div>
        </div>
      </div>
    </div>
    <!-- Toolbar-->
    <div class="toolbar toolbar-bottom">
      <div class="toolbar-inner">
        <a href="#" class="link">Left Link</a>
        <a href="#" class="link">Right Link</a>
      </div>
    </div>
    <!-- Scrollable page content-->
    <div class="page-content">
    
    
    
    
    <!--CONTENT START-->
    

    
    
    
      <form id="radioform">
      <!--AREA SELECT RADIO BUTTONS-->
      
      <div class="list">
      
        <div class="block-title" style="margin-left:40px;"> Select Land Region : </div>
        
        <ul id="radioBtnList">
        
            <li>
            <label class="item-radio item-content">
                <!-- Checked by default -->
                <input id="radio1" type="radio" name="my-radio" value="central" checked="checked"/>
                <i class="icon icon-radio"></i>
                <div class="item-inner">
                <div class="item-title">Sri Lanka Central</div>
                </div>
            </label>
            </li>
        
            <li>
            <label class="item-radio item-content">
                <!-- Checked by default -->
                <input id="radio2" type="radio" name="my-radio" value="south" />
                <i class="icon icon-radio"></i>
                <div class="item-inner">
                <div class="item-title">Sri Lanka South</div>
                </div>
            </label>
            </li>
            
        </ul>
        
      </div>
      
      </form>
      
      
      
      
      
    
    
      <!--CALENDAR to select month and year-->
      
        <div id="calendarInputBack" class="block block-strong">

        <p> <h4>SELECT A DATE (records start from August-2021) </h4> </p>

        <div class="list no-hairlines-md">
            <ul>
                <li>
                <div class="item-content item-input">
                    <div class="item-inner">
                    <div class="item-input-wrap">
                        <input type="text" placeholder="pick a date here" readonly="readonly" id="calendarinput"/>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
        </div>
      

      
      
      
      
      
      <!--AUTOCOMPLETE with dropdown , select weather pattern-->
      
        <div class="list no-hairlines-md">
        <div class="block-header" id="dropdown-header"> <h4> Weather Type </h4> </div>

        <ul>
            <li class="item-content item-input">
            <div class="item-inner">
                <div class="item-title item-label" id="wpatterns-label">Select weather pattern below:</div>
                <div class="item-input-wrap">
                <input id="autocomplete-showall" type="text" placeholder="weather type" />
                </div>
            </div>
            </li>
        </ul>

        </div>


        
      
      
      
      <!--Button to signal fetch data from server-->
      
        <div class="block block-strong">
            
            <button id="txtDataBtn">-- Get Data --</button>
            
        </div>
        
      
      
      
      
      
        <!--SMART SELECT - program automatically selects two types of season when date is selected-->
      
        <li id="smartSelectList" class="list">

        <a class="item-link smart-select smart-select-init" data-open-in="popup"  data-searchbar="false">

            <select name="seasons-select" multiple>
            
                <optgroup label="Year's 4 Seasons">
                    <option id="syA" name="yseasons" value="spring" selected>Spring Season</option>
                    <option id="syB" name="yseasons" value="summer">Summer Season</option>
                    <option id="syC" name="yseasons" value="autumn">Autumn Season</option>
                    <option id="syD" name="yseasons" value="winter">Winter Season</option>
                </optgroup>
                
                <optgroup label="Rainfall">
                    <option id="srA" name="rseasons" value="dry" selected>Dry Season</option>
                    <option id="srB" name="rseasons" value="wet">Wet Season</option>
                </optgroup>
            
            </select>
            
            <div class="item-content">
            <div class="item-inner">
                <div class="item-title"> 
                    <h4>Seasons Indicator </h4> 
                    <p>(Seasons are selected and displayed here </p>
                    <p>automatically when date is chosen above.</p> 
                    <p> No input needed.)</p>
                </div>
            </div>
            </div>
            
        </a>
        </li>
      
      
      
      
      
      
        <!--Slide SWIPER for fetched data display-->
      
        <div id="swiper-holder">

        <div class="block-title"> <h4 id="slides-title">View Observation Data</h4> </div>
        <div
            data-pagination='{"el": ".swiper-pagination"}'
            data-space-between="20"
            class="swiper-container swiper-init demo-swiper"
        >
            <div class="swiper-pagination"></div>
            
            <div id="SLcontainer" class="swiper-wrapper">
            
                <div class="swiper-slide"> ( No data : Please import ) </div>
                
                
            </div>
            
        </div>
        
        </div>
        
        

        

    <!--CONTENT END-->

    
    </div>
  </div>
`}}l.id="237a571e23",l.style="\n\n    /*\n    styling, mostly to change background colours and to change fonts. \n    some of the framework7 inputs have some specific styling.\n    */\n\n    \n  #radioBtnList{\n  \n    background-color: #ccddff;\n  }\n  \n  #calendarInputBack{\n  \n    background-color: #ccddff;\n  }\n\n  #autocomplete-showall{\n  \n    background-color: #ccddff;\n  }\n\n  #smartSelectList{\n  \n    background-color: #ffdab3;\n  }\n\n  \n  #dropdown-header{\n  \n    font-size: large;\n  }\n  \n  #wpatterns-label{\n        \n    font-size: 17px;\n    font-weight: bold;\n  }\n  \n  #slides-title{\n  \n    font-size: 16px;\n    font-weight: bold;\n  }\n  \n\n  \n  #txtDataBtn{\n  \n    height: 45px;\n  \n    font-size: 18px;\n    font-weight : bold;\n  \n    background-color: #85e085;\n    border-radius: 10px;\n  \n  }\n  #txtDataBtn:hover{\n  \n    background-color: #00ff99;\n  }\n  \n  \n  \n  \n    /*\n        below styling are for the swiper slider\n    */\n  \n  .demo-swiper .swiper-slide {\n    font-size: 17px;\n    font-weight: 300;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #fff;\n    color: #000;\n    padding: 12px;\n    \n  }\n  .demo-swiper .swiper-slide {\n    box-sizing: border-box;\n    border: 1px solid #ddd;\n    background: #fff;\n    \n    background-color: #99ff99;\n  }\n  .demo-swiper {\n    margin: 0px 0 35px;\n    font-size: 18px;\n    height: 120px;\n  }\n  .demo-swiper.demo-swiper-auto .swiper-slide {\n    width: 85%;\n  }\n  .demo-swiper.demo-swiper-auto .swiper-slide:nth-child(2n) {\n    width: 70%;\n  }\n  .demo-swiper.demo-swiper-auto .swiper-slide:nth-child(3n) {\n    width: 30%;\n  }\n  \n  \n";var d=[{path:"/",component:l}];const c=e({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products:({state:e})=>e.products},actions:{addProduct({state:e},t){e.products=[...e.products,t]}}});function p(){return function(e){e.$;var t=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,t`
  <div id="app">

  <!-- Your main view, should have "view-main" class -->
  <div class="view view-main view-init safe-areas" data-url="/"></div>

  </div>
`}}p.id="717c384f96",window.jQuery=t,window.$$=t;var u=new n({name:"WeatherStationDat",theme:"auto",el:"#app",component:p,store:c,routes:d,on:{pageInit:function(e){var t="no notices to show at the present.";u.request.json("notice.json",(function(e){""!=e.notice&&(t=e.notice),u.dialog.alert(t)}))}}});
