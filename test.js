let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'eszra'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            name: 'My event',
            location: 'my house',
            date: 'tomorrow',
            time: '5pm',
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