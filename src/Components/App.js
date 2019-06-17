import React from 'react';
import ProductItem from './ProductItem';

export default class App extends React.Component {
    render() {
        const data = this.props.products.data;
        const productsList = data.map((listItem, i) => {
            return (<ProductItem key={i} item={listItem}/>);
        });
        return (
            <main className='grid container'>
                <div className='sub_category_page'>
                    <div className='column_right column_right_products_container'>
                        <div className='product__area'>
                            <div className='products_section'>
                                <div className="products_page pg_0">
                                    {productsList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}


