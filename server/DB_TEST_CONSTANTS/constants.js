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


    artColumns: ['id serial primary key',
        'artist INTEGER REFERENCES test_accounts(id)',
        'price INTEGER',
        'image varchar',
        'material varchar',
        'width INTEGER',
        'height INTEGER',
        'lat varchar',
        'lng varchar',
        ' description varchar'],

    
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
        }]

}