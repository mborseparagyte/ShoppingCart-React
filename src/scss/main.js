import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'Verdana, sans-serif'
  },
  'a': {
    'color': '#0063C3',
    'textDecoration': 'none'
  },
  'hr': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'hr:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'transparent': {
    'opacity': '0'
  },
  'content-wrapper': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -15 }],
    'minWidth': [{ 'unit': 'px', 'value': 620 }]
  },
  'header': {
    'position': 'fixed',
    'zIndex': '99',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'background': '#222F3F'
  },
  'header is-logo': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'header logo': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': 'bold',
    'color': '#FFFFFF'
  },
  'header logo:hover': {
    'textDecoration': 'none'
  },
  'header input-group': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 350 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '5px',
    'overflow': 'hidden'
  },
  'header input-group #q': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'header input-group #q:focus': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFBE61' }]
  },
  'header input-group input-group-btn button': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': '#FFBE61'
  },
  'aside': {
    'position': 'fixed',
    'overflowY': 'auto',
    'top': [{ 'unit': 'px', 'value': 60 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 230 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EEE' }],
    'background': '#FFFFFF'
  },
  'aside facet-category-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#888',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'aside facet-wrapper': {
    'paddingBottom': [{ 'unit': 'px', 'value': 12 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#EEE' }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.87 }]
  },
  'aside facet': {
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'aside facet-title': {
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }]
  },
  'aside facet-item': {
    'color': '#000000'
  },
  'aside a': {
    'color': '#000000'
  },
  'aside facet-item:hover': {
    'color': '#B32500',
    'textDecoration': 'none'
  },
  'aside a:hover': {
    'color': '#B32500',
    'textDecoration': 'none'
  },
  'aside facet-itemactive': {
    'fontWeight': 'bold'
  },
  'aside aactive': {
    'fontWeight': 'bold'
  },
  'aside facet-item input': {
    'marginRight': [{ 'unit': 'px', 'value': 4 }]
  },
  'aside a input': {
    'marginRight': [{ 'unit': 'px', 'value': 4 }]
  },
  'aside facet-name': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'whiteSpace': 'nowrap',
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'display': 'inline-block'
  },
  'aside facet-count': {
    'marginLeft': [{ 'unit': 'px', 'value': 4 }],
    'color': '#888'
  },
  'aside #colors:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'aside facet-color': {
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'display': 'block',
    'overflow': 'hidden',
    'float': 'left'
  },
  'aside facet-colorchecked': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.5)' }]
  },
  'aside facet-color[data-facet-value="White"]': {
    'backgroundColor': '#FFFFFF',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#CCC' }]
  },
  'aside facet-color[data-facet-value="White"]checked': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'aside facet-color[data-facet-value="Black"]': {
    'backgroundColor': '#000000'
  },
  'aside facet-color[data-facet-value="Black-brown"]': {
    'backgroundColor': '#382919'
  },
  'aside facet-color[data-facet-value="Pink"]': {
    'backgroundColor': '#C0116D'
  },
  'aside facet-color[data-facet-value="Gray"]': {
    'backgroundColor': '#6F6E6C'
  },
  'aside facet-color[data-facet-value="Blue"]': {
    'backgroundColor': '#5182A1'
  },
  'aside facet-color[data-facet-value="Green"]': {
    'backgroundColor': '#1E9C5E'
  },
  'aside facet-color[data-facet-value="Brown"]': {
    'backgroundColor': '#7B6A63'
  },
  'aside facet-color[data-facet-value="Red"]': {
    'backgroundColor': '#BC1C1A'
  },
  'aside facet-color[data-facet-value="Dark gray"]': {
    'backgroundColor': '#444348'
  },
  'aside facet-color[data-facet-value="Silver color"]': {
    'backgroundColor': '#AAAAA8'
  },
  'aside facet-color[data-facet-value="Light brown"]': {
    'backgroundColor': '#C19A6E'
  },
  'aside facet-color[data-facet-value="Black-brown stain"]': {
    'backgroundColor': '#4B4640'
  },
  'aside facet-color[data-facet-value="Off-white"]': {
    'backgroundColor': '#D0C8B4'
  },
  'aside facet-color[data-facet-value="Beige"]': {
    'backgroundColor': '#C9B8A3'
  },
  'aside facet-color[data-facet-value="Light green"]': {
    'backgroundColor': '#ABBD9B'
  },
  'aside facet-color[data-facet-value="White stain"]': {
    'backgroundColor': '#E4E1DC'
  },
  'aside facet-color[data-facet-value="Turquoise"]': {
    'backgroundColor': '#46BCC9'
  },
  'aside facet-color[data-facet-value="Birch effect"]': {
    'backgroundColor': '#CBBFA4'
  },
  'aside facet-color[data-facet-value="Yellow"]': {
    'backgroundColor': '#F5E500'
  },
  'aside facet-color[data-facet-value="Dark blue"]': {
    'backgroundColor': '#374063'
  },
  'aside facet-color[data-facet-value="Galvanized"]': {
    'backgroundColor': '#726F6A'
  },
  'aside facet-color[data-facet-value="Birch"]': {
    'backgroundColor': '#726F6A'
  },
  'aside facet-color[data-facet-value="Dark brown"]': {
    'backgroundColor': '#74523E'
  },
  'aside facet-color[data-facet-value="High gloss gray"]': {
    'backgroundColor': '#E5E5E5'
  },
  'aside facet-color[data-facet-value="Gray/white"]': {
    'backgroundColor': '#E5E5E5'
  },
  'aside facet-color[data-facet-value="Red/white"]': {
    'backgroundColor': '#FA757B'
  },
  'aside facet-color[data-facet-value="Clear"]': {
    'backgroundColor': '#D5DAE0'
  },
  'aside facet-color[data-facet-value="Matte black"]': {
    'backgroundColor': '#616872'
  },
  'aside facet-color[data-facet-value="Matte white"]': {
    'backgroundColor': '#DCDBD7'
  },
  'aside facet-color[data-facet-value="White stained oak effect"]': {
    'backgroundColor': '#E7E8E0'
  },
  'aside ais-price-ranges--form': {
    'marginTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'aside ais-price-ranges--currency': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 4 }]
  },
  'aside ais-price-ranges--input': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '2px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#888' }],
    'fontWeight': 'normal'
  },
  'aside ais-price-ranges--button': {
    'display': 'block',
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 22 }],
    'height': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 4 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#888' }],
    'borderRadius': '50%',
    'textAlign': 'center',
    'backgroundColor': '#EEE'
  },
  'aside ais-price-ranges--button:hover': {
    'color': '#0063C3',
    'backgroundColor': '#FFFFFF'
  },
  'aside ais-price-ranges--button:focus': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFBE61' }]
  },
  'results-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 240 }]
  },
  '#results-topbar': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  '#results-topbar:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  '#results-topbar sort-by': {
    'float': 'right'
  },
  '#results-topbar label': {
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }]
  },
  '#results-topbar #sort-by-selector': {
    'display': 'inline-block'
  },
  '#clear-all': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  '#clear-all btn': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  '#stats': {
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }]
  },
  '#hits': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': -0.005 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': -0.005 }]
  },
  '#hits:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'hit': {
    'width': [{ 'unit': '%H', 'value': 0.24 }],
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#EEE' }],
    'margin': [{ 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.005 }, { 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.005 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#EEE' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#f6f6f6' }],
    'position': 'relative',
    '<w960': {
      'width': [{ 'unit': '%H', 'value': 0.49 }]
    }
  },
  'hit product-picture-wrapper': {
    'display': 'table',
    'tableLayout': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'hit product-picture': {
    'display': 'table-cell',
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'hit product-picture img': {
    'WebkitTransition': 'opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)',
    'transition': 'opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)',
    'height': [{ 'unit': 'px', 'value': 150 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    '>w1400': {
      'height': [{ 'unit': 'string', 'value': 'inherit' }]
    }
  },
  'hit product-desc-wrapper': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'hit product-name': {
    'fontWeight': 'bold',
    'color': '#000000',
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 120 }]
  },
  'hit product-type': {
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': '#a2a2a2'
  },
  'hit product-rating': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'hit product-price': {
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }],
    'fontWeight': 'bold',
    'color': '#000000',
    'float': 'right',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }]
  },
  'hit em': {
    'color': '#000000',
    'fontStyle': 'normal',
    'backgroundColor': '#FFBE61'
  },
  '#pagination': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#EEE',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'em', 'value': 3 }],
    'textAlign': 'center'
  },
  '#pagination:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  '#pagination ais-pagination--item__active a': {
    'color': '#000000',
    'fontWeight': 'bold'
  },
  '#pagination ais-pagination--item__disabled': {
    'visibility': 'visible'
  },
  '#pagination ais-pagination--item__disabled a': {
    'color': '#bbbbbb'
  },
  '#pagination ais-pagination--item__disabled a:hover': {
    'cursor': 'default',
    'textDecoration': 'none'
  },
  '#pagination ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#pagination li': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  '#pagination fa': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 5 }]
  },
  'thank-you': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  }
});
