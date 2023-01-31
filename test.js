let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'paul'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            name: 'event test',
            location: 'test friends house',
            date: 'test next week',
            time: 'test 3pm',
            timezone: 'test pst',
            gameTitle: 'test smashbros',
            details: 'test friendly kickback event'
        })


        newEvent.host = newUser._id
        await newEvent.save()
    
        console.log(newEvent)
        
    } catch(poo) {
        console.log(`postCRUD: ${poo}`)
    }
}

postCRUD()