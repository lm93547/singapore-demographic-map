const GeoHelpers = {
    getPropertyFromGeoJson: function getPropertyFromGeoJson(json: any, property: string, type: string, featureProperty: string, propertyMatcher: string) {
        const result = json[property].filter((feature: any)=>{
            if(feature.geometry.type === type && feature.properties[featureProperty] === propertyMatcher){
                return feature
            }
        })
        return result;
    },
    calcTime: function calcTime(offset: string) {
        const date = new Date();
        const UTC = date.getTime() + (date.getTimezoneOffset() * 60000);

        const newDate = new Date(UTC + (3600000*Number(offset)));
    
        return newDate.toLocaleString();
    
    }
}

export default GeoHelpers;