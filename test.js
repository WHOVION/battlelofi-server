let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'paul'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            location: 'my house',
            date: 'tomorrow',
            time: '5pm',
            gameTitle: 'smashbros',
            details: 'friendly kickback event'
        })


        newEvent.host = newUser._id
        await newEvent.save()
    
        console.log(newEvent)
        
    } catch(poo) {
        console.log(`postCRUD: ${poo}`)
    }
}

postCRUD()