import {types} from "mobx-state-tree";

const MapObjectModel = types.model("map_object", {
    id: types.integer,
    title: types.string,
    description: types.string,
    img: types.string,
});

export default MapObjectModel;