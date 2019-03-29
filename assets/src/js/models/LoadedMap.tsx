import {types, detach} from "mobx-state-tree";
import MapModel from "./MapModel";
import CircleClickable from "./CircleClickable";
import MapObjectModel from "./MapObjectModel";
import MapObjectPositionModel from "./MapObjectPositionModel";
import SVGHelper from "./SVGHelper";
import * as React from "react";


const boldinoSvg = "/static/src/img/map3.svg"


const LoadedMapModel = types.model(
    "loaded_map",
    {
       items: types.array(MapObjectModel),
       currentItem: types.maybe(MapObjectModel),
       SVGClickablesData: types.array(MapObjectPositionModel),
       is_loaded: false
    }).actions(
    self => ({
        initLoad(data:any){
            console.log("LoadedMapModel")
            console.log(data);
            data.map((instance: { id: string; title: string; description: string;  img: string; }) => {
                console.log("CP_1")
                self.items.push(MapObjectModel.create({
                    id:parseInt(instance.id),
                    title: instance.title,
                    description: instance.description,
                    img: instance.img,
                }))
            });

            console.log("CP_2")
            self.items = data;
            self.SVGClickablesData.clear();
            let ellipses:any = new SVGHelper().getEllipses(boldinoSvg);
            console.log("CP_3")
            console.log(ellipses)
            ellipses.map((instance: { cx: string; cy: string; rx: string;  ry: string; }) => {
                console.log("CP_1")
                self.SVGClickablesData.push(MapObjectPositionModel.create({
                    cx: instance.cx.toString(),
                    cy: instance.cy.toString(),
                    rx: instance.rx.toString(),
                    ry: instance.ry.toString(),
                }))
            });
            self.is_loaded = true;
            self.currentItem = undefined;
        },
        getImage():any {
            if (self.currentItem != null)
                return self.currentItem.img;
        },
        getTitle():any {
            if (self.currentItem != null)
                return self.currentItem.title;
        },
        getDescription():any {
            if (self.currentItem !== null && self.currentItem !== undefined)
                return self.currentItem.description;
        },
        SetCurrentItem(objectNumber:any):any {
            let obj = self.items.find((el:any) => {
                return el.id === objectNumber;
            });

            if (obj !== undefined)
                self.currentItem = MapObjectModel.create({
                    id: obj.id,
                    title: obj.title,
                    description: obj.description,
                    img: obj.img,
                });
        },
        GetSVGClickableForRender(scale_koef:any):any {
            console.log("GetSVGClickableForRender " + scale_koef)
            let clickables = [];

            console.log(self.SVGClickablesData)
            for (let i = 0; i < self.SVGClickablesData.length; ++i) {
                let data:any = {
                    objectNumber: self.items[i].id,
                    cx: parseInt(self.SVGClickablesData[i].cx) * scale_koef,
                    cy: parseInt(self.SVGClickablesData[i].cy) * scale_koef,
                    rx: parseInt(self.SVGClickablesData[i].rx) * scale_koef,
                    ry: parseInt(self.SVGClickablesData[i].ry) * scale_koef,
                    callback: self,
                };
                clickables.push(
                  <CircleClickable key={i} data={data} scale={scale_koef}></CircleClickable>
                );
            }

            return clickables;
        },
    })
).views(
    self => ({
        isEmpty():boolean{
            return self.items.length == 0;
        }
    })
);

export default LoadedMapModel;