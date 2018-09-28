import LogPropertyBag from "./LogPropertyBag";

export class UUMLogHelper {
	/**
	* Method Create Property Bag Object.
	* @method UUMLogHelper().createPropertyBag()
	* @example Example to use new UUMLogHelper().createPropertyBag()
	*/
	createPropertyBag() {
		return new LogPropertyBag();
    }
}

export default new UUMLogHelper();