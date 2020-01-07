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
                height: '50px',
                alignItems: 'center',
                padding: '0px 10px',
            },
            button:
            {
                color: 'white',
                margin: '0px 5px',
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
                display: 'none',
            },
            textField: {
                top: '7px',
            },
            spacer:
            {
                flex: 1,
            },
            sideDrawer:{
                width: '243px',
                background: '#0097a7',
                position: 'fixed',
                marginLeft: '-10px',
                // top: '94px',
                // left: '55px',
                height: '180px',
                flexDirection: 'column',
                zIndex: '100',
                padding: '5px',
                display: 'none',
            },
            box:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '5px',
            }
        })
    )
}

export default headerStyles;