import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = (props) => {
    return (
        <div>
            <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button>Remove</button>
                                    <button>Update</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage