import ColourHelpers from '../../utils/helpers/ColourHelpers';

describe("Hex To RGB Tests", ()=> {
    it("Should convert a hex colour to an RGB colour", ()=>{
        const response = ColourHelpers.hexToRgb('#ff0000');
        expect(response).toEqual([255, 0, 0]);
    })
    
    it("Should return null if the hex is invalid", ()=>{
        const response = ColourHelpers.hexToRgb('000');
        expect(response).toBeNull();
    })
    
    it("Should convert RGB to a hex string", ()=>{
        const response = ColourHelpers.rgbToHex(255, 0, 0);
        expect(response).toEqual('#ff0000');
    })
})
