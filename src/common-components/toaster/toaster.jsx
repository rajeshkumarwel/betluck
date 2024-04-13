import { Store } from 'react-notifications-component';

export const successNotification = {
    title: '',
    message: '',
    type: 'success',
    insert: 'top',
    container: 'top-full',
    animationIn: ['animate_animated', 'animate_fadeIn'],
    animationOut: ['animate_animated', 'animate_fadeOut'],
    dismiss: {
        duration: 15000,
        onScreen: true
      }
}

export const warningNotification = {
    title: '',
    message: '',
    type: 'warning',
    insert: 'top',
    container: 'top-full',
    animationIn: ['animate_animated', 'animate_fadeIn'],
    animationOut: ['animate_animated', 'animate_fadeOut'],
    dismiss: {
        duration: 15000,
        onScreen: true
      }
}

export const infoNotification = {
    title: '',
    message: '',
    type: 'info',
    insert: 'top',
    container: 'top-full',
    animationIn: ['animate_animated', 'animate_fadeIn'],
    animationOut: ['animate_animated', 'animate_fadeOut'],
    dismiss: {
        duration: 15000,
        onScreen: true
      }
}

export const errorNotification = {
    title: '',
    message: '',
    type: 'danger',
    insert: 'top',
    container: 'top-full',
    animationIn: ['animate_animated', 'animate_fadeIn'],
    animationOut: ['animate_animated', 'animate_fadeOut'],
    dismiss: {
        duration: null,
        onScreen: true
      }
}

export const toaster = (title, message, notification) => {
    Store.addNotification({
        ...notification,
        title: title,
        message: message
    })
}