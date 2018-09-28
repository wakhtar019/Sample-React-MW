import {AppInsights} from "applicationinsights-js"
import AppInsightsUsage from "appinsights-usage"


export const UUMAI = {
    init: function(appInsightsOptions, history){
        AppInsights.downloadAndSetup(appInsightsOptions);
        AppInsightsUsage.init(appInsightsOptions);
        
        if(history){
            history.listen(location => {
                AppInsights.trackPageView();
            });
        }
       
        this.setAppContext({urlReferrer:document.referrer});
    },
    
    /**
	 * It will return AppInsights object.
	 */
    ai(){
        return AppInsights;
    },
      
    trackRouterChange(){
        AppInsights.trackPageView();
    },

    
    setAppContext: function(properties){
        AppInsights.queue.push(function () {
            AppInsights.context.addTelemetryInitializer(function (envelope) {
                var telemetryItem = envelope.data.baseData;

                // To set custom properties:
                telemetryItem.properties = telemetryItem.properties || {};
                for (var key in properties) {
                    telemetryItem.properties[key] = properties[key];
                }
                
            })
        });
    }
   
}