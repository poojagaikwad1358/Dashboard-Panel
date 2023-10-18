import React from 'react'
import { Search } from 'react-bootstrap-icons'
import { Card, CardHeader, CardBody, Table } from 'reactstrap';


export const ProductSellTable = () => {
    const rowData = [
        {
            productImage: 'https://github.com/bike.png',
            productName: 'Abstract 3D',
            productDescription: 'Lorem ipsum dolar sit amet, consectetur adipiscing elit.',            
            stock: '32 in stock',
            price: '$45.99',
            totalSales: 20,
        },
        {
            productImage: 'https://github.com/bike.png',
            productName: 'Sarphens illustration',
            productDescription: 'Lorem ipsum dolar sit amet, consectetur adipiscing elit.',
            stock: '32 in stock',
            price: '$45.99',
            totalSales: 20,
        },
    ];

    return (        
        <Card className='border-0'>
            <CardHeader className='border-0 mt-2' style={{background:'white'}}>
                <div className="row d-flex me-2 ">
                    <h5 className="col-md-6 mb-2 ">Product Sell</h5>
                    <div className="col-md-6 d-flex justify-content-end">
                        <form className="input-group bg-light border-0 width-25">
                            <span className="input-group-text">
                                <Search color="grey" style={{background:'rgb(250, 250, 250)'}}/>
                            </span>
                            <input
                                className="form-control border-start-0"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        <div>
                            <div className="dropdown">
                                <button 
                                    className="btn dropdown-toggle ms-1 text-secondary"
                                    type="button"
                                    id="dropdownMenu2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{background:'rgb(250, 250, 250)'}}
                                >
                                    Last 30 days
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Action
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Another action
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Something else here
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <Table className=" table-borderless">
                    <thead >
                        <tr>
                            <th className="border-bottom text-secondary">Product Name</th>
                            <th className="border-bottom text-secondary text-center">Stock</th>
                            <th className="border-bottom text-secondary text-center">Price</th>
                            <th className="border-bottom text-secondary text-center">Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((row, index) => (
                            <tr key={index}>
                                <td className='d-flex'>
                                    <img
                                        className='rounded'
                                        src={row.productImage}
                                        alt={row.productName}
                                        width="50"
                                        height="50"
                                    />
                                    <div className='ms-3'>
                                        <h6 className='mb-0'>{row.productName}</h6>
                                        <p className='text-secondary'><small>{row.productDescription}</small></p>
                                    </div>
                                </td>
                                <td className='text-center'>{row.stock}</td>
                                <td className='text-center'><h6>{row.price}</h6></td>
                                <td className='text-center'>{row.totalSales}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}
