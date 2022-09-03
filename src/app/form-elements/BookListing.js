import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Button, Modal,Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const { SearchBar } = Search;

var products = [
    {
        id: 'XN-1',
        purchasedOn: '25/09/2019',
        customer: 'Edinburgh',
        shipTo: 'New York',
        basePrice: '$1500',
        purchasedPrice: '$3200',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-2',
        purchasedOn: '26/09/2019',
        customer: 'Doe',
        shipTo: 'Brazil',
        basePrice: '$4500',
        purchasedPrice: '$7500',
        status: 'Pending',
        action: ''
    },
    {
        id: 'XN-3',
        purchasedOn: '26/09/2019',
        customer: 'Sam',
        shipTo: 'Tokyo',
        basePrice: '$2100',
        purchasedPrice: '6300',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-4',
        purchasedOn: '27/09/2019',
        customer: 'Joe',
        shipTo: 'Netherland',
        basePrice: '$1100',
        purchasedPrice: '$7300',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-5',
        purchasedOn: '28/09/2019',
        customer: 'Edward',
        shipTo: 'Indonesia',
        basePrice: '$3600',
        purchasedPrice: '$4800',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-6',
        purchasedOn: '28/09/2019',
        customer: 'Stella',
        shipTo: 'Japan',
        basePrice: '$5600',
        purchasedPrice: '$3600',
        status: 'On hold',
        action: ''
    },
    {
        id: 'XN-7',
        purchasedOn: '28/09/2019',
        customer: 'Jaqueline',
        shipTo: 'Germany',
        basePrice: '$1100',
        purchasedPrice: '$6300',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-8',
        purchasedOn: '29/09/2019',
        customer: 'Tim',
        shipTo: 'Italy',
        basePrice: '$6300',
        purchasedPrice: '$2100',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-9',
        purchasedOn: '29/09/2019',
        customer: 'John',
        shipTo: 'Tokyo',
        basePrice: '$2100',
        purchasedPrice: '$6300',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-10',
        purchasedOn: '29/09/2019',
        customer: 'Tom',
        shipTo: 'Germany',
        basePrice: '$1100',
        purchasedPrice: '$2300',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-11',
        purchasedOn: '30/09/2019',
        customer: 'Aleena',
        shipTo: 'New York',
        basePrice: '$1600',
        purchasedPrice: '$3500',
        status: 'Pending',
        action: ''
    },
    {
        id: 'XN-12',
        purchasedOn: '01/10/2019',
        customer: 'Alphy',
        shipTo: 'Brazil',
        basePrice: '$5500',
        purchasedPrice: '$7200',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-13',
        purchasedOn: '02/10/2019',
        customer: 'Twinkle',
        shipTo: 'Italy',
        basePrice: '$1560',
        purchasedPrice: '$2530',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-14',
        purchasedOn: '02/10/2019',
        customer: 'Catherine',
        shipTo: 'Brazil',
        basePrice: '$1600',
        purchasedPrice: '$5600',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-15',
        purchasedOn: '05/10/2019',
        customer: 'Daniel',
        shipTo: 'Singapore',
        basePrice: '$6800',
        purchasedPrice: '$9800',
        status: 'Pending',
        action: ''
    },
    {
        id: 'XN-16',
        purchasedOn: '07/10/2019',
        customer: 'Tom',
        shipTo: 'Tokyo',
        basePrice: '$1600',
        purchasedPrice: '$6500',
        status: 'On hold',
        action: ''
    },
    {
        id: 'XN-17',
        purchasedOn: '07/10/2019',
        customer: 'Cris',
        shipTo: 'Tokyo',
        basePrice: '$2100',
        purchasedPrice: '$6300',
        status: 'Open',
        action: ''
    },
    {
        id: 'XN-18',
        purchasedOn: '09/10/2019',
        customer: 'Tim',
        shipTo: 'Italy',
        basePrice: '$6300',
        purchasedPrice: '$2100',
        status: 'Closed',
        action: ''
    },
    {
        id: 'XN-19',
        purchasedOn: '11/10/2019',
        customer: 'Jack',
        shipTo: 'Tokyo',
        basePrice: '$3100',
        purchasedPrice: '$7300',
        status: 'Pending',
        action: ''
    },
    {
        id: 'XN-20',
        purchasedOn: '14/10/2019',
        customer: 'Tony',
        shipTo: 'Germany',
        basePrice: '$1100',
        purchasedPrice: '$2300',
        status: 'On hold',
        action: ''
    },
];

const columns = [
    //   {
    //     dataField: 'id',
    //     text: 'Order #',
    //     sort: true
    //   }, 
    //   {
    //     dataField: 'purchasedOn',
    //     text: 'ublished On',
    //     sort: true
    //   }
    {
        dataField: 'customer',
        text: 'Book Name',
        sort: true
    },
    {
        dataField: 'shipTo',
        text: 'Description',
        sort: true
    },
    //    {
    //     dataField: 'basePrice',
    //     text: 'Base Price',
    //     sort: true
    //   }, {
    //     dataField: 'purchasedPrice',
    //     text: 'Purchased Price',
    //     sort: true
    //   }, 

    {
        dataField: 'status',
        text: 'Status',
        sort: true,
        formatter: (cellContent, row) => {
            if (cellContent === 'On hold') {
                return (
                    <label className="badge badge-info">On hold</label>
                );
            } else if (cellContent === 'Pending') {
                return (
                    <label className="badge badge-danger">Pending</label>
                );
            } else if (cellContent === 'Closed') {
                return (
                    <label className="badge badge-success">Closed</label>
                );
            } else if (cellContent === 'Open') {
                return (
                    <label className="badge badge-warning">Open</label>
                );
            }
        }
    }, {
        dataField: 'action',
        text: 'Action',
        sort: false,
        formatter: () => {
            return (
                <div>
                    <div className=" option-btn">
                       <Link to="/edit_audio"> <i className='icon-music-tone-alt text-primary'></i></Link>
                        <Link  to="/edit_data"><i className="icon-pencil text-primary"></i></Link>
                        <i className="mdi mdi-delete text-primary"></i>
                    </div>
                </div>
            );
        }
    }
];

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}];

export class BookListing extends Component {
    constructor() {
        super();
        this.state = {
            MdShow: false
        };
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Book Listing
                    </h3>
                    {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data Tables</li>
            </ol>
          </nav> */}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                {/* <h4 className="card-title">Users</h4> */}
                                <div className='text-right'>
                                    <button onClick={() => this.setState({ MdShow: true })} type="button" className="btn btn-primary btn-fw">Add New</button>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <ToolkitProvider
                                            keyField="id"
                                            bootstrap4
                                            data={products}
                                            columns={columns}
                                            search
                                        >
                                            {
                                                props => (
                                                    <div>
                                                        <div className="d-flex align-items-center">
                                                            <p className="mb-2 mr-2">Search in table:</p>
                                                            <SearchBar {...props.searchProps} />
                                                        </div>
                                                        <BootstrapTable
                                                            defaultSorted={defaultSorted}
                                                            pagination={paginationFactory()}
                                                            {...props.baseProps}
                                                            wrapperClasses="table-responsive"
                                                        />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.MdShow}
                    onHide={() => this.setState({ MdShow: false })}
                    aria-labelledby="example-modal-sizes-title-md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='row'>
                            <div className='col-12'>
                                <form>
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Book Name</label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="text" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-12">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Description</label>
                                                <div className="col-sm-9">
                                                    <textarea className='form-control'></textarea>
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="fleex-wrap">
                        <Button variant="success m-2" onClick={''}>Submit</Button>
                        <Button variant="light m-2" onClick={() => this.setState({ MdShow: false })}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BookListing
