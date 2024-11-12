import { $ } from '../utils/dom'

export const CSS_GRID_TEMPLATES = {
  grid: 'grid-template-columns: 1fr 6px 1fr; grid-template-rows: 1fr 6px 1fr',
  vertical: 'grid-template-columns: 1fr 6px 1fr 6px 1fr 6px 1fr; grid-template-rows: 1fr',
  horizontal: 'grid-template-columns: 1fr; grid-template-rows: 1fr 6px 1fr 6px 1fr 6px 1fr',
  top: 'grid-template-columns: 1fr 6px 1fr 6px 1fr; grid-template-rows: 1fr 6px 1fr',
  bottom: 'grid-template-columns: 1fr 6px 1fr 6px 1fr; grid-template-rows: 1fr 6px 1fr',
  left: 'grid-template-columns: 1fr 6px 1fr; grid-template-rows: 1fr 6px 1fr 6px 1fr',
  right: 'grid-template-columns: 1fr 6px 1fr; grid-template-rows: 1fr 6px 1fr 6px 1fr'
}

export const JS_GRID_TEMPLATES = {
  grid: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    },
    {
      track: 1,
      element: $('.third-gutter')
    }
    ],
    rowGutters: [{
      track: 1,
      element: $('.second-gutter')
    },
    {
      track: 1,
      element: $('.third-gutter')
    }
    ]
  },

  vertical: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    }, {
      track: 3,
      element: $('.second-gutter')
    }, {
      track: 5,
      element: $('.third-gutter')
    }]
  },
  horizontal: {
    rowGutters: [{
      track: 1,
      element: $('.first-gutter')
    }, {
      track: 3,
      element: $('.second-gutter')
    }, {
      track: 5,
      element: $('.third-gutter')
    }]
  },
  top: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    }, {
      track: 3,
      element: $('.second-gutter')
    }],
    rowGutters: [{
      track: 1,
      element: $('.third-gutter')
    }]
  },
  bottom: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    }, {
      track: 3,
      element: $('.second-gutter')
    }],
    rowGutters: [{
      track: 1,
      element: $('.third-gutter')
    }]
  },
  left: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    }],
    rowGutters: [{
      track: 1,
      element: $('.second-gutter')
    }, {
      track: 3,
      element: $('.third-gutter')
    }]
  },
  right: {
    columnGutters: [{
      track: 1,
      element: $('.first-gutter')
    }],
    rowGutters: [{
      track: 1,
      element: $('.second-gutter')
    }, {
      track: 3,
      element: $('.third-gutter')
    }]
  }
}
