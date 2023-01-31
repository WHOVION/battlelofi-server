let db = require('./models')

const postCRUD = async () => { 
    try {
        const newUser = await db.User.findOne({
            name: 'qw'
        }).populate('host')
        
        


        const newEvent = await db.Event.create({
            name: 'CoD',
            location: 'new york',
            date: 'tomorrow',
            time: '6pm',
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