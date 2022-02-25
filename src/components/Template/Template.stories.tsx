import React from 'react';
import Template from './Template';

export default {
    title: 'template/Template',
    component: Template,
};

const Sample = (args : any) => <Template listItems={["ListItem 1", "ListItem 2", "ListItem 3", "ListItem 4", "ListItem 5", "ListItem 6"]}/>;

export const Primary = Sample.bind({});
