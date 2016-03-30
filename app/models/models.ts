export class Person {
    Id: number;
    FullName: string;
    Weights: Weight[];
}

export class Weight {
    Id: number;
    Kg: number;
    Date: Date;
    PersonId: number;
}

export class Chart {   
    chartData: any[];
    chartLabels: any[];
    chartSeries: any[];
    chartColors: any[];
    chartOptions: Object;
    chartType: string;
}