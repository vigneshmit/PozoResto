import React, { useState } from 'react';
import { 
  Coffee, 
  Pizza, 
  Salad, 
  Beer, 
  DollarSign, 
  PlusCircle, 
  MinusCircle, 
  Check,
  CreditCard,
  Wallet,
  Phone
} from 'lucide-react';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', category: 'pizza', price: 12.99, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 2, name: 'Caesar Salad', category: 'salad', price: 8.49, image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 3, name: 'Cappuccino', category: 'coffee', price: 4.99, image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 4, name: 'Craft Beer', category: 'beer', price: 6.99, image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 5, name: 'Pasta Carbonara', category: 'pasta', price: 14.99, image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 6, name: 'Chocolate Cake', category: 'dessert', price: 7.99, image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

const categories = [
  { id: 'all', name: 'All', icon: <Check className="h-5 w-5" /> },
  { id: 'pizza', name: 'Pizza', icon: <Pizza className="h-5 w-5" /> },
  { id: 'salad', name: 'Salad', icon: <Salad className="h-5 w-5" /> },
  { id: 'coffee', name: 'Coffee', icon: <Coffee className="h-5 w-5" /> },
  { id: 'beer', name: 'Drinks', icon: <Beer className="h-5 w-5" /> },
];

const paymentMethods = [
  { id: 'card', name: 'Credit Card', icon: <CreditCard className="h-5 w-5" /> },
  { id: 'cash', name: 'Cash', icon: <Wallet className="h-5 w-5" /> },
  { id: 'mobile', name: 'Mobile', icon: <Phone className="h-5 w-5" /> },
];

const DemoSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
    
  const addToCart = (item: {id: number, name: string, price: number}) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? {...cartItem, quantity: cartItem.quantity + 1} 
          : cartItem
      ));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
  };
  
  const removeFromCart = (id: number) => {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === id 
          ? {...item, quantity: item.quantity - 1} 
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== id));
    }
  };
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See PozoResto in Action
          </h2>
          <p className="text-lg text-gray-600">
            Try our interactive demo to see how easy it is to manage orders and process payments.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Menu Section */}
            <div className="lg:col-span-2 p-6 border-r border-gray-200">
              <div className="mb-6">
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                        activeCategory === category.id
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => addToCart(item)}
                  >
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-amber-600 font-medium">${item.price.toFixed(2)}</span>
                        <button 
                          className="bg-amber-100 text-amber-700 p-1 rounded-full hover:bg-amber-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                        >
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Section */}
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-semibold mb-4">Current Order</h3>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your order is empty</p>
                  <p className="text-sm text-gray-400 mt-2">Click on items to add them to your order</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <button 
                            className="text-gray-400 hover:text-red-500 mr-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <MinusCircle className="h-5 w-5" />
                          </button>
                          <span className="text-gray-900">{item.quantity} x {item.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg text-gray-900 pt-2">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-700 mb-2">Payment Method</p>
                    <div className="flex space-x-3 mb-6">
                      {paymentMethods.map(method => (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center justify-center flex-1 py-2 rounded ${
                            paymentMethod === method.id
                              ? 'bg-amber-500 text-white'
                              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-2">{method.icon}</span>
                          {method.name}
                        </button>
                      ))}
                    </div>
                    
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Complete Payment
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;