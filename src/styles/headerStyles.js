function headerStyles() {
    return (
        theme => ({
            container: {
                display: 'flex',
                flexDirection: 'row',
                fontFamily: 'Roboto',
                color: '#FFC53D',
                justifyContent: 'space-between',
                alignContent: 'center',
                background: '#0097a7',
                height: '50px'
            },
            button:
            {
                color: 'white',
                left: '10px',
            },
            searchIcon:
            {
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            menuButton: {
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                left: '10px',
            }
        })
    )
}

export default headerStyles;