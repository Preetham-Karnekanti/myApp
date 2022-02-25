import React from 'react';
import Logo from './Logo';

export default {
    title: 'molecule/Logo',
    component: Logo,
};

const Template = (args : any) => <Logo {...args}/>;

export const Primary = Template.bind({});
