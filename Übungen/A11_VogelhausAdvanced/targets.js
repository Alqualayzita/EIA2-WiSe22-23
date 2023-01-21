"use strict";
var L11_VogelhausAdvanced;
(function (L11_VogelhausAdvanced) {
    L11_VogelhausAdvanced.targets = [
        {
            minXValue: 100,
            minYValue: L11_VogelhausAdvanced.horizon + 30,
            maxXValue: 600,
            maxYValue: 500
        },
        {
            minXValue: 335,
            minYValue: 430,
            maxXValue: 400,
            maxYValue: 500
        },
        {
            minXValue: 135,
            minYValue: 430,
            maxXValue: 200,
            maxYValue: 500
        },
        {
            minXValue: L11_VogelhausAdvanced.cc2.canvas.width,
            minYValue: L11_VogelhausAdvanced.cc2.canvas.height,
            maxXValue: L11_VogelhausAdvanced.cc2.canvas.width + 10,
            maxYValue: L11_VogelhausAdvanced.cc2.canvas.height + 10
        },
        {
            minXValue: -L11_VogelhausAdvanced.cc2.canvas.width,
            minYValue: L11_VogelhausAdvanced.cc2.canvas.height,
            maxXValue: -L11_VogelhausAdvanced.cc2.canvas.width - 10,
            maxYValue: L11_VogelhausAdvanced.cc2.canvas.height + 10
        }
    ];
})(L11_VogelhausAdvanced || (L11_VogelhausAdvanced = {}));
//# sourceMappingURL=targets.js.map