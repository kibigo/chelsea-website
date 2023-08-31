const Players = [
    {id: 1, name:"Nicholas Jackson", position:"Striker", Age:22, Image:'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2023-24/Jackson_profile_avatar_23-24-removebg.png'},
    {id: 2, name:"Enzo Fernandez", position:"Mildfielder", Age:22, Image:'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2023-24/Avatar_3333x5000_Fernandez.png'},
    {id:3, name:"Benoit Badiashile", position:"Defender", Age:22, Image:'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2023-24/Avatar_3333x5000__Badiashile.png'},
    {id:4, name:"Thiago Silva", position:"Defender", Age:38, Image:'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2023-24/Avatar_3333x5000_Silva.png'},
    {id:5, name:"Reece James", position:"Defender", Age:23, Image:'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2023-24/Avatar_3333x5000_James.png'}
]

const getNextId = ((id) => () => ++id);

export {Players, getNextId}