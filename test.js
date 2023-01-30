let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'eszra'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            location: 'ohio',
            date: '2000',
            time: '12 am',
            gameTitle: 'GTA',
            details: 'rob as many cars as you can'
        })


        newEvent.host = newUser._id
        await newEvent.save()
    
        console.log(newEvent)
        
    } catch(poo) {
        console.log(`postCRUD: ${poo}`)
    }
}

postCRUD()