import React from 'react';
import TopBar from './TopBar';

export default {
    title: 'organisms/TopBar',
    component: TopBar,
};

const Template = (args : any) => <TopBar {...args}/>;

export const Primary = Template.bind({});
