interface IChart {
    Draw(): void;
}

class Chart implements IChart{
    constructor() {
    }

    public render() {
    }

    public Initialize(): boolean {
        return false;
    }

    public Draw(): void {
    }
}

class WaveChart extends Chart {
    private m_XAxisData: Float32Array;
    private m_YAxisData: Float32Array;

    constructor(XAxisData: Float32Array, YAxisData: Float32Array) {
        super();
        this.m_XAxisData = XAxisData;
        this.m_YAxisData = YAxisData;
    }

    public Draw(): void {
    }
}

