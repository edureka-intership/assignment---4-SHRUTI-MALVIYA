ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
    
    console.log(Object.keys(ratingData));
    
    rest = ratingData.map(({restaurant}) => restaurant);
    console.log(rest);
    console.log(ratingData.map(({rating}) => rating));
    
    let obj = {};
    for(let i=0;i<ratingData.length;i++){
      ratingData.forEach(value =>{
      obj[value.restaurant] = value.rating;
      
      });
    }
    console.log(obj);

    //List of all restaurants with average rating greater than or equal to 4.
    let sumData = {};

    for (let element of ratingData) {
        if (sumData[element.restaurant]) {
            sumData[element.restaurant].sum = sumData[element.restaurant].sum + element.rating;
            sumData[element.restaurant].n++;
        } else {
            sumData[element.restaurant] = {
                sum: element.rating,
                n: 1
            };
        }
    }
    
      
    let averageData = [];
    
    for (let element of Object.keys(sumData)) {
        averageData.push({
            restaurant: element,
            rating: sumData[element].sum / sumData[element].n
        });
    }
    
    console.log('averageRating: ' + JSON.stringify(averageData));

        //Calculate the Average rating for all the restaurants. 
        
    var highest = [];
for (i = 0; i < ratingData.length; i++) { 
    
    // loop through and calculate the highest average reviews
    var rating = ratingData[i].rating;
    var reviews = ratingData[i].reviews;

    highest.push((rating * reviews) / rating);
  
    // work out the average score place 3 should be the highest

}

var highestRating = highest[0];
var pos = 0;
var pos1 = 1;
var pos2 = 7;
var pos3 = 6;


for (i = 0; i < highest.length; i += 1) {
    if (highestRating < highest[i]) {
        highestRating = highest[i];
        pos = i;
    }
}

console.log('Place with highest score : ' ,ratingData[pos]);
console.log('Place with highest score : ' ,ratingData[pos1]);
console.log('Place with highest score : ' ,ratingData[pos2]);
console.log('Place with highest score : ' ,ratingData[pos3]);
