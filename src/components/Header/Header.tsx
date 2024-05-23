import { Title, Text, Anchor } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Exam Timer
        </Text>
      </Title>
    </>
  );
}
