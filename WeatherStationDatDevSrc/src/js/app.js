import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';


// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';



//include jQuery
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$$ = jQuery;
//-----------------------------



export var app = new Framework7({
  name: 'WeatherStationDat', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  
  on:{
    
      pageInit:function(page){

          
        //first thing after loading, the app fetches a startup-notice with
        //some notice text, that is stored in the server-side as a json file.
          
        var messageTXT = "no notices to show at the present.";
        
        app.request.json('notice.json', function (data) {
            
            if(data.notice != ""){
                    messageTXT = data.notice;
            }
            
            app.dialog.alert(messageTXT);
        });
          
       
      }
      
    },
  
});

