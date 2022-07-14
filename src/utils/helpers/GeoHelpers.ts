const GeoHelpers = {
    getPropertyFromGeoJson: function getPropertyFromGeoJson(json: any, property: string, type: string, featureProperty: string, propertyMatcher: string) {
        const result = json[property].filter((feature: any)=>{
            if(feature.geometry.type === type && feature.properties[featureProperty] === propertyMatcher){
                console.log('point', feature.properties.stop_type)
                return feature
            }
        })
        return result;
    }
}

export default GeoHelpers;