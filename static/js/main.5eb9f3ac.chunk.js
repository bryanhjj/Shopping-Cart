(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(18),c=a.n(s),r=(a(28),a(16)),o=a(11),d=a(19),l=a(20),h=a(8),m=a(23),u=a(22),j=(a(29),a(7)),b=a(0);var p=function(){return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)(j.b,{className:"links",to:"/Shopping-Cart/",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(j.b,{className:"links",to:"/shop",children:Object(b.jsx)("li",{children:"Shop"})}),Object(b.jsx)(j.b,{className:"links",to:"/about",children:Object(b.jsx)("li",{children:"About Us"})})]})})};var g=function(){return Object(b.jsxs)("div",{className:"home-container",children:[Object(b.jsxs)("div",{className:"home-content",children:[Object(b.jsx)("h1",{children:"The most reliable Mobile Suit distributor"}),Object(b.jsx)("h1",{children:"Founded since U.C. 0090"}),Object(b.jsx)(j.b,{to:"/shop",children:Object(b.jsx)("button",{className:"shop-now-btn",children:"Shop now"})})]}),Object(b.jsx)("div",{className:"test-triangle"}),Object(b.jsx)("footer",{children:Object(b.jsx)("div",{children:"All rights reserved. Design and specifications are subject to change without notice."})})]})};var f=function(e){var t=e.items,a=e.handleAddToCart,n=e.handleQtyChange,i={color:"white"};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"banner-container",children:Object(b.jsx)("img",{src:"https://bo2.ggame.jp/en/images/items/tit_ctg.png",alt:"items"})}),Object(b.jsx)("div",{className:"shop-container",children:t.map((function(e){return Object(b.jsxs)("div",{className:"item-container",children:[Object(b.jsx)("h3",{children:Object(b.jsx)(j.b,{to:"/shop/".concat(e.id),style:i,className:"item-name",children:e.name})}),Object(b.jsx)("img",{src:e.thumbnail,alt:e.name}),Object(b.jsxs)("h4",{children:[e.price," DP"]}),Object(b.jsx)("label",{htmlFor:e.name,children:"Quantity : "}),Object(b.jsx)("input",{type:"number",id:e.id,name:e.name,max:e.quantity,min:"1",step:"1",onChange:function(e){return n(e)}}),Object(b.jsxs)("h4",{children:["(Amount in stock : ",e.quantity," )"]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"add-button",type:"submit",value:"Add to cart",onClick:function(){return a(e)}})]},e.id)}))})]})};var O=function(){return Object(b.jsxs)("div",{className:"about-container",children:[Object(b.jsx)("div",{className:"banner-container",children:Object(b.jsx)("img",{src:"https://bo2.ggame.jp/en/images/info/tit_ctg.png",alt:"information"})}),Object(b.jsx)("div",{className:"about-info",children:Object(b.jsxs)("div",{className:"about-info-inner",children:[Object(b.jsx)("div",{className:"info-top",children:Object(b.jsx)("h3",{children:"About us"})}),Object(b.jsxs)("article",{className:"about-description",children:[Object(b.jsx)("p",{children:"Founded since U.C. 0090, we have been supplying our customers with reliable Mobile Suits at affortable prices."}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Our Mobile Suits come from reliable sources, and some even from the manufacturers themselves such as Anahiem Electronics."}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"With our latest supply ships deployed, we'll ensure your Mobile Suits are delivered to you safely, and swiftly."})]})]})})]})};var x=function(e){var t,a=e.cartItems,n=e.handleRemoveFromCart,i=e.handleOrderTotal,s=e.show,c=e.onClose,r=function(e){if("object"!==typeof e)return!0};return t=a.every(r)?Object(b.jsx)("div",{id:"myModal",className:"modal",onClick:c,children:Object(b.jsx)("h3",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:"Your cart is currently empty."})}):Object(b.jsx)("div",{id:"myModal",onClick:c,children:Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("div",{children:a.map((function(e){return r(e)?null:Object(b.jsxs)("div",{className:"cart-items",children:[Object(b.jsx)("h4",{className:"cart-item-name",children:e.name}),Object(b.jsx)("img",{src:e.thumbnail,alt:e.name,className:"cart-item-thumbnail"}),Object(b.jsxs)("h4",{className:"cart-item-price",children:[e.price," DP"]}),Object(b.jsxs)("h4",{className:"cart-item-quantity",children:["Quantity : ",e.quantity]}),Object(b.jsx)("button",{onClick:function(){return n(e.id)},className:"cart-remove-btn",children:"Remove from cart"})]},e.id)}))}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h4",{children:["Total cost: ",i(a)," DP"]}),Object(b.jsx)("button",{onClick:function(){return alert("Thank you for your purchase!")},className:"checkout-btn",children:"Checkout"})]})]})})}),s?Object(b.jsx)("div",{children:t}):null};var v=function(e){var t=e.items,a=e.handleAddToCart,n=e.handleQtyChange,i=function(e){return t.findIndex((function(t){return t.id===e}))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"item-detail-container",children:[Object(b.jsxs)("div",{className:"full-size-img-container",children:[Object(b.jsx)("h3",{className:"img-item-name",children:t[i(e.match.params.id)].name}),Object(b.jsx)("img",{src:t[i(e.match.params.id)].fullImg,alt:t[i(e.match.params.id)].name,className:"full-img"})]}),Object(b.jsxs)("div",{className:"details-content",children:[Object(b.jsx)("h2",{className:"item-title",children:t[i(e.match.params.id)].name}),Object(b.jsx)("br",{}),Object(b.jsxs)("table",{className:"item-table",children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:"Description"})}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:t[i(e.match.params.id)].description})})]})]})]}),Object(b.jsxs)("div",{className:"mini-shop",children:[Object(b.jsx)("label",{htmlFor:t[i(e.match.params.id)].name,children:"Quantity : "}),Object(b.jsx)("input",{type:"number",id:t[i(e.match.params.id)].id,name:t[i(e.match.params.id)].name,max:t[i(e.match.params.id)].quantity,min:"1",step:"1",onChange:function(e){return n(e)}}),Object(b.jsxs)("p",{children:["(",t[i(e.match.params.id)].quantity," in stock)"]}),Object(b.jsxs)("h3",{children:["Price : ",t[i(e.match.params.id)].price," DP"]}),Object(b.jsx)("input",{className:"add-button",type:"submit",value:"Add to cart",onClick:function(){return a(t[i(e.match.params.id)])}})]})]})},y=a(2),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleAddToCart=function(t){if(0!==e.state.orderQuantity.length){var a=e.state.orderQuantity.findIndex((function(e){return t.id===e.id})),n={name:t.name,price:t.price,quantity:e.state.orderQuantity[a].value,id:t.id,thumbnail:t.thumbnail},i=Object(o.a)(e.state.cartItems);if(-1===i.findIndex((function(e){return e.id===n.id})))i.push(n);else{var s=i.findIndex((function(e){return e.id===n.id}));i[s]=n}e.setState({cartItems:i})}else alert("Please specify a quantity before placing an order.")},e.handleRemoveFromCart=function(t){var a=Object(o.a)(e.state.cartItems),n=a.findIndex((function(e){return e.id===t}));a.forEach((function(e){return console.log(e.id)})),console.log(n,t),a.splice(n,1),e.setState({cartItems:a})},e.handleQtyChange=function(t){var a=t.target,n={name:a.name,id:a.id,value:a.value},i=Object(o.a)(e.state.orderQuantity);if(-1===i.findIndex((function(e){return e.id===n.id})))i.push(n);else{var s=i.findIndex((function(e){return e.id===n.id}));i[s]=n}e.setState({orderQuantity:i})},e.handleOrderTotal=function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)},e.state={items:[{name:"Zaku II",price:4e4,quantity:10,id:"MS-06F",thumbnail:"https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_bw924ij7.png",fullImg:"https://static.wikia.nocookie.net/gbo2/images/2/2f/Zaku_II.png",description:"The mass production MS created by the Principality of Zeon Forces as the successor to the Zaku I, which it successfully outclassed in every aspect. It continued to be used as the primary weapon in the invasion of Earth, proving versatile enough to suppress territory at astonishing speed."},{name:"Dom",price:6e4,quantity:12,id:"MS-09B",thumbnail:"https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_irxneo9i.png",fullImg:"https://rpggamefestival.files.wordpress.com/2020/04/sem-tc3adtulo.png",description:"This mechanical marvel used heat kernel jet engines on its legs to allow for high mobile hovering movement. Its standard primary weapon, the giant bazooka, provided considerable offensive power, while it was also boasted an abundance of armor for defense, and mobility from its hover capabilities. This combination of abilities made it one of the supreme ground type suits of its time."},{name:"Jegan",price:8e4,quantity:6,id:"RGM-89",thumbnail:"https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_jg67byv5.png",fullImg:"https://imgs.aixifan.com/content/2021_3_24/1.6165152536844108E9.jpeg?h=750&w=700&s=224598&imageslim",description:"The main mass-produced MS of the Earth Federation Forces, which was developed as a new generation standard by fusing the GM system and the technology of Nemo and Nero developed by Anaheim Electronics. Unlike the appearance, the armor of each part has a balance that balances mobility while maintaining sufficient strength, and has high elasticity."},{name:"Nemo III",price:72e3,quantity:20,id:"MSA-004K",thumbnail:"https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_R6ThcS4W.png",fullImg:"https://imgs.aixifan.com/content/2020_6_21/1.5927128307155802E9.jpeg?h=800&w=750&s=195740&imageslim",description:"It's essentially a re-equipped Nemo II, which gained performance from its upgraded generator, but fell short of expectations in output and stability. It's E-Pac-powered beam cannon improves its firepower enough to fight against battleships without affecting its output."},{name:"Gundam GP01Fb",price:12e4,quantity:11,id:"RX-78GP01Fb",thumbnail:"https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_gtf3bf3.png",fullImg:"https://s1.zerochan.net/RX-78GP01-Fb.Gundam.%22Zephyrantes%22.Full.Burnern.600.3042794.jpg",description:"An upgrade to the heavily damaged Gundam GP01, retooled as a space unit. Enhancements to the Core Fighter II, originally intended for use in atmosphere, involved the removal of wings not necessary in space and attempts to improve zero gravity performance with the addition of new main thrusters, including a boost pod, achieving an increase in mobility."}],orderQuantity:[],cartItems:[],show:!1},e.handleAddToCart=e.handleAddToCart.bind(Object(h.a)(e)),e.handleRemoveFromCart=e.handleRemoveFromCart.bind(Object(h.a)(e)),e.handleQtyChange=e.handleQtyChange.bind(Object(h.a)(e)),e.handleOrderTotal=e.handleOrderTotal.bind(Object(h.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)("button",{className:"openCart",onClick:function(){return e.setState({show:!0})},children:"Your cart"}),Object(b.jsx)(x,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart,handleOrderTotal:this.handleOrderTotal,show:this.state.show,onClose:function(){return e.setState({show:!1})}}),Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{path:"/about",component:O}),Object(b.jsx)(y.a,{exact:!0,path:"/shop",children:Object(b.jsx)(f,{items:this.state.items,addToCart:this.addToCart,handleQtyChange:this.handleQtyChange,handleAddToCart:this.handleAddToCart})}),Object(b.jsx)(y.a,{path:"/shop/:id",render:function(t){return Object(b.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{items:e.state.items,handleQtyChange:e.handleQtyChange,handleAddToCart:e.handleAddToCart}))}}),Object(b.jsx)(y.a,{exact:!0,path:"/Shopping-Cart/",component:g})]})]})})}}]),a}(n.Component);c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5eb9f3ac.chunk.js.map