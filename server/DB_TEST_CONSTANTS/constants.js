module.exports = {
    dropAccounts: 'drop table test_accounts',
    accountColumns:
        ["id serial primary key",
            "firstname varchar",
            "lastname varchar",
            "password varchar",
            "username varchar",
            "email varchar",
            "lat varchar",
            "lng varchar",
            "bio varchar"],

    accounts: [
        {
            firstname: "Bob",
            lastname: "Ross",
            password: "password",
            username: "bobross",
            email: "bob@ross.com",
            lat: "33.987851",
            lng: "-118.470719",
            bio: "I artist!"
        }, {
            firstname: "Sam",
            lastname: "Sliver",
            password: "password",
            username: "samsliver",
            email: "am@sliver.com",
            lat: "33.987841",
            lng: "-118.470739",
            bio: "Silver artist!"
        }, {
            firstname: "Sam",
            lastname: "wise",
            password: "password",
            username: "sselfridge",
            email: "sam@selfridge.com",
            lat: "33.987844",
            lng: "-118.470733",
            bio: "Mein artist!"
        }],

    artColumns: ['id serial primary key',
        'title varchar',
        'artist INTEGER REFERENCES test_accounts(id)',
        'price INTEGER',
        'image varchar',
        'material varchar',
        'width INTEGER',
        'height INTEGER',
        'lat double precision',
        'lng double precision',
        ' description varchar'],


    arts: [
        {
            "title": "Broken City",
            "artist": 1,
            "price": 2000,
            "image": "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2018/04/mbinstudio4.jpg",
            "material": "Acrylic, Oil on Canvas",
            "width": 30,
            "height": 30,
            "lat": 33.987851,
            "lng": -118.470719,
            "description": "This original artwork is wired and ready to hang. The sides of this colorful artwork are painted and it does not require framing. This mixed media artwork is painted on canvas. It is signed by the artist on the front and the back. "
        },
        {
            "title": "The World VI",
            "artist": 1,
            "price": 6000,
            "image": "https://i.imgur.com/3XHzHJv.jpg",
            "material": "Oil, Epoxy, Resin on Canvas",
            "width": 60,
            "height": 30,
            "lat": 33.977851,
            "lng": -118.26,
            "description": "The surface "
        },
        {
            "title": "Happy 17/4",
            "artist": 2,
            "price": 3000,
            "image": "https://i.imgur.com/QkA5TH8.jpg?1",
            "material": "Oil on Canvas",
            "width": 47,
            "height": 40,
            "lat": 33.985,
            "lng": -118.44,
            "description": "This 40 inch tall by 47 "
        },
        {
            "title": "California Sunsets",
            "artist": 2,
            "price": 1600,
            "image": "https://i.imgur.com/3eGyg9n.jpg",
            "material": "Acrylic on Canvas",
            "width": 30,
            "height": 30,
            "lat": 33.975,
            "lng": -118.23,
            "description": "This 30 inch square"
        },
        {
            "title": "Pink Panther Cash Money",
            "artist": 3,
            "price": 3000,
            "image": "https://i.imgur.com/dWkBOn7.jpg",
            "material": "Acrylic, Spray Paint, Resin on Canvas",
            "width": 24,
            "height": 48,
            "lat": 33.981,
            "lng": -118.2,
            "description": "This one-of-a-kind 48 i"
        },
        {
            "title": "Valentine's Sweethearts",
            "artist": 3,
            "price": 1750,
            "image": "https://i.imgur.com/k2AVa14.jpg",
            "material": "Acrylic, Vintage Paper, Resin on Canvas",
            "width": 20,
            "height": 20,
            "lat": 33.97,
            "lng": -118.36,
            "description": "During "
        },
        {
            "title": "January",
            "artist": 2,
            "price": 1400,
            "image": "https://i.imgur.com/ckcZkrD.gif",
            "material": "Oil on Canvas",
            "width": 24,
            "height": 31,
            "lat": 40.7484,
            "lng": -73.9857,
            "description": "This colorful artwork is 31 inch tall by 24 inch wide. "
        },
        {
            "title": "Summer Sunset Surprise",
            "artist": 2,
            "price": 2500,
            "image": "https://i.imgur.com/pmZe0Ry.jpg",
            "material": "Mixed Media on Canvas",
            "width": 60,
            "height": 48,
            "lat": 40.7584,
            "lng": -73.9857,
            "description": "This large 48 inch high by "
        }
    ]
}



// CREATE TABLE sessions (
//     id integer SERIAL PRIMARY KEY,
//     sessionid text,
//     accountid integer REFERENCES accounts(id),
//     testid integer
// );