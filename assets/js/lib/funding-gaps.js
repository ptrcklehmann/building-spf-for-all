Chart.defaults.font.size=14;
Chart.defaults.font.family='Noto Sans','sans-serif';
Chart.defaults.borderWidth=0
Chart.defaults.elements.bar.inflateAmount=10
Chart.register(ChartDataLabels);


const databudget = {
    labels: [
        'Estimated budget'
    ],
    datasets: [
        {
            label: 'Resources mobilized',
            backgroundColor: '#230050',
            data: [80],
            datalabels: {
                color: '#fff'
            }
        },{
            label: 'Funding gap',
            backgroundColor: '#FA3C4B',
            data: [70],
            datalabels: {
                color: '#230050'
            }
        },{
            label: 'ILO contribution',
            backgroundColor: '#1E2DBE',
            data: [10],
            datalabels: {
                color: '#fff'
            }
        }]
};

const datadist = {
    labels: [
        'Budget distribution country/thematic support '
    ],
    datasets: [
        {
            label: 'In-country support',
            backgroundColor: '#230050',
            font: { size: 8 },
            data: [133],
            datalabels: {
                color: '#fff'
            }
        },{
            label: 'Thematic approaches',
            backgroundColor: '#FA3C4B',
            data: [24],
            datalabels: {
                color: '#230050'
            }
        },{
            label: 'M&E and knowledge distribuition',
            backgroundColor: '#1E2DBE',
            data: [3],
            datalabels: {
                color: '#fff'
            }
        }]
};


let delayed;

const configBudget={
    type: 'bar',
    data: databudget,
    options: {
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
    type: 'bar',
    data: datadist,
    options: {
        layout: {
            padding: {
                top: 30,
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
                font: {
                    size: 7
                }
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
const estBudget=new Chart(document.getElementById('est-budget'),configBudget)
const budgetDist=new Chart(document.getElementById('budget-dist'),configDist)
