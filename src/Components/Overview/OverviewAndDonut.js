import React, { useRef, useEffect } from 'react';
import { Row, Col, Card, CardHeader, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const monthlyEarningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Monthly Earnings',
            data: [2000, 2200, 2500, 1800, 2100, 2300, 2450, 2700, 2150, 2000, 2300, 2500],
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: ['lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'blue', 'lightblue', 'lightblue', 'lightblue', 'lightblue'],
        },
    ],
};

const options = {
    scales: {
        x: {
            display: true,
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false, 
        },
    },
};

const data = {
    datasets: [
        {
            data: [500, 100, 400],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
const OverviewAndDonut = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {

                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: 'bar',
                data: monthlyEarningsData,
                options: options,
            });
        }
    }, []);

    return (

        <div className='row d-flex flex-lg-nowrap'>
            <Card className='order-sm-1  col-md-8 border-0 me-2'>
                <CardHeader className="d-flex justify-content-between border-0" style={{ background: 'white' }}>
                    <div>
                        <h5 className="m-0">Overview</h5>
                        <p className="m-0 text-secondary">Monthly Earning</p>
                    </div>
                    <UncontrolledDropdown >
                        <DropdownToggle className='text-secondary border-0' style={{ background: 'rgb(250, 250, 250)' }} caret>
                            Quarterly
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Quarterly</DropdownItem>
                            <DropdownItem>Monthly</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                    <canvas ref={chartRef} />
                </CardBody>
            </Card>

            <Card className='order-sm-2 col-md-4 border-0'>
                <CardHeader className='border-0' style={{ background: 'white' }}>
                    <h5 className="m-0">Customers</h5>
                    <p className="text-secondary small m-0">Customers that buy products</p>
                </CardHeader>
                <CardBody className='align-items-center justify-content-center'>
                    <div
                        className="chart-container"
                        style={{ position: "relative", width: "250px", height: "250px" }}
                    >
                        <Doughnut data={data} options={{ cutout: "70%" }} />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center"
                            }}
                        >
                            <h5>65%</h5>
                            <small>Total new Customers</small>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </div>


    );
};

export default OverviewAndDonut;
