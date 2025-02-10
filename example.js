let carInfo = {
    "brands" : [
      {
        "id": 1,
        "name": "Honda",
        "cars": [
          {
            "id": 101,
            "name": "Honda City 2025",
            "price": "46.6 - 59.0 lacs",
            "mileage": "12 to 16 km/l",
            "transmission": "Automatic & Manual",
            "fuelType": "Petrol",
            "engine": "1199 cc to 1497 cc",
            "colors": [
              {
                "name": "White",
                "image": "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"
              },
              {
                "name": "Black",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIzfzp-JXHrw-xyGXL5qvZQE5WdlRVIK7Ig&s"
              }
            ]
          },
          {
            "id": 102,
            "name": "Honda Civic 2025",
            "price": "86.6 - 99.0 lacs",
            "mileage": "11 to 14 km/l",
            "transmission": "Automatic",
            "fuelType": "Petrol",
            "engine": "1498 cc",
            "colors": [
              {
                "name": "Silver",
                "image": "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
              },
              {
                "name": "Black",
                "image": "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Toyota",
        "cars": [
          {
            "id": 101,
            "name": "Honda City 2025",
            "price": "46.6 - 59.0 lacs",
            "mileage": "12 to 16 km/l",
            "transmission": "Automatic & Manual",
            "fuelType": "Petrol",
            "engine": "1199 cc to 1497 cc",
            "colors": [
              {
                "name": "White",
                "image": "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"
              },
              {
                "name": "Black",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIzfzp-JXHrw-xyGXL5qvZQE5WdlRVIK7Ig&s"
              }
            ]
          },
          {
            "id": 102,
            "name": "Honda Civic 2025",
            "price": "86.6 - 99.0 lacs",
            "mileage": "11 to 14 km/l",
            "transmission": "Automatic",
            "fuelType": "Petrol",
            "engine": "1498 cc",
            "colors": [
              {
                "name": "Silver",
                "image": "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
              },
              {
                "name": "Black",
                "image": "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
              }
            ]
          }
        ]
      }
    ]
}

let brandList = []
let tempCarList = []
let carList = []
for(let brand in carInfo['brands']){
    brandList[brandList.length] = carInfo['brands'][brand]['name']
    tempCarList[tempCarList.length] = carInfo['brands'][brand]['cars']
}



// console.log(brandList);
// console.log(carList);
tempCarList.forEach((v,i) => {
    for(let j =0; j < 2; j++){
        carList.push(tempCarList[i][j])
        // console.log()
    }
})

console.log(carList)