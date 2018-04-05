import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'aside': {
    'position': 'fixed',
    'overflowY': 'auto',
    'top': [{ 'unit': 'px', 'value': 60 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 230 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'background': '#ffffff'
  },
  'aside facet-wrapper': {
    'paddingBottom': [{ 'unit': 'px', 'value': 12 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#eee' }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.87 }]
  },
  'aside aside facet-category-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#888',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'aside a': {
    'color': '#000000'
  },
  'aside facet-name': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'whiteSpace': 'nowrap',
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 6 }]
  },
  'aside facet-category-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#888',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'aside facet-title': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#000'
  },
  'aside ais-refinement-list-item': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'aside ais-body': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  }
});
