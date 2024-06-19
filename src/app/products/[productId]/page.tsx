// định nghĩa kiểu:

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = ({params}: ProductPropsType): Metadata => {
    return {
        title: `Page ${params.productId}`,    
    }
}



interface ProductPropsType {
    params: {
        productId: string
    }
}


function ProductDetails(props : ProductPropsType) {
    const {params} = props;
    // !hiển thị trang not found
    if (parseInt(params.productId) > 1000){
        notFound()
    }
    return ( 
    <div>
        <h1>Product Details</h1>
        <h2>Product ID: {params.productId}</h2>
    </div> 
    );
}

export default ProductDetails;