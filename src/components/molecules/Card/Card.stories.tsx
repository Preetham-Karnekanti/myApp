import React from 'react';
import Card from './Card';

export default {
    title: 'molecule/Card',
    component: Card,
};

const Template = (args : any) => <Card object={
    {
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        price: 30,
    }
}/>;

export const Primary = Template.bind({});
