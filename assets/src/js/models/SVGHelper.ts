import {types} from "mobx-state-tree";
import MapObjectPositionModel from "./MapObjectPositionModel";

export default class SVGHelper {
    readTextFile(file:any) {
        let result = "";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if (rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    result = rawFile.responseText;
                }
            }
        }
        rawFile.send(null);

        return result;
    }

    getEllipses(file:any) {
        let svgXml = this.readTextFile(file);
        let parser = new DOMParser();
        let doc = parser.parseFromString(svgXml, "image/svg+xml");
    
        let array = doc.getElementsByTagName("circle"); // ellipse
        //let ellipses:any = types.array(MapObjectPositionModel).create([]);
        let ellipses:any = [];

        console.log("array.length " + array.length);
        for (let i = 0; i < array.length; ++i) {
            
            ellipses.push({
                cx: array[i].cx.animVal.value * 4,
                cy: array[i].cy.animVal.value * 4,
                //rx: 8.34 * 4,
                rx: 8.4 * 4,
                ry: 8.4 * 4,
            });
        }

        return ellipses;
    }
}