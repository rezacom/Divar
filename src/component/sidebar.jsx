import React from 'react';
import { makeStyles, jssPreset ,StylesProvider} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import rtl from 'jss-rtl';
import { create } from 'jss';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  ulItem: {
      marginLeft: '0 !important',
      marginRight: 17
  }
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <StylesProvider jss={jss}>
        <TreeView
        className="nav-sidebar"
        >
            <TreeItem nodeId="1" label="Applications" className="">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" />
                <TreeItem nodeId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="Material-UI">
                    <TreeItem nodeId="7" label="src" >
                        <TreeItem nodeId="8" label="index.js" />
                        <TreeItem nodeId="9" label="tree-view.js" />
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        </TreeView>
    </StylesProvider>
  );
}
