import { category, message, tasks,members,settings,unsplash,
    mood1, mood2, mobileImage, gImg1, gImg2, gImg3, gImg4,
    green,blue,purple,orange
    } from './images'

export const categories = [
    { name: 'Home' , icon: category},
    { name: 'Messages' , icon: message },
    { name: 'Tasks' , icon: tasks },
    { name: 'Members' , icon: members  },
    { name: 'Settings' , icon: settings }
]

export const list = [
    { name: 'Mobile App', icon: green},
    { name: 'Website Redesign', icon:orange},
    { name: 'Design System', icon:purple},
    { name: 'Wireframes', icon:blue}
]

export const data = [
    {
        group: 'To Do',
        id: '1',
        items: [
            { title: 'Brainstorming', detail: 'Brainstorming brings team members&apos; diverse experience into play.', comments:'12 comments', files:'0 files',button:'Low',profile:gImg2},
            { title: 'Research', detail: 'User research helps you to create an optimal product for users.', comments:'10 comments', files:'3 files',button:'High',profile:gImg1},
            { title: 'Wireframes', detail: 'Low fidelity wireframes include the most basic content and visuals.', comments:'5 comments', files:'2 files',button:'High',profile:gImg2},
        ]
    },
    {
        group:'On Progress',
        id: '2',
        items: [
            { title:'Onboarding Illustrations',detail:'', image:[unsplash], comments:'14 comments', files:'15 files',button:'Low',profile:gImg3},
            { title:'Moodboard',detail:'', image:[mood1, mood2], comments:'9 comments', files:'10 files',button:'Low',profile:gImg4},        
        ]
    },
    {
        group:'Done',
        id: '3',
        items: [
            { title:'Mobile App Design',detail:'', image:[mobileImage], comments:'12 comments', files:'15 files',button:'Completed',profile:gImg1},
            { title:'Design System', detail:'It just needs to adapt the UI from what you did before', comments:'12 comments', files:'15 files',button:'Completed',profile:gImg3}
        ]
    }
]
