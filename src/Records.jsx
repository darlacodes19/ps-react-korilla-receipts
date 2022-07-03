const Record = () => {
    const receipt1 =
    {
      person: 'Andre',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    }
  const receipt2 = {
    person: 'Katelyn',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  }
  const receipt3 = {
    person: 'Bruno',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
  
  

    return (  
    <div className="records">
        <div className="record">
        <h1> {receipt1.person} </h1>
        <p>  <span> Main: </span> {receipt1.order.main} </p>
        <p>  <span> Protein: </span> {receipt1.order.protein} </p>
        <p> <span> Rice: </span>  {receipt1.order.rice} </p>
        <p>  <span>Sauce: </span> {receipt1.order.sauce} </p>
        <p>  <span> Drink: </span> {receipt1.order.drink} </p>
        <p>  <span> Cost: </span> {receipt1.order.cost} </p>
        
        </div>

      <div className="record">
        <h1>  {receipt2.person} </h1>
        <p>  <span> Main: </span> {receipt2.order.main} </p>
        <p>  <span> Protein: </span> {receipt2.order.protein} </p>
        <p> <span> Rice: </span>  {receipt2.order.rice} </p>
        <p>  <span>Sauce: </span> {receipt2.order.sauce} </p>
        <p>  <span> Drink: </span> {receipt2.order.drink} </p>
        <p>  <span> Cost: </span> {receipt2.order.cost} </p>

        </div>

     <div className="record">
        <h1> {receipt3.person} </h1>
        <p>  <span> Main: </span>  {receipt3.order.main} </p>
        <p>  <span> Protein: </span> {receipt3.order.protein} </p>
        <p>  <span> Rice: </span> {receipt3.order.rice} </p>
        <p>  <span> Sauce:</span> {receipt3.order.sauce} </p>
        <p>  <span> Drink: </span> {receipt3.order.drink} </p>
        <p>  <span> Cost: </span> {receipt3.order.cost} </p>

     </div>

    </div>
    
 
    
    );

    
}
 
export default Record;