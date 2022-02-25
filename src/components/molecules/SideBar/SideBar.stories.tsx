import React from 'react';
import SideBar from './SideBar';

export default {
    title: 'molecule/SideBar',
    component: SideBar,
};

const Template = (args: any) => <SideBar listItems={["ListItem 1", "ListItem 2", "ListItem 3", "ListItem 4", "ListItem 5", "ListItem 6"]} />;

export const Primary = Template.bind({});
