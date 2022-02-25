import React from 'react';
import Header from './Header';

export default {
    title: 'organisms/Header',
    component: Header,
};

const Template = (args : any) => <Header {...args}/>;

export const Primary = Template.bind({});
