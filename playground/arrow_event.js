const event1={
    name: 'Birthday Party',
    guestList:['Atharv','Ayush','poonam'],
    printGuestList(){
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending the '+this.name)
        })
    }
}
event1.printGuestList()