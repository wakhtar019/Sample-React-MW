

import Telemetry from './../lib/msit.telemetry.extensions.ai.javascript';  

var appsettings={clientConfig:{}}; 
    appsettings.clientConfig.environmentName="";
    appsettings.clientConfig.serviceOffering="";
    appsettings.clientConfig.serviceLine="";
    appsettings.clientConfig.program="";
    appsettings.clientConfig.capability="";
    appsettings.clientConfig.component="";
    appsettings.clientConfig.ictoId="";

var appInsights = window.appInsights || function (config) { 
    function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f; for (s.src = "https://az416426.vo.msecnd.net/scripts/a/ai.0.js",u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) r("track" + i.pop()); return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s }), t }({
    instrumentationKey : 'f38f3284-8970-4158-8eb6-ffc932df3977',
    disableExceptionTracking : false
});

window.appInsights = appInsights;
//OneITTelemetry extensions code.
var extensions = new Telemetry.Extensions.AI.AppInsights();
var environmentData = new Telemetry.Extensions.AI.EnvironmentValues(
    appsettings.clientConfig.environmentName,
    appsettings.clientConfig.serviceOffering,
    appsettings.clientConfig.serviceLine,
    appsettings.clientConfig.program,
    appsettings.clientConfig.capability,
    appsettings.clientConfig.component,
    appsettings.clientConfig.ictoId);

appInsights.queue.push(function () {
extensions.AddMsitTelemetryInitializers(appInsights, environmentData, null);
});
//End of OneITTelemetry extensions code.
appInsights.trackPageView();

/* @ngInject */
export  function setAppInsightsContext(userAlias){
    appInsights.setAuthenticatedUserContext(userAlias,"",true);
}