import React from 'react'

const orderData = [
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "Sony PlayStation",
      productId: "pd601",
    },
    {
      orderId: "5678",
      date: "Mar 19, 2024",
      productName: "Apple iPhone",
      productId: "pd77",
    },
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "Sony PlayStation",
      productId: "pd548",
    },
    {
      orderId: "9101",
      date: "Mar 20, 2024",
      productName: "Apple iPhone",
      productId: "pd831",
    },
    {
      orderId: "2345",
      date: "Mar 21, 2024",
      productName: "LG TV",
      productId: "pd306",
    },
    {
      orderId: "6789",
      date: "Mar 18, 2024",
      productName: "Sony PlayStation",
      productId: "pd681",
    },
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "Microsoft Xbox",
      productId: "pd689",
    },
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "Apple iPhone",
      productId: "pd866",
    },
    {
      orderId: "3456",
      date: "Mar 22, 2024",
      productName: "Samsung Refrigerator",
      productId: "pd896",
    },
    {
      orderId: "7890",
      date: "Mar 23, 2024",
      productName: "Samsung Refrigerator",
      productId: "pd918",
    },
    {
      orderId: "4567",
      date: "Mar 24, 2024",
      productName: "Microsoft Xbox",
      productId: "pd547",
    },
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "LG TV",
      productId: "pd791",
    },
    {
      orderId: "2345",
      date: "Mar 21, 2024",
      productName: "Apple iPhone",
      productId: "pd116",
    },
    {
      orderId: "9101",
      date: "Mar 20, 2024",
      productName: "Sony PlayStation",
      productId: "pd54",
    },
    {
      orderId: "7890",
      date: "Mar 23, 2024",
      productName: "LG TV",
      productId: "pd722",
    },
    {
      orderId: "2345",
      date: "Mar 21, 2024",
      productName: "Sony PlayStation",
      productId: "pd813",
    },
    {
      orderId: "1234",
      date: "Mar 18, 2024",
      productName: "Samsung Refrigerator",
      productId: "pd606",
    },
    {
      orderId: "3456",
      date: "Mar 22, 2024",
      productName: "Sony PlayStation",
      productId: "pd970",
    },
    {
      orderId: "4567",
      date: "Mar 24, 2024",
      productName: "LG TV",
      productId: "pd249",
    },
    {
      orderId: "6789",
      date: "Mar 18, 2024",
      productName: "Samsung Refrigerator",
      productId: "pd440",
    },
  ];

  const groupedOrders = orderData.reduce((acc, curr) => {

    const existingOrder = acc.find(order => order.orderId === curr.orderId);
   // console.log(existingOrder,"existing")
    if (existingOrder) {
       
        existingOrder.products.push({ productName: curr.productName, productId: curr.productId });
    } else {
        
        acc.push({
            orderId: curr.orderId,
            date: curr.date,
            products: [{ productName: curr.productName, productId: curr.productId }]
        });
    }
    return acc;
}, []);

// console.log(groupedOrders);

const Users = () => {
    return (
        <div>
            {groupedOrders?.map((order) => {
                return (
                    <div className='p-4 border border-black rounded'>
                        <div className='flex justify-between py-2 border-b'>
                            <div>#{order?.orderId}</div>
                            <div>{order?.date}</div>
                        </div>

                        {/* products */}
                        <ul>
                            {order?.products?.map((product) => {
                                return (
                                    <li key={product.productId} className='py-2'>
                                   Product Name: {product.productName}<br/>
                                  Product Id:  {product.productId}
                                   </li>
                                   
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
