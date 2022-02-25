import React from 'react';
import TextField from './TextField';

export default {
    title: 'atoms/TextField',
    component: TextField,
};

const Template = (args : any) => <TextField {...args}/>;

export const Primary = Template.bind({});
