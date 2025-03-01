const lightTheme = {
  brand: '#546de5',
  text: 'rgb(52, 52, 52)',
  textLink: '#1663bb',
  bg: '#fff',

  colors: {
    text: {
      danger: 'rgb(185, 28, 28)',
      muted: '#4b5563',
    },
    bg: {
      danger: '#dc3545'
    }
  },

  menubar: {
    bg: 'rgb(44, 44, 44)',
  },

  sidebar: {
    color: 'rgb(52, 52, 52)',
    muted: '#4b5563',
    bg: '#F3F3F3',
    dragbar: 'rgb(200, 200, 200)',

    workspace: {
      bg: '#e1e1e1'
    },

    search: {
      border: '1px solid rgb(211 211 211)',
      bg: '#fff'
    },

    collection: {
      item: {
        bg: '#e1e1e1',
        hoverBg: '#e7e7e7',
        indentBorder: 'solid 1px #e1e1e1',
        active: {
          indentBorder: 'solid 1px #d0d0d0'
        }
      }
    },

    dropdownIcon: {
      color: 'rgb(110 110 110)'
    }
  },

  welcome: {
    heading: '#737373',
    muted: '#4b5563'
  },

  dropdown: {
    color: "rgb(48 48 48)",
    iconColor: "rgb(75, 85, 99)",
    bg: '#fff',
    hoverBg: '#e9e9e9',
    shadow: 'rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px',
    seperator: '#e7e7e7',
    labelBg: '#f3f3f3'
  },

  request: {
    methods: {
      get: 'rgb(5, 150, 105)',
      post: '#8e44ad',
      put: '#ca7811',
      delete: 'rgb(185, 28, 28)'
    }
  },

  requestTabPanel: {
    url: {
      bg: '#f3f3f3',
      icon: '#515151'
    },
    dragbar: {
      border: '#efefef',
      activeBorder: 'rgb(200, 200, 200)'
    },
    bodyModeSelect: {
      color: '#efefef'
    },
    responseSendIcon: 'rgb(209, 213, 219)',
    responseStatus: 'rgb(117 117 117)',
    responseOk: '#047857',
    responseError: 'rgb(185, 28, 28)'
  },

  collection: {
    environment: {
      bg: '#efefef',

      settings: {
        bg: 'white',
        sidebar: {
          bg: '#eaeaea',
          borderRight: 'transparent'
        },
        item: {
          border: '#546de5',
          hoverBg: '#e4e4e4',
          active: {
            bg: '#dcdcdc',
            hoverBg: '#dcdcdc'
          },
        },
        gridBorder: '#f4f4f4'
      }
    },

    sidebar: {
      bg: '#eaeaea'
    }
  },

  modal: {
    title: {
      color: 'rgb(86 86 86)',
      bg: '#f1f1f1',
      iconColor: 'black'
    },
    body: {
      color: 'rgb(52, 52, 52)',
      bg: 'white',
    },
    input : {
      bg: 'white',
      border: '#ccc',
      focusBorder: '#8b8b8b'
    },
    backdrop: {
      opacity: 0.4
    }
  },

  button: {
    secondary: {
      color: '#212529',
      bg: '#e2e6ea',
      border: '#dae0e5',
      hoverBorder: '#696969'
    },
    close: {
      color: '212529',
      bg: 'white',
      border: 'white',
      hoverBorder: ''
    },
    disabled: {
      color: '#9f9f9f',
      bg: '#efefef',
      border: 'rgb(234, 234, 234)'
    }
  },

  tabs: {
    active: {
      color: 'rgb(50, 46, 44)',
      border: '#546de5'
    }
  },

  requestTabs: {
    color: 'rgb(52, 52, 52)',
    bg: '#f7f7f7',
    borromBorder: '#efefef',
    icon: {
      color: '#9f9f9f',
      hoverColor: 'rgb(76 76 76)',
      hoverBg: 'rgb(234, 234, 234)'
    },
    active: {
      bg: '#e7e7e7'
    },
    shortTab: {
      color: 'rgb(117 117 117)',
      bg: 'white',
      hoverColor: 'rgb(76 76 76)',
      hoverBg: '#eaeaea'
    }
  },

  codemirror: {
    bg: 'white',
    border: '#efefef',
    gutter: {
      bg: '#f3f3f3'
    }
  },

  table: {
    border: '#efefef',
    thead : {
      color: '#616161'
    },
    striped: '#f3f3f3'
  },

  plainGrid: {
    hoverBg: '#f4f4f4'
  }
};

export default lightTheme;
