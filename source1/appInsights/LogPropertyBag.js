export class LogPropertyBag {
	constructor(){
		this.propBagInternal = {}; 
	} 
	addToBag(key, value) {
		this.propBagInternal[key] = value;
	}

	getItems() {
		return this.propBagInternal;
	}
	addRange(propertyBag) {
		var properties = propertyBag.getItems(); 
		for (var property in properties) {
			this.addToBag(property, properties[property]);
		}
	} 
	removeFromBag(key) {
		delete this.propBagInternal[key];
	} 
}
export default LogPropertyBag;