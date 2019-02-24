export default {
  meals: [
    {
      id: 1,
      name: 'Pizza',
      size: 'Large',
      price: '5450',
      imageUrl:
          'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 2,
      name: 'Chicken Pizza',
      size: 'Medium',
      price: '3250',
      imageUrl:
          'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 3,
      name: 'Chicken Salad',
      size: 'Medium',
      price: '1200',
      imageUrl:
          'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ],
  orders: [
    {
      id: 1,
      date: '17/02/2019',
      customerId: 1,
      total: '5450',
      meal: [
        {
          name: 'Chicken Salad',
          size: 'Medium',
        },
      ],
      delivered: true,
    },
  ],
  menu: [
    {
      date: '18-02-2019',
      meal: [
        {
          name: 'Chicken Salad',
          size: 'Medium',
        },
      ],
    },
  ],
};
