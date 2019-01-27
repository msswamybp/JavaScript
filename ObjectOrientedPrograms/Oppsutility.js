var read = require('readline-sync')
var file = require('fs')
var sort=require('../utility/utility')

module.exports = {
    inventory(object) {
        var rice = object.Rice;
        var wheat = object.Wheat;
        var pulses = object.Pulses;

        for (var key in rice) {
            console.log("The total price of ", rice[key].ricename, " is ", rice[key].weight * rice[key].price);
        }
        console.log();
        for (var key in wheat) {
            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }
        console.log()
        for (var key in pulses) {
            console.log("the total price of ", pulses[key].pulse_name, " is ", pulses[key].weight * pulses[key].price);
        }


    },
    stockReport(object) {
        var stock = object.Stock
        var totalstock = 0
        for (var key in stock) {
            console.log()
            console.log("The total value of ", stock[key].stockname, " share is ", stock[key].numberofshare * stock[key].shareprice);
            var num = stock[key].numberofshare * stock[key].shareprice
            totalstock = totalstock + num
        }
        console.log()
        console.log("value of total stocks:" + totalstock)

    },
    inventoryManagement(data) {

        console.log("enter 1 for add")
        console.log("enter 2 for remove")
        console.log("enter 3 for print")
        console.log("enter 4 for exit")
        var num = read.questionInt("Select the any number:")
        switch (num) {
            case 1: this.add(data)
                break;
            case 2: this.remove(data)
                break;
            case 3: this.print(data)
                break;
            case 4: console.log("tata bye bye..")
                break;

        }

    },
    add(data) {
        var name = read.question("enter name of stack :")
        var price = read.questionInt("enter price of stock:")
        var quntity = read.questionInt("enter the quntity of stock:")
        data.Stock.push(
            {
                stockname: name,
                shareprice: price,
                numberofshare: quntity
            })
        var d = file.writeFileSync('Stock.json', JSON.stringify(data))

    },
    remove(data) {
        var name = read.question("enter name of stack to be remove:")
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].stockname == name) {
                var index = data.Stock.indexOf(data.Stock[i]);

                data.Stock.splice(index, 1);
            }
            var d = file.writeFileSync('Stock.json', JSON.stringify(data))

        }
    },
    print(data) {
        var stock = data.Stock
        for (const key in stock) {
            console.log(stock[key])
        }
    },
    address(data) {
        console.log("Enter 1 for add person information")
        console.log("Enter 2 for update person information")
        console.log("Enter 3 for remove person information")
        console.log("Enter 4 for sort the addressbook based on ZIP")
        console.log("Enter 5 for sort the addressbook based on firstname")
        console.log("Enter 6 for Print all addressbook information")
        var num = read.questionInt("Select  any number:")
        switch (num) {
            case 1: this.addperson(data)
                break;
            case 2: this.updateperson(data)
                break;
            case 3: this.removeperson(data)
                break;
            case 4: this.sortzip(data)
                break;
            case 5: this.sortfname(data)
                break;
            case 6: this.printadd(data)
                break;

        }

    },
    addperson(data) {
        var fname = read.question("Enter firstname of person :")
        var lname = read.question("Enter lastname of person :")
        var city1 = read.question("Enter city of person:")
        var state1 = read.question("Enter state of person:")
        var phonenum1 = read.question("Enter phonenumber:")
        data.Person.push(
            {
                personfname: fname,
                personlname: lname,
                phonenumber: phonenum1,
                city: city1,
                state: state1
            }
        )

        var d = file.writeFileSync('s.json', JSON.stringify(data))
    },
    updateperson(data) {
        var name = read.question("enter Firstname of person :")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for  zip code of person to be update")
                var num1 = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.firstname(data, index)
                        break;
                    case 2: this.lastname(data, index)
                        break;
                    case 3: this.phonenumber(data, index)
                        break;
                    case 4: this.city(data, index)
                        break;
                    case 5: this.state(data, index)
                        break;
                    case 6: this.zipcode(data, index)
                        break;
                }
            }
        }
    },
    firstname(data, index) {
        var fname1 = read.question("enter the name changed first name:")
        data.Person[index].personfname = fname1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    lastname(data, index) {
        var lname1 = read.question("enter changed last name:")
        data.Person[index].personlname = lname1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    phonenumber(data, index) {
        var phonenumber1 = read.question("enter  changed phonenumber:")
        data.Person[index].phonenumber = phonenumber1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    city(data, index) {
        var cityname = read.question("enter changed city name")
        data.Person[index].city= cityname
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    state(data, index) {
        var statename = read.question("enter the name changed first name")
        data.Person[index].state = statename
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    zipcode(data, index) {
        var zipcode = read.question("enter the name changed first name")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    },
    removeperson(data) {

        var name = read.question("enter name of person to be remove:")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                var dd = data.Person.splice(index, 1);
            }
            var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

        }

    },
    sortfname(data){
        let fname=data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname);
            return 0
            if (a.personfname > b.personfname);
            return 1
            if (a.personfname < b.personfname);
            return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);
        

    },
    sortzip(data) {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);

    },
    printadd(data) {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }


    }

}