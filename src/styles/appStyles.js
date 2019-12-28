function appStyles() {
    return (
        theme => ({
            container: {
                border: '1px solid black',
                position:' absolute',
                margin: 'auto',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '90%',
                height: '95vh',
                display: 'grid',
                'grid-template-columns': '1fr',
                'grid-template-rows': 'auto 1fr auto'
            }
        })
    )
}

export default appStyles;