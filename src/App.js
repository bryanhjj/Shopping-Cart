import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Shop from './components/shop';
import About from './components/about';
import Cart from './components/cart';
import ItemDetail from './components/itemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [ // the goods for sale
        {
          name:'Zaku II', 
          price: 40000, 
          quantity: 10, 
          id: 'MS-06F', 
          thumbnail: 'https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_bw924ij7.png',
          fullImg: 'https://static.wikia.nocookie.net/gbo2/images/2/2f/Zaku_II.png',
          description: 'The mass production MS created by the Principality of Zeon Forces as the successor to the Zaku I, which it successfully outclassed in every aspect. It continued to be used as the primary weapon in the invasion of Earth, proving versatile enough to suppress territory at astonishing speed.',
        },
        {
          name:'Dom', 
          price: 60000, 
          quantity: 12, 
          id: 'MS-09B', 
          thumbnail: 'https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_irxneo9i.png',
          fullImg: 'https://rpggamefestival.files.wordpress.com/2020/04/sem-tc3adtulo.png',
          description: 'This mechanical marvel used heat kernel jet engines on its legs to allow for high mobile hovering movement. Its standard primary weapon, the giant bazooka, provided considerable offensive power, while it was also boasted an abundance of armor for defense, and mobility from its hover capabilities. This combination of abilities made it one of the supreme ground type suits of its time.',
        },
        {
          name:'Jegan', 
          price: 80000, 
          quantity: 6, 
          id: 'RGM-89', 
          thumbnail: 'https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_jg67byv5.png',
          fullImg: 'https://imgs.aixifan.com/content/2021_3_24/1.6165152536844108E9.jpeg?h=750&w=700&s=224598&imageslim',
          description: 'The main mass-produced MS of the Earth Federation Forces, which was developed as a new generation standard by fusing the GM system and the technology of Nemo and Nero developed by Anaheim Electronics. Unlike the appearance, the armor of each part has a balance that balances mobility while maintaining sufficient strength, and has high elasticity.',
        },
        {
          name:'Nemo III', 
          price: 72000, 
          quantity: 20, 
          id: 'MSA-004K', 
          thumbnail: 'https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_R6ThcS4W.png',
          fullImg: 'https://imgs.aixifan.com/content/2020_6_21/1.5927128307155802E9.jpeg?h=800&w=750&s=195740&imageslim',
          description: 'It\'s essentially a re-equipped Nemo II, which gained performance from its upgraded generator, but fell short of expectations in output and stability. It\'s E-Pac-powered beam cannon improves its firepower enough to fight against battleships without affecting its output.',
        },
        {
          name:'Gundam GP01Fb', 
          price: 120000, 
          quantity: 11, 
          id: 'RX-78GP01Fb', 
          thumbnail: 'https://bo2.ggame.jp/jp/images/ms_stage/ms/thumb/thumb_gtf3bf3.png',
          fullImg: 'https://s1.zerochan.net/RX-78GP01-Fb.Gundam.%22Zephyrantes%22.Full.Burnern.600.3042794.jpg',
          description: 'An upgrade to the heavily damaged Gundam GP01, retooled as a space unit. Enhancements to the Core Fighter II, originally intended for use in atmosphere, involved the removal of wings not necessary in space and attempts to improve zero gravity performance with the addition of new main thrusters, including a boost pod, achieving an increase in mobility.',
        }
      ],
      orderQuantity: [], // keeps track of the order quantity (triggers when users manipulate the input for quantity)
      cartItems: [], // items added to the cart are pushed into here
      show: false // for manipulating the shopping cart (modal box)
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleOrderTotal = this.handleOrderTotal.bind(this);
  };

  handleAddToCart = (item) => {
    if (this.state.orderQuantity.length === 0) { // checks if the user specified the quantity before adding to cart
      alert("Please specify a quantity before placing an order.");
      return;
    } else {
      // const an object with the targets' details (order quantity is extracted from orderQuantity instead)
      // checks if the existing item is already in the cart (via items.id) and replaces it if there is
      // if not, it pushes the newly const'd object into cartItems
      const orderedItemQtyInd = this.state.orderQuantity.findIndex((element) => item.id === element.id);
      const orderedItem = {
        name: item.name,
        price: item.price,
        quantity: this.state.orderQuantity[orderedItemQtyInd].value,
        id: item.id,
        thumbnail: item.thumbnail
      };
      let orderList = [...this.state.cartItems];

      if (orderList.findIndex((element) => element.id === orderedItem.id) === -1) {
        orderList.push(orderedItem);
      } else {
        let existingItemIndex = orderList.findIndex((element) => element.id === orderedItem.id);
        orderList[existingItemIndex] = orderedItem;
      }
      this.setState({
        cartItems: orderList
      });
    }
  };

  handleRemoveFromCart = (itemId) => {
    // uses the item.id to identify the target and removes from cartItem accordingly
    let list = [...this.state.cartItems];
    let indOfTargetItem = list.findIndex((element) => element.id === itemId);
    list.forEach((element) => console.log(element.id));
    console.log(indOfTargetItem, itemId);
    list.splice(indOfTargetItem, 1);
    this.setState({
      cartItems: list
    });
  };

  handleQtyChange = (e) => {
    // updates orderQuantity the moment users interact with the <input> associated 
    // orderQuantity starts off as an empty array, will crash if users didn't specify a quantity prior to adding the 
    // said item into the cart, hence the check in line75 (App.js) is needed.
    const {name, id, value} = e.target;
    const targetItem = {name, id, value};
    let list = [...this.state.orderQuantity];

    if (list.findIndex((element) => element.id === targetItem.id) === -1) {
      list.push(targetItem);
    } else {
      let existingItemIndex = list.findIndex((element) => element.id === targetItem.id);
      list[existingItemIndex] = targetItem;
    }
    this.setState({
      orderQuantity: list
    });
};

  handleOrderTotal = order => {
  const totalCost = order.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);
  return totalCost;
};
  
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <button className='openCart' onClick={() => this.setState({show: true})}>Your cart</button>
          <Cart 
            cartItems = {this.state.cartItems}
            handleRemoveFromCart = {this.handleRemoveFromCart}
            handleOrderTotal = {this.handleOrderTotal}
            show = {this.state.show} 
            onClose = {() => this.setState({show: false})}
          />
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/shop' >
              <Shop 
                items={this.state.items} 
                addToCart = {this.addToCart} 
                handleQtyChange = {this.handleQtyChange} 
                handleAddToCart = {this.handleAddToCart}
              />
            </Route>
            <Route path='/shop/:id' render={(props) => <ItemDetail {...props} 
              items={this.state.items} 
              handleQtyChange = {this.handleQtyChange} 
              handleAddToCart = {this.handleAddToCart}
            /> } />          
            <Route exact path='/Shopping-Cart/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;