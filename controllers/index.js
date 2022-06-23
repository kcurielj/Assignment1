/********************************************************
* File: index.ejs
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 04/Jun/22
********************************************************/


exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'Home',
        subtitle: 'Welcome to my Portfolio/Page. Here you will find information about me, as well as see my previous work and experience.',
        paragraphHeader: 'Mission Statement' ,
        paragraph: 'The purpose is to bring the highest quality product to the user. Satisfying all the explicit and implicit requirements and, specifically in our case, to bring fun to the player.',
        userName: req.user ? req.user.userName : ''
        
    });
}

exports.projects = function(req, res, next) {
    res.render('projects', { 
        title: 'Projects',
        header1: 'Hardlight',
        header2: 'Mandala Matcher [IN PROGRESS]',
        header3: 'MedieWheel of Time [IN PROGRESS]',
        param1: 'Explore an abandoned factory in the distant future, ruled by a rogue AI. Harlight is a puzzle platformer with simple movement mechanics but interesting puzzles with colored crystals to activate switches and progress through the levels.',
        param2: 'Match mandala patterns to uncover amazing creatures on a secret continent. Mandala Matcher is a casual mobile game where the player matches mandala patterns in order to progress and uncover different creatures.', 
        param3: 'A brave knight must delve into the catacombs, home of the necromancer; but he has a secret weapon: an action shotgun. MedieWheel of Time is an action 3d shooter where the player must fight and explore a dungeon with a modern arsenal of weapons.', 
        userName: req.user ? req.user.userName : ''
    });
}

exports.about = function(req, res, next) {
    res.render('index', { 
        title: 'About',
        subtitle: '',
        paragraphHeader: 'About me' ,
        paragraph: 'My name is Kevin Curiel and I am a video game designer. My skills and projects can be seen in the "Services" and "Projects" respectively. Aside from that, I consider myself a hardworker person that knows how to work and be part of a tema to achive something bigger than ourselves. My hobbies include watching movies, playing board games and pleying video games.',
        userName: req.user ? req.user.userName : ''
    });
}

exports.services = function(req, res, next) {
    res.render('projects', { 
        title: 'Services',
        header1: 'Unity',
        header2: 'Blender',
        header3: 'Playdate',
        param1: 'Unity is a cross-platform game engine developed by Unity Technologies. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms.',
        param2: 'Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.',
        param3: 'Playdate is a handheld video game console developed by Panic. As well as buttons and a directional pad, the device has a mechanical crank on its side.',    
        userName: req.user ? req.user.userName : ''
    });
}


exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact' });
}