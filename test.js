let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'paul'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            name: 'event',
            location: 'friends house',
            date: 'next week',
            time: '3pm',
            timezone: 'pst',
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