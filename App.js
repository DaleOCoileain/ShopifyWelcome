import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* Don't forget this isn't a HTML place, things like div class need to be
changed to className to be able to work! */

class App extends Component {
  render() {
    return (
    <div className="Shopify">

     <button type="button" className="Polaris-Button Top-Left">
      <span className="Polaris-Button__Content">
       <span><a href="https://myshopify.com/admin">Back to Shopify</a></span>
      </span>
     </button>

    <p className="Shopify-StartUp">So you are ready to start working on your new Store? <br/>
                                  Well let us start by checking youve done the following steps</p>
     <div className="Polaris-Card">
      <div className="Polaris-Card__Section">
       <div className="Polaris-CalloutCard">
        <div className="Polaris-CalloutCard__Content">
         <div className="Polaris-CalloutCard__Title">
          <h2 className="Polaris-Heading">Customize the style of your new Store</h2>
         </div>
         <div className="Polaris-TextContainer">
         <p>Upload your store’s logo, change colors and fonts, and more.</p>
         </div>
         <div className="Polaris-CalloutCard__Buttons">
         <a className="Polaris-Button" href="https://myshopify.com/admin/themes" data-polaris-unstyled="true" target="_blank">
         <span className="Polaris-Button__Content">
         <span>Customize your Theme</span>
         </span>
         </a>
         <a href="https://help.shopify.com/themes/customization" target="_blank">
         <span className="Polaris-Button__Content">Learn more about customizing checkout</span>
         </a>
        </div>
       </div>
      <img src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg" alt="" className="Polaris-CalloutCard__Image"/>
     </div>
    </div>
   </div>


   <div className="Polaris-Card">
    <div className="Polaris-Card__Section">
     <div className="Polaris-CalloutCard">
      <div className="Polaris-CalloutCard__Content">
       <div className="Polaris-CalloutCard__Title">
        <h2 className="Polaris-Heading">Check that you have entered Shipping Rates for all of the countries you would like to ship to.</h2>
       </div>
       <div className="Polaris-TextContainer">
       <p>Setting up Shipping is simple. You either set it up by the products weight, or by its price</p>
       </div>
       <div className="Polaris-CalloutCard__Buttons">
       <a className="Polaris-Button" href="https://myshopify.com/admin/settings/shipping" data-polaris-unstyled="true" target="_blank">
       <span className="Polaris-Button__Content">
       <span>Customize your Shipping Settings</span>
       </span>
       </a>
       <a href="https://help.shopify.com/manual/shipping" target="_blank">
       <span className="Polaris-Button__Content">Learn more about setting up your stores Shipping Rates</span>
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>

  <div className="Polaris-Card">
   <div className="Polaris-Card__Header">
    <h2 className="Polaris-Heading">Shopifys Promise</h2>
   </div>
   <div className="Polaris-Card__Section">
    <div className="Polaris-Scrollable Polaris-Scrollable--vertical" data-polaris-scrollable="true" >
      <p>Using Shopify should be rewarding and Profitable, but it should also be enjoyable! Shopify is the platform that allows you to sell your products
      but it should be something you want to do! If there is anything we at Shopify can do to help you, we would be more than happy to help you, and you
      can reach out to the Shopify Success Gurus by Phone, Chat or Email at any time. We are here 24/7 for you! Websites dont sleep, and nor do we!
      Reach out to any of the lines available on <a href="https://support.shopify.com" target="_blank">Our Support Page</a> and we will do our best to help you run your business that bit easier</p>
    </div>
   </div>
  </div>


  </div>
    );
  }
}

export default App;
