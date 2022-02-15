Chart.defaults.font.size=14;
Chart.defaults.font.family='Noto Sans','sans-serif';
Chart.defaults.borderWidth=0
Chart.defaults.elements.bar.inflateAmount=10
Chart.register(ChartDataLabels);


const databudget={
    labels: [
        'Resources mobilized', 'Funding gap', 'ILO contribution'
    ],
    datasets: [
        {
            label: 'Estimated budget ⎼ in USD millions',
            backgroundColor:  ['#1E2DBE','#FA3C4B','#05D2D2'],
            data: [80, 70, 10],
            datalabels: {
                color: ['#fff','#230050','#230050']
            }
        }
    ]
};

const datadist={
    labels: [
        'In-country support','Thematic approaches','M&E and knowledge distribuition'
    ],
    datasets: [
        {
            data: [133,24,3],
            label: 'Budget distribution country/thematic support',
            backgroundColor: ['#1E2DBE','#FA3C4B','#05D2D2'],
            font: {size: 8},
            datalabels: {
                color: ['#fff','#230050','#230050']
            }
        }
    ]
};


let delayed;

const configBudget={
    type: 'pie',
    data: databudget,
    options: {
        borderWidth: 0,
        layout: {
            padding: {
                top: 30,
                bottom: 30
            }
        },
        indexAxis: 'y',
        animation: {
            onComplete: () => {
                delayed=true;
            },
            delay: (context) => {
                let delay=0;
                if(context.type==='data'&&context.mode==='default'&&!delayed) {
                    delay=context.dataIndex*1000+context.datasetIndex*400;
                }
                return delay;
            },
        },
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
                align: 'center',
                position: 'bottom',
                color: '#230050',
                font: {
                    size: 7
                },
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                display: false,
                grid: {
                    display: false
                }
            }
        },
        grid: {
            gridLineOptions: {
                display: false
            }
        }
    }
}
const configDist={
    type: 'pie',
    data: datadist,
    options: {
        borderWidth: 0,
        layout: {
            padding: {
                top: 0,
            }
        },
        animation: {
            onComplete: () => {
                delayed=true;
            },
            delay: (context) => {
                let delay=0;
                if(context.type==='data'&&context.mode==='default'&&!delayed) {
                    delay=context.dataIndex*1000+context.datasetIndex*400;
                }
                return delay;
            },
        },
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
                align: 'center',
                position: 'bottom',
                font: {
                    size: 7
                },
                padding: {
                        top: 0,
                }
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            },
            grid: {
                gridLineOptions: {
                    display: false
                }
            }
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },

    }
}

const estBudget=new Chart(document.getElementById('est-budget'),configBudget)
const budgetDist=new Chart(document.getElementById('budget-dist'),configDist)
