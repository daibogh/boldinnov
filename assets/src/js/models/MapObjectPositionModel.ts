import {types} from "mobx-state-tree";

const MapObjectPositionModel = types.model("map_object_positions", {
    cx: types.string,
    cy: types.string,
    rx: types.string,
    ry: types.string,
});

export default MapObjectPositionModel;