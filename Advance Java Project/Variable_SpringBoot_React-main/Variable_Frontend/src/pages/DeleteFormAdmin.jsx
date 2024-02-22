import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productService from '../services/product.service';
import { Link } from 'react-router-dom';
import { Footer } from '../components';

function DeleteFormAdmin() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state;
    
    useEffect(() => {
        // Add any necessary code if needed
    }, [product]);

    const handleDeleteProduct = () => {
         console.log(product);
        productService.deleteProduct(product).then((resp) => {
            // console.log(resp.   data);
            toast.success("Product Deleted", { autoClose: 1500 });
                navigate('/updateproduct');
        });
    };

    return (
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">Delete Product</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <div className="text-center">
                            <button className="my-2 mx-auto btn btn-danger" onClick={handleDeleteProduct}>
                                Delete
                            </button>
                        </div>
                        <div className="text-center">
                            <Link to="/updateproduct" className="my-2 mx-auto btn btn-dark">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DeleteFormAdmin;
