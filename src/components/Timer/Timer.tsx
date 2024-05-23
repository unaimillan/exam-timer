import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { useState } from 'react';

interface ITimerProps {
  initialDuration: Date
  start: () => void
  stop: () => void
  reset: () => void
}

export function Timer({initialDuration}:ITimerProps) {

  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [finishDate, setFinishDate] = useState<Date>(new Date(Date.now()));

  const timeLeft = Math.max(finishDate.getMilliseconds() - Date.now(), 0);

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}
