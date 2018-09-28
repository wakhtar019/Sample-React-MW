import UUMLogHelper from "./UUMLoggerHelper";
import {UUMAI} from './UUMAI';

class UUMLogger { 
    constructor() {
        this.appInsights = UUMAI.ai();
    }
    createPropertyBag() {
        return UUMLogHelper.createPropertyBag();
    }

    

    /**
	* Diagnostic method to log Information
	* @method UUMLogger#logInformation
	* @param {string} informationMessage - Message which needs to be logged.   
	*/
    logEvent(source,
        message,
        properties) {
        properties = this.buildCommonLogProperties(properties, source, null, null);
        this.appInsights.trackEvent(message, properties.getItems());
    }

    /**
	 * Diagnostic method to log exception
	 * @method UUMLogger#logException
	 * @param {string} source - Source of the exception
	 * @param {exception} exception - exception which needs to be logged
	 * @param {LogPropertyBag} properties - log properties
	 */
    logException(source,
        exception,
        properties) {
        properties = this.buildCommonLogProperties(properties, source, null, null);
        this.appInsights.trackException(exception, exception.stack, properties.getItems());
    }

    /**
     * Diagnostic method to log error
     * @param {string} message - message which is to be logged
     * @param {string} errorCode - error code of message which is to be logged
     * @param {string} stackTrace - stacktrace which is to be logged
     * @param {LogPropertyBag} properties - log properties 
     */
    logError(source, message,
        errorCode,
        stackTrace,
        properties
    ) {
        var error = new Error();
        error.message = message;
        error.stack = stackTrace;
        properties = this.buildCommonLogProperties(properties, source, errorCode, stackTrace);
        this.logException(source,error, properties);
    }

    /**
	 * Diagnostic method to log trace
	 * @param {string} source - Source
	 * @param {string} message - Message which needs to be logged.
	 * @param {LogPropertyBag} properties - log properties    
	 */
    logTrace(source,
        message,
        properties) {
        properties = this.buildCommonLogProperties(properties, source, null, null);
        this.appInsights.trackTrace(message, properties.getItems());

    }

    /**
       * Diagnostic method to log warning
       * @method UUMLogger#logWarning
       * @param {string} source - Source
       * @param {string} warningMessage - Message which needs to be logged.  
       * @param {LogPropertyBag} properties - log properties         
       */
    logWarning(source,
        message,
        properties
    ) {
        properties = this.buildCommonLogProperties(properties, source, null, null);
        this.appInsights.trackEvent(message, properties.getItems());
    } 

    /**
	 * Diagnostic method to log Track page view
	 * @method UUMLogger#trackPageView
	 * @param {string} source - Source
	 * @param {string} url - url of the view
	 * @param {LogPropertyBag} properties - log properties
	 * @param {LogMetricBag} measurements - log metrics 
	 */
    trackPageView(pageName,
        url,
        properties,
        measurements,
        duration) {
        this.appInsights.trackPageView(pageName, url, properties?properties.getItems():{}, measurements, duration);
    }
    /**
	* Diagnostic method to log metrics
	* @method UUMLogger#trackPageView
	* @param {string} source - Source
	* @param {string} metricName - name of the metric to be logged
	* @param {LogPropertyBag} properties - log properties    
	*/
    logMetric(source, metricName,
        metricValue,
        properties) {
        properties = this.buildCommonLogProperties(properties, source, null, null);
        this.appInsights.logMetric(metricName, metricValue, properties.getItems());

    }

    /**
	 * To Builds log properties that are common to all methods
	 * @param properties
	 * @param source
	 * @param errorCode
	 * @param stackTrace
	 */
    buildCommonLogProperties(properties, source,
        errorCode, stackTrace) {
            debugger;
        var logProperties;
        logProperties = properties || this.createPropertyBag();
        logProperties.addToBag('Source', source);

        if (errorCode!==null)
            logProperties.addToBag('ErrorCode', errorCode);

        if (stackTrace!==null)
            logProperties.addToBag('StackTrace', stackTrace);

        return logProperties;
    }  
}

export default new UUMLogger();