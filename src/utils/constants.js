import download from '../images/down-arrow.png'

export const share_url = 'https://scene.zeplin.io/'
export const logo = 'https://scene.zeplin.io/img/icZeplin.svg'
export const tw_logo = 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg'
export const options = {
    buttons: {
        showThumbnailsButton: false,
        showAutoplayButton: false,
        backgroundColor: '#000',

    },
    thumbnails: { showThumbnails: false },
    caption: {
        captionAlignment: 'end',
        captionFontFamily: 'inherit',
        captionFontSize: 'inherit',
        captionColor: '#bcb5b9;'
    },
    icons: {
        downloadIcon: `${download}`
    },
    settings: {
        overlayColor: '#000',
        hideControlsAfter: 3000,
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: true,


    }
}
