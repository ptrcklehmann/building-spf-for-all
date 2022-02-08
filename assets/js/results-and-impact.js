Chart.defaults.font.size=14;
Chart.defaults.font.family='Noto Sans','sans-serif';
Chart.defaults.borderWidth=0

Chart.register(ChartDataLabels);

const labels=[
    'Step 1',
    'Step 2',
    'Step 3'
];

const data={
    labels: labels,
    datasets: [
        {
            label: 'Achievement 2020',
            backgroundColor: '#1E2DBE',
            data: [10,13,16],
            datalabels: {
                color: '#fff'
            }
        },{
            label: 'Ambition 2025',
            backgroundColor: '#05D2D2',
            data: [20,30,40],
            datalabels: {
                color: '#230050'
            }
        }]
};
let delayed;

const config={
    type: 'bar',
    data: data,
    options: {
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
            deferred: {
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
            },
            title: {
                display: false,
                // color: '#230050',
                // text: 'Number of institutional changes achieved in countries',
                // font: {
                //     size: 16,
                // }
            },
            legend: {
                display: false,
                align: 'end'
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,

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

};

const impactData1={
    labels: ['Legal coverage'],
    datasets: [
        {
            label: 'Ambition 2025',
            backgroundColor: '#05D2D2',
            borderWidth: 0,
            data: [20],
            datalabels: {
                color: '#230050',
                position: 'center'
            }
        },{
            label: 'Achievement 2020',
            backgroundColor: '#1E2DBE',
            borderWidth: 0,
            data: [11.6],
            datalabels: {
                color: '#fff',
                position: 'center'
            }
        }]
}
const impactConfig1={
    type: 'pie',
    data: impactData1,
    options: {
        animation: {
            onComplete: () => {
                delayed=true;
            },
            delay: (context) => {
                let delay=0;
                if(context.type==='data'&&context.mode==='default'&&!delayed) {
                    delay=context.dataIndex*600+context.datasetIndex*300;
                }
                return delay;
            },
        },
        plugins: {
            deferred: {
                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
            },
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
            labels: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            }
        },
        responsive: true,
        scales: {
            x: {
                display: false,
                stacked: true,
                grid: {
                    display: false,
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
const impactData2={
    labels: ['Effective coverage'],
    datasets: [
        {
            label: 'Ambition 2025',
            backgroundColor: '#05D2D2',
            borderWidth: 0,
            data: [30],
            datalabels: {
                color: '#230050'
            }
        },{
            label: 'Achievement 2020',
            backgroundColor: '#1E2DBE',
            borderWidth: 0,
            data: [10.9],
            datalabels: {
                color: '#fff'
            }
        }]
}
const impactConfig2={
    type: 'pie',
    data: impactData2,
    options: {
        animation: {
            onComplete: () => {
                delayed=true;
            },
            delay: (context) => {
                let delay=0;
                if(context.type==='data'&&context.mode==='default'&&!delayed) {
                    delay=context.dataIndex*1000+context.datasetIndex*500;
                }
                return delay;
            },
        },
        plugins: {
            deferred: {
                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
            },
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
            labels: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            }
        },
        responsive: true,
        scales: {
            x: {
                display: false,
                stacked: true,
                grid: {
                    display: false,
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

};
const impactData3={
    labels: ['More comprehensive and adequate protection'],
    datasets: [
        {
            label: 'Ambition 2025',
            backgroundColor: '#05D2D2',
            borderWidth: 0,
            data: [10],
            datalabels: {
                color: '#230050'
            }
        },{
            label: 'Achievement 2020',
            backgroundColor: '#1E2DBE',
            borderWidth: 0,
            data: [2.6],
            datalabels: {
                color: '#fff'
            }
        }]
}
const impactConfig3={
    type: 'pie',
    data: impactData3,
    options: {
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
            deferred: {
                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
              },
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
            labels: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1E2DBE'
            }
        },
        responsive: true,
        scales: {
            x: {
                display: false,
                stacked: true,
                grid: {
                    display: false,
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

};

const institutionalChangesChart=new Chart(document.getElementById('institutional-changes'),config)
const impactOnPeopleChart1st=new Chart(document.getElementById('impact-on-people-1st'),impactConfig1)
const impactOnPeopleChart2nd=new Chart(document.getElementById('impact-on-people-2nd'),impactConfig2)
const impactOnPeopleChart3rd=new Chart(document.getElementById('impact-on-people-3rd'),impactConfig3)