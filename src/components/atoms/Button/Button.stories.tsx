import React from 'react';
import Button from './Button';

export default {
    title: 'atoms/Button',
    component: Button,
};

const Template = (args : any) => <Button {...args}/>;

export const Primary = Template.bind({});
