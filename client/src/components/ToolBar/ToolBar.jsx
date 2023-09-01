import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';
import styles from './ToolBar.module.css';

const onRunClick = () => {
  //redux
}

const ToolBar = () => (
  <Toolbar.Root className={styles.ToolbarRoot} aria-label="Formatting options">
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
      <Toolbar.ToggleItem className={styles.ToolbarToggleItem} value="bold" aria-label="Bold">
        <FontBoldIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem className={styles.ToolbarToggleItem} value="italic" aria-label="Italic">
        <FontItalicIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className={styles.ToolbarToggleItem}
        value="strikethrough"
        aria-label="Strike through"
      >
        <StrikethroughIcon />
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
    <Toolbar.Separator className={styles.ToolbarSeparator} />
    <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <Toolbar.ToggleItem className={styles.ToolbarToggleItem} value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem className={styles.ToolbarToggleItem} value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem className={styles.ToolbarToggleItem} value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
    <Toolbar.Separator className={styles.ToolbarSeparator} />
    <Toolbar.Link className={styles.ToolbarLink} href="#" target="_blank" style={{ marginRight: 10 }}>
      Edited 2 hours ago
    </Toolbar.Link>
    <Toolbar.Button className={styles.ToolbarButton} style={{ marginLeft: 'auto' }} onClick={onRunClick}>
      Run
    </Toolbar.Button>
  </Toolbar.Root>
);

export default ToolBar;
