const { db, Users, Posts } = require('./sqlDb');


//this function is async because it is making a db query 
const seed = async () => {
    try{
    //every time i need to talk to my db I need to use the await keyword

    //this is how we connect to the db and clear our old tables
        await db.sync({force: true}).then(() => {
            console.log('synced to db')
        })

        //each create method adds a row to its table
        await Users.create({
            name: 'RubeusH'
        })

        await Users.create({
            name: 'Baddock'
        })

        await Users.create({
            name: 'Hetty'
        })

        await Users.create({
            name: 'Alphard'
        })

        await Users.create({
            name: 'Baruffio'
        })

        await Users.create({
            name: 'Hbeery'
        })

        await Users.create({
            name: 'Alatar'
        });

        await Users.create({
            name: 'Falco'
        })

        await Users.create({
            name: 'Otto'
        })

        await Users.create({
            name: 'Cuthbert'
        })

        await Users.create({
            name: 'Humphrey22'
        })

        await Users.create({
            name: 'Bellatrix1'
        })

        await Users.create({
            name: 'Dracod'
        })

        await Users.create({
            name: 'Lupin'
        })

        await Users.create({
            name: 'Doug'
        })

        await Users.create({
            name: 'Mathis'
        })

        await Users.create({
            name: 'DJ Douglas!!!'
        })

        await Users.create({
            name: 'Joe Leahy'
        })

        await Posts.create({
            userid: 1,
            title: 'Fianto Duri, the complete tutorial',
            content: 'Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another persons shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.'
        })

        await Posts.create({
            userid: 2,
            title: 'Untransfiguration classes to become compulsory at Hogwarts',
            content: 'Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginners Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.'
        })

        await Posts.create({
            userid: 3,
            title: 'Cracking the Aurologist Interview',
            content: 'Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.'
        })

        await Posts.create({
            userid: 4,
            title: 'ASK WN: What do you use to digitalize your scrolls?',
            content: 'Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.',
        
        })

        await Posts.create({
            userid: 5,
            title: 'The Pragmatic Dragon Feeder',
            content: 'In The Pragmatic Dragon Feeder, the author Baruffio tell us how to give food to dragons in a way that we can follow. How did they get so smart? Arent they just as focused on details as other dragon feeders? The answer is that they paid attention to what they were doing while they were doing it.'
        })

        await Posts.create({
            userid: 6,
            title: 'The complete quidditch statistics',
            content: 'This is the Complete source for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.'
        })

        await Posts.create({
            userid: 100,
            title: 'The complete baking bible',
            content: 'This is the Complete sauce for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.'
        })
    } catch (err){
        console.error(err);
    }
}

seed();

/*

 'Fianto Duri, the complete tutorial', 'Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person''s shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.', (now() - interval '4 hours'));
'Untransfiguration classes to become compulsory at Hogwarts', 'Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginner''s Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.', (now() - interval '1 day'));
'Cracking the Aurologist Interview', 'Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.', (now() - interval '15 minutes'));
 'ASK WN: What do you use to digitalize your scrolls?', 'Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.', (now()));
 'The Pragmatic Dragon Feeder', 'In The Pragmatic Dragon Feeder, the author Baruffio tell us how to give food to dragons in a way that we can follow. How did they get so smart? Aren''t they just as focused on details as other dragon feeders? The answer is that they paid attention to what they were doing while they were doing it.', (now() - interval '3 hours'));
'The complete quidditch statistics', 'This is the Complete source for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.', (now() - interval '1 hour'));
'Ordinary Wizarding Levels study guide', 'The Ordinary Wizarding Level (O.W.L.) is, as you know, going to determine whether or not you will be allowed to continue taking that subject in subsequent school years, and whether they might be successful in obtaining a particular job. This guide help direct you to the most important information you need to know to ace the test', (now() - interval '1 hour'));
 'Is muggle-baiting ever acceptable?', 'Muggle-baiting can be a manifestation of anti-Muggle sentiments and is not acceptable according to the International Statute of Wizarding Secrecy - But, are there any circumstances under which it could be acceptable?', (now() - interval '10 minutes'));
 'Conserving waterplants cheatsheet.', 'This Cheat Sheet is dedicated to providing wizards the information they want in an approachable, entertaining way.', (now() - interval '24 hours'));
 'Could wizards prevent WW3?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fermentum enim. Pellentesque sodales ut risus eu porta. Duis dictum rhoncus semper. Proin accumsan mollis ligula, eget elementum nibh dignissim quis. Proin augue risus, mollis non neque in, molestie rutrum purus. Morbi pretium nisl a commodo.', (now() - interval '50 minutes'));
 'Show WN: Wand-Extinguishing Protection', 'This spell extinguishes the wand the caster is holding, a counter-charm to Lumos.', (now() - interval '1 hour'));
 'Do you still use Alarte Ascendare?', 'You''ve got levicorpus and Ascendio and wingardium leviosa, so is anyone still using Alarte Ascendare, too? (That is, unless you find wingardium leviosa too difficult to pronounce.)', (now() - interval '30 seconds'));
 'Mailing lists WN readers ought to know about?', 'I love to subscribe to information feeds through mailing list subscription. What do you subscribe to that you think others would benefit by if they were to as well?', (now() - interval '1 minute'));
 'How to tell which spell used on a bug?', 'Question: Are ther any non-jinx incantations available to detect which spell used on a bug?', (now()));

*/