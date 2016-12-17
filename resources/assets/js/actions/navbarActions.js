export function openNav() {
    return {
        type: 'OPEN_NAV',
    };
}

export function closeNav() {
    return {
        type: 'CLOSE_NAV',
    };
}

export function toggleNav() {
    return {
        type: 'TOGGLE_NAV',
    };
}
