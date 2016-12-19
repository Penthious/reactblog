/**
 * Opens the navbar
 */
export const openNav = () =>
    ({
        type: 'OPEN_NAV',
    });

/**
 * Closes the navbar
 */
export const closeNav = () =>
    ({
        type: 'CLOSE_NAV',
    });

/**
 * Toggles the navbar
 */
export const toggleNav = () =>
    ({
        type: 'TOGGLE_NAV',
    });
