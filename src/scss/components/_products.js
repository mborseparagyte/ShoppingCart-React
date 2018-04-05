import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'products-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 240 }],
    'animation': 'slideUp 300ms linear',
    'animationDelay': '150ms',
    'background': '#fff',
    'minHeight': [{ 'unit': '%V', 'value': NaN }],
    '<w991': {
      'paddingTop': [{ 'unit': 'px', 'value': 68 }]
    },
    '<w480': {
      'paddingTop': [{ 'unit': 'px', 'value': 52 }]
    }
  },
  'products': {
    'display': 'flex',
    'display': '-webkit-flex',
    'flexWrap': 'wrap',
    'WebkitFlexWrap': 'wrap',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    '<w768': {
      'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
    }
  },
  'products product': {
    'flexBasis': 'calc(25% - 32px)',
    'WebkitFlexBasis': 'calc(25% - 32px)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e0e0e0' }],
    '<w768': {
      'flexBasis': 'calc(33% - 16px)',
      'WebkitFlexBasis': 'calc(33% - 16px)',
      'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
    },
    '<w480': {
      'flexBasis': 'calc(50% - 16px)',
      'WebkitFlexBasis': 'calc(50% - 16px)',
      'minHeight': [{ 'unit': 'px', 'value': 313 }]
    },
    '<w320': {
      'flexBasis': '100%',
      'WebkitFlexBasis': '100%'
    },
    '>w1666': {
      'flexBasis': 'calc(20% - 32px)'
    }
  },
  'fadeIn-enter': {
    'opacity': '0.01'
  },
  'fadeIn-enterfadeIn-enter-active': {
    'opacity': '1',
    'transition': 'opacity 500ms ease-in'
  },
  'fadeIn-leave': {
    'opacity': '1'
  },
  'fadeIn-leavefadeIn-leave-active': {
    'opacity': '0.01',
    'transition': 'opacity 300ms ease-in'
  },
  'product:nth-child(1)': {
    'transitionDelay': '200ms'
  },
  'product:nth-child(2)': {
    'transitionDelay': '200ms'
  },
  'product:nth-child(3)': {
    'transitionDelay': '400ms'
  },
  'product:nth-child(4)': {
    'transitionDelay': '600ms'
  },
  'product:nth-child(5)': {
    'transitionDelay': '800ms'
  },
  'product:nth-child(6)': {
    'transitionDelay': '1000ms'
  },
  'product:nth-child(7)': {
    'transitionDelay': '1200ms'
  },
  'product:nth-child(8)': {
    'transitionDelay': '1400ms'
  },
  'product:nth-child(9)': {
    'transitionDelay': '1600ms'
  },
  'product:nth-child(10)': {
    'transitionDelay': '1800ms'
  },
  'product:nth-child(11)': {
    'transitionDelay': '2000ms'
  },
  'product:nth-child(12)': {
    'transitionDelay': '2200ms'
  },
  'productloading': {
    'animationDuration': '600ms',
    'animationFillMode': 'forwards',
    'animationIterationCount': 'infinite',
    'animationName': 'contentLoader',
    'animationTimingFunction': 'linear',
    'background': '#f6f7f8',
    'background': 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    'backgroundSize': '1000px 104px',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  'productloading product-image': {
    'height': [{ 'unit': 'px', 'value': 168 }],
    'width': [{ 'unit': 'px', 'value': 168 }],
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'background': 'rgba(255, 255, 255, 0.25)',
    '<w768': {
      'width': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'productloading product-text': {
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'background': 'rgba(255, 255, 255, 0.25)',
    '<w768': {
      'width': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'productloading product-button': {
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'background': 'rgba(255, 255, 255, 0.25)',
    '<w768': {
      'width': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'productloading product-button': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': 'px', 'value': 168 }],
    'height': [{ 'unit': 'px', 'value': 36 }]
  },
  'no-results': {
    'textAlign': 'center',
    'maxWidth': [{ 'unit': 'px', 'value': 520 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'no-results img': {
    'width': [{ 'unit': 'px', 'value': 320 }],
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0.33'
  },
  'no-results h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'color': '#666'
  },
  'no-results p': {
    'color': '#999'
  }
});
