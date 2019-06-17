import React from 'react';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.nProduct = 1;
        this.isPack = false;
    }

    incProd = () => {
        this.nProduct++;
        this.forceUpdate();
    };
    decProd = () => {
        if (this.nProduct > 0) {
            this.nProduct--;
            this.forceUpdate();
        }
    };

    handleInput = (event) => {
        if(!isNaN(event.target.value)){
            this.nProduct = event.target.value;
            this.forceUpdate();
        }
    }

    changePack = () => {
        if (this.isPack) {
            this.isPack = false;
        } else {
            this.isPack = true;
        }
        this.forceUpdate();
    };

    parseAssocProduct = (assocProducts) =>{
        return assocProducts.split(';').map((listItem, i, arr) => {
            listItem = listItem.trim();
            if (listItem !== '') {
                if (arr.length - 2 === i) {
                    return <a key={i} href="#" className="url--link">{listItem}.</a>
                } else {
                    return (
                        <a key={i} href="#" className="url--link">{listItem}, </a>
                    );
                }
            }
        });
    }
    render() {
        let {productId, title, code, description, primaryImageUrl, assocProducts, unit, unitFull, unitRatio, unitAlt, unitRatioAlt, priceRetail, priceRetailAlt, priceGold, priceGoldAlt, isActive} = this.props.item;
        const assocProductsList = this.parseAssocProduct(assocProducts);
        const url = primaryImageUrl.substring(0, primaryImageUrl.length - 4) + '_220x220_1' + primaryImageUrl.substring(primaryImageUrl.length - 4);
        return (
            <div className="product product_horizontal">
                <span className="product_code">Код: {+code}</span>
                <div className="product_status_tooltip_container">
                    <span className="product_status">{isActive ? 'Наличие' : 'Нет в наличие'}</span>
                </div>
                <div className="product_photo">
                    <a href="#" className="url--link product__link">
                        <img src={url}/>
                    </a>
                </div>
                <div className="product_description">
                    <a href="#" className="product__link">{title}</a>
                </div>
                <div className="product_tags hidden-sm">
                    <p>Могут понадобиться: </p>
                    {assocProductsList}
                </div>
                <div className="product_units">
                    <div className="unit--wrapper">
                        <div className={this.isPack ? 'unit--select' : 'unit--select unit--active'}>
                            <p onClick={this.changePack} className="ng-binding">За м. кв.</p>
                        </div>
                        <div className={this.isPack ? 'unit--select unit--active' : 'unit--select'}>
                            <p onClick={this.changePack} className="ng-binding">За упаковку</p>
                        </div>
                    </div>
                </div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br/>клуба</span>
                    <span className="goldPrice">{this.isPack ? priceGoldAlt : priceGold}</span>
                    <span className="rouble__i black__i">
                                                <img src={process.env.PUBLIC_URL + '/img/currency.svg'}/>

                            </span>
                </p>
                <p className="product_price_default">
                    <span className="retailPrice">{this.isPack ? priceRetailAlt : priceRetail}</span>
                    <span className="rouble__i black__i">
                        <img src={process.env.PUBLIC_URL + '/img/currencyDim.svg'}/>
                    </span>
                </p>
                <div className="product_price_points">
                    <p className="ng-binding">Можно купить за 231,75 балла</p>
                </div>
                <div className="list--unit-padd"></div>
                <div className="list--unit-desc">
                    <div className="unit--info">
                        <div className="unit--desc-i"></div>
                        <div className="unit--desc-t">
                            <p>
                                <span className="ng-binding">Продается упаковками:</span>
                                <span
                                    className="unit--infoInn">{unitRatio} {unit} = {unitRatioAlt} {unitAlt} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product__wrapper">
                    <div className="product_count_wrapper">
                        <div className="stepper">
                            <input className="product__count stepper-input" type="text"
                                   value={this.nProduct} onChange={this.handleInput}/>
                            <span onClick={this.incProd} className="stepper-arrow up"> </span>
                            <span onClick={this.decProd} className="stepper-arrow down"> </span>
                        </div>
                    </div>
                    <span className="btn btn_cart" data-url="/cart/"
                          data-product-id={productId}>
                                                  <img className="ic ic_cart" src={process.env.PUBLIC_URL + '/img/cart.svg'}/>
                        <span className="ng-binding">В корзину</span>
                            </span>
                </div>
            </div>
        );
    }
}