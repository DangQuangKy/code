import { Metadata } from "next";

export const metadata: Metadata = { 
    title:{
        absolute: 'Edit product'
    },
    description:"Edit product page"
}

function Edit({params} : {
    params: {
        productId: string,
    }
}) {
    return ( 
        <div>
            <h1>Edit</h1>
            <p>Product ID: {params.productId}</p>
        </div>
     );
}

export default Edit;