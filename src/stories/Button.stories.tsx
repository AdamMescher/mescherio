import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button/index';

storiesOf('Button', module).add('with Text', () => <Button text="Click Me" />);
