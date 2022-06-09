const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPer = order.order.delivery.deliveryPerson
    const entrgaP = order.name
    const tell = order.phoneNumber 
    const street = order.address.street
    const num = order.address.number
    const apart = order.address.apartment

        console.log(`Ola ${deliveryPer}, entrega para: ${entrgaP}, Telefone: ${tell}, R.${street}, Nº${num}, AP:${apart}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let payment = order.payment.total
    let name = order.name
    const drink = order.order.drinks.coke.type
    const pizza = order.order.pizza
    const pizzas = Object.keys(pizza)

    order[payment] = 50;
    order[name] = 'Luiz Silva';

    console.log(`Ola ${name}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${payment}`)
  }
  
  orderModifier(order);