var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Chart = (function () {
    function Chart() {
    }
    Chart.prototype.render = function () {
    };
    Chart.prototype.Initialize = function () {
        return false;
    };
    Chart.prototype.Draw = function () {
    };
    return Chart;
}());
var WaveChart = (function (_super) {
    __extends(WaveChart, _super);
    function WaveChart(XAxisData, YAxisData) {
        _super.call(this);
        this.m_XAxisData = XAxisData;
        this.m_YAxisData = YAxisData;
    }
    WaveChart.prototype.Draw = function () {
    };
    return WaveChart;
}(Chart));
