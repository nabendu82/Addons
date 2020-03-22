var currentTheme = '';

const themes = {
    'travel0': {
        images: {
            theme_frame: 'sun.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: '#111',
        }
    },
    'travel1': {
        images: {
            theme_frame: 'travel1.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel2': {
        images: {
            theme_frame: 'travel2.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel3': {
        images: {
            theme_frame: 'travel3.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel4': {
        images: {
            theme_frame: 'travel4.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel5': {
        images: {
            theme_frame: 'travel5.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel6': {
        images: {
            theme_frame: 'travel6.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel7': {
        images: {
            theme_frame: 'travel7.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel8': {
        images: {
            theme_frame: 'travel8.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel9': {
        images: {
            theme_frame: 'travel9.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel10': {
        images: {
            theme_frame: 'travel10.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel11': {
        images: {
            theme_frame: 'travel11.jpeg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel12': {
        images: {
            theme_frame: 'travel12.jpeg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel13': {
        images: {
            theme_frame: 'travel13.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel14': {
        images: {
            theme_frame: 'travel14.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel15': {
        images: {
            theme_frame: 'travel15.png',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel16': {
        images: {
            theme_frame: 'travel16.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel17': {
        images: {
            theme_frame: 'travel17.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel18': {
        images: {
            theme_frame: 'travel15.jpeg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'black',
        }
    },
    'travel19': {
        images: {
            theme_frame: 'travel19.jpeg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel20': {
        images: {
            theme_frame: 'travel20.png',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel21': {
        images: {
            theme_frame: 'travel21.jpg',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },
    'travel22': {
        images: {
            theme_frame: 'travel22.png',
        },
        colors: {
            frame: '#CF723F',
            tab_background_text: 'white',
        }
    },

    'travel23': {
        images: {
            theme_frame: 'moon.jpg',
        },
        colors: {
            frame: '#000',
            tab_background_text: '#fff',
        }
    }
};

function setTheme(theme) {
    if (currentTheme === theme) {
        return;
    }
    currentTheme = theme;
    browser.theme.update(themes[theme]);
}

function checkTime() {
    let date = new Date();
    let hours = date.getHours();
    setTheme(`travel${hours}`);
}

checkTime();

browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});